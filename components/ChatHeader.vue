<template>
    <div class="chat-header">
        <div class="header-item header-item-left">{{ this.$route.params.room }}</div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-right">
            <button class="header-item-button" @click="call()">
                <video-icon />
            </button>
        </div>
        <VideoCall ref="videoComponent" />
    </div>
</template>

<script>
import { VideoIcon } from 'vue-feather-icons'
import { PhoneCallIcon } from 'vue-feather-icons'
import { MediaService } from "@papercupphone/communication-services"

export default {
    components: {
        VideoIcon,
        PhoneCallIcon
    },
    methods: {
        async call() {
            await this.setLocalStream()
        },
        async setLocalStream() {
            let media = await MediaService.getMedia({ audio: true, video: true })
            this.$signalService.setLocalStream(media)
            this.$signalService.addTracksToPCs()
            this.$store.commit("setLocalStream", media)
            this.$refs.videoComponent.show()
        },
    },
}
</script>
