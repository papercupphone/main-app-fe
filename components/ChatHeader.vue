<template>
    <div class="chat-header">
        <div class="header-item header-item-left">{{ this.$route.params.room }}</div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-right">
            <button v-if="!inCall" class="header-item-button" @click="call()">
                <video-icon />
            </button> 
        </div>
        <VideoCall ref="videoCallComponent" />
    </div>
</template>

<script>
import { PhoneCallIcon, MaximizeIcon, VideoIcon } from 'vue-feather-icons'
import { MediaService } from "@papercupphone/communication-services"

export default {
    data() {
        return {}
    },
    components: {
        VideoIcon,
        MaximizeIcon,
        PhoneCallIcon
    },
    methods: {
        async call() {
            await this.setLocalStream()
            this.$store.commit("toggleInCall")
        },
        async maximize() {
            this.$refs.videoCallComponent.show()
        },
        async setLocalStream() {
            let media = await MediaService.getMedia({ audio: true, video: true })
            this.$signalService.setLocalStream(media)
            this.$signalService.addTracksToPCs()
            this.$store.commit("setLocalStream", media)
            this.$refs.videoCallComponent.show()
        },
    },
    computed: {
        inCall(){
            return this.$store.state.inCall
        }
    },
    mounted(){
        this.call();
    }
}
</script>
