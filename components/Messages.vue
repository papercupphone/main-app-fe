<template>
    <div class="main-message-area">
        <ChatHeader />
        <div class="messages">
            <div v-for="(message, index) in messages" :key="index" class="message-box">
                <div :class="`message-${message.side} message`" :style="messageBg(message)">
                    <div class="name" v-if="message.side === 'left'">{{ message.name }}</div>
                    <div :class="`text-${message.side}`">{{ message.text }}</div>
                    <div class="time">{{ message.date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChatHeader from "./ChatHeader.vue"

export default {
    name: "Messages",
    methods: {
        messageBg(message) {
            if (message.side !== "right") {
                let backgroundColor = this.stringToColour(message.name.slice(0, -1).substr(message.name.length - 7));
                let textColor = this.isLightColor(backgroundColor) ? "black" : "white";
                return `background-color:${backgroundColor};color:${textColor}`;
            }
            return "";
        },
        stringToColour(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = (str.charCodeAt(i) + ((hash << 5) - hash)) * 5;
            }
            var colour = "#";
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 255;
                colour += ("00" + value.toString(16)).substr(-2);
            }
            return colour;
        },
        isLightColor(color) {
            const hex = color.replace("#", "");
            const c_r = parseInt(hex.substr(0, 2), 16);
            const c_g = parseInt(hex.substr(2, 2), 16);
            const c_b = parseInt(hex.substr(4, 2), 16);
            const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
            return brightness > 155;
        }
    },
    computed: {
        messages() {
            return this.$store.state.messages;
        },
    },
    components: { ChatHeader }
}
</script>
