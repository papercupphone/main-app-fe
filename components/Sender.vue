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
        <send-icon></send-icon>
      </button>
    </div>
  </div>
</template>
<script>
import { SendIcon } from "vue-feather-icons"

export default {
  components: {
    SendIcon,
  },
  name: "Sender",
  data() {
    return {
      text: "",
    }
  },
  methods: {
    pageScroll() {
      let chatContainer = document.querySelector(".main-message-area")
      setTimeout(function () {
        chatContainer.scrollBy({ top: 9999, behavior: "smooth" })
      }, 310)
      setTimeout(function () {
        chatContainer.scrollBy({ top: 9999, behavior: "smooth" })
      }, 1100)
    },
    send() {
      if (this.text !== "") {
        let text = this.text
        let side = "right"
        let date = `${('0' + new Date().getHours()).slice(-2)}:${('0' + new Date().getMinutes()).slice(-2)}` 
        this.$store.commit("addMessage", { text, side, date })
        this.$signalService.sendMessageOverWebRTC(text)
        this.pageScroll()
        this.text = ""
      }
    },
  },
}
</script>
