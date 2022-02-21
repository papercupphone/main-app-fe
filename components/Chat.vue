<template>
  <div class="main-chat">
    <div class="main-chat-content">
      <Messages />
      <Sender />
    </div>
  </div>
</template>

<script>
import Messages from "~/components/Messages.vue"
import Sender from "~/components/Sender.vue"
import VideoCall from "~/components/VideoCall.vue"

export default {
  methods: {
    showVedioModal() {
      this.$refs.videoComponent.show();
    },
    showAudioModal() {
      this.$refs.videoComponent.show();
    },
  },
  components: {
    Messages,
    Sender,
    VideoCall
  },
}
</script>