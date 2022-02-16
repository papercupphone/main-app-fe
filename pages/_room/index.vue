<template>
  <Chat />
</template>

<script>
import Chat from "~/components/Chat.vue";
export default {
  components: { Chat },
  name: "Room",
  mounted() {
    this.$signalService.connect(
      this.$route.params.room,
      this.$config.SOCKET_URL,
      this.$config.BASE_URL
    );

    this.$signalService.setPeerListener((msg) => {
      this.$store.commit("addMessage", { text: msg.data, side: "left" });
    });
  },
};
</script>
