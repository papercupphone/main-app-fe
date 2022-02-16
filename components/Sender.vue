<template>
  <div class="main-chat-sender">
    <div class="console">
      <input
        class="input"
        v-model="text"
        v-on:keyup.enter="send()"
        type="text"
        placeholder="Write your message..."
      />
      <button class="submit" id="send-msg" @click="send()">
        <send-icon size="1.5x"></send-icon>
      </button>
    </div>
  </div>
</template>
<script>
import { SendIcon } from "vue-feather-icons";

export default {
  components: {
    SendIcon,
  },
  name: "Sender",
  data() {
    return {
      text: "",
    };
  },
  methods: {
    send: function () {
      if (this.text !== "") {
        let text = this.text;
        let side = "rigth";
        this.$store.commit("addMessage", { text, side });
        this.$signalService.sendMessageOverWebRTC(text);
        this.text = "";
      }
    },
  },
};
</script>
