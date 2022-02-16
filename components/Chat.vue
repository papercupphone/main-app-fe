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

export default {
  components: {
    Messages,
    Sender
  },
}
</script>