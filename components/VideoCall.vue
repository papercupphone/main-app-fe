<template>
    <client-only>
        <div>
            <modal
                name="minimizedVideoModal"
                draggable=".drag-handler"
                :clickToClose="false"
                width="50%"
                height="50%"
                classes="modal-minimized"
                styles="background-color:rgb(0 0 0 / 50%);box-shadow:none;"
            >
                <div class="drag-handler"></div>
                <video-call-header />
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
                <video-call-footer />
            </modal>
            <modal
                name="maximizedVideoModal"
                :draggable="false"
                :clickToClose="false"
                width="100%"
                height="100%"
                classes="modal-maximized"
                styles="background-color:rgb(0 0 0 / 50%);box-shadow:none;"
            >
                <video-call-header />
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
                <video-call-footer />
            </modal>
        </div>
    </client-only>
</template>

<script>
import VideoContainer from "~/components/VideoContainer.vue"
import VideoCallHeader from "~/components/VideoCallHeader.vue"
import VideoCallFooter from "~/components/VideoCallFooter.vue"

export default {
    data() {
        return {
            minimized: false
        }
    },
    name: "VideoCall",
    components: {
        VideoContainer,
        VideoCallHeader,
        VideoCallFooter
    },
    methods: {
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
