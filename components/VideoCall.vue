<template>
    <b-modal
        content-class="modal-space"
        class="modal"
        id="videocall"
        size="xl"
        ref="videocall"
        tabindex="-1"
        role="dialog"
        hide-footer
        hide-header
        hide-header-close
        hide-backdrop
        centered
    >
        <video-call-header :hide="hide" />
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
    </b-modal>
</template>

<script>
import VideoContainer from "~/components/VideoContainer.vue"
import VideoCallHeader from '~/components/VideoCallHeader.vue'

export default {
    data() {
        return {
            istirim:{}
        }
    },
    name: "VideoCall",
    components: {
        VideoContainer,
        VideoCallHeader
    },
    methods: {
        show() {
            this.$refs.videocall.show();
        },
        hide() {
            this.$refs.videocall.hide();
        },
    },
    mounted() {
        this.$signalService.setOnMediaStream((mediaStream) => {
            console.log("onMediaStream")
            console.log(mediaStream.getVideoTracks()[0])
            window.streamx = mediaStream.getVideoTracks()[0]
            this.istirim = mediaStream
            this.$store.commit('addRemoteStream', { stream: mediaStream })
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
};
</script>
