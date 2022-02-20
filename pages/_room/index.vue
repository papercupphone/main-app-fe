<template>
  <Chat />
</template>

<script>
import Chat from "~/components/Chat.vue"
import { MediaService } from "@papercupphone/communication-services"

export default {
  components: { Chat },
  name: "Room",
  methods: {
    async setLocalStream() {
      let media = await MediaService.getMedia({ audio: true, video: true })
      this.$signalService.setLocalStream(media)
    },
    pageScroll() {
      let chatContainer = this.$el.querySelector(".main-message-area")
      if ((chatContainer.scrollHeight - chatContainer.scrollTop) > 50) {
        setTimeout(function () {
          chatContainer.scrollBy({ top: 300, behavior: "smooth" })
        }, 310)
        setTimeout(function () {
          chatContainer.scrollBy({ top: 300, behavior: "smooth" })
        }, 1100)
      }
    }
  },
  mounted() {
    this.$signalService.connect(
      this.$route.params.room,
      this.$config.SOCKET_URL,
      this.$config.BASE_URL
    )
    //this.setLocalStream()
    this.$signalService.setPeerListener((msg) => {
      let date = `${('0' + new Date().getHours()).slice(-2)}:${('0' + new Date().getMinutes()).slice(-2)}`
      this.$store.commit("addMessage", { text: msg.data, side: "left", date, name: msg.socketId })
      this.pageScroll()
    })
  },
}
</script>
