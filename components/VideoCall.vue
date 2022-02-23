<template>
    <client-only>
        <div>
            <modal
                name="maximizedVideoModal"
                :draggable="false"
                :clickToClose="false"
                width="100%"
                height="100%"
                classes="modal-maximized"
                styles="background-color:rgb(0 0 0 / 50%);box-shadow:none;"
            >
                <video-call-header :minimize="minimize" :maximized="true" />
                <video-container
                    :class="`local-video video-${(remoteStreams.length + 1)}`"
                    :muted="true"
                    :stream="localStream"
                />
                <video-container
                    v-for="(streamObj, index) in remoteStreams"
                    :muted="false"
                    :key="`video-container-${index}`"
                    :class="`remote-video video-${(remoteStreams.length + 1)}`"
                    :stream="streamObj.stream"
                />
            </modal>
            <modal
                name="minimizedVideoModal"
                :draggable="true"
                :resizable="$device.isDesktop"
                :clickToClose="false"
                width="50%"
                height="50%"
                classes="modal-minimized"
                styles="background-color:rgb(0 0 0 / 50%);box-shadow:none;"
            >
                <video-call-header :maximize="maximize" :maximized="false" />
                <video-container
                    :class="`local-video video-${(remoteStreams.length + 1)}`"
                    :muted="true"
                    :stream="localStream"
                />
                <video-container
                    v-for="(streamObj, index) in remoteStreams"
                    :muted="false"
                    :key="`video-container-${index}`"
                    :class="`remote-video video-${(remoteStreams.length + 1)}`"
                    :stream="streamObj.stream"
                />
            </modal>
        </div>
    </client-only>
</template>

<script>
import VideoContainer from "~/components/VideoContainer.vue"
import VideoCallHeader from "~/components/VideoCallHeader.vue"

export default {
    data() {
        return {
            minimized: false
        }
    },
    name: "VideoCall",
    components: {
        VideoContainer,
        VideoCallHeader
    },
    methods: {
        minimize() {
            this.$modal.hide('maximizedVideoModal')
            this.$modal.show('minimizedVideoModal')
        },
        maximize() {
            this.$modal.show('maximizedVideoModal')
            this.$modal.hide('minimizedVideoModal')
        },
        show() {
            this.$modal.show('maximizedVideoModal')
        },
        hide() {
            this.$modal.hide('maximizedVideoModal')
            this.$modal.hide('minimizedVideoModal')
        }
    },
    mounted() {
        this.$signalService.setOnMediaStream((mediaStream, remoteSocketId) => {
            this.$store.commit('addRemoteStream', { stream: mediaStream, remoteSocketId })
        })
        this.$signalService.setOnDisconnected((remoteSocketId) => {
            this.$store.commit('removeRemoteStream', remoteSocketId)
        })
    },
    computed: {
        localStream() {
            return this.$store.state.localStream
        },
        remoteStreams() {
            return this.$store.state.remoteStreams
        }
    }
}
</script>
