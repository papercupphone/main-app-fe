<template>
  <div class="main-message-area">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="`message-${message.side}`"
    >
      <div  :class="`message-${message.side} message-box`">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Messages",
  computed: {
    messages() {
      return this.$store.state.messages;
    },
  },
};
</script>
