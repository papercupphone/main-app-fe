<template>
    <div class="chat-header">
        <div class="header-item header-item-left">{{ this.$route.params.room }}</div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-rigth">
            <button class="header-item-button">
                <phone-call-icon />
            </button>
            <button class="header-item-button">
                <video-icon />
            </button>
        </div>
    </div>
</template>

<script>
import { VideoIcon } from 'vue-feather-icons'
import { PhoneCallIcon } from 'vue-feather-icons'

export default {
    components: {
        VideoIcon,
        PhoneCallIcon
    }
}
</script>
