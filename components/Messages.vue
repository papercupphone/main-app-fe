<template>
  <div class="main-message-area">
    <div v-for="(message, index) in messages" :key="index" class="message-box">
      <div :class="`message-${message.side} message`">
        <div :class="`date-${message.side}`">{{ message.date }}</div>
        <p>{{ message.text }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Messages",
  computed: {
    messages() {
      return this.$store.state.messages
    },
  },
};
</script>
