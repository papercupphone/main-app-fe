<template>
    <div class="videocall-footer">
        <div class="footer-item header-item-left"></div>
        <div class="footer-item header-item-center">
            <button class="footer-item-button" @click="endCall">
                <phone-off-icon />
            </button>
        </div>
        <div class="footer-item header-item-right"></div>
    </div>
</template>

<script>
import { PhoneOffIcon } from 'vue-feather-icons'

export default {
    components: {
        PhoneOffIcon,
    },
    methods: {
        async endCall() {
            await this.$signalService.removeTracksFromPCs()
            this.$modal.hide("maximizedVideoModal")
            this.$modal.hide("minimizedVideoModal")
            this.$store.commit("toggleInCall")
        }
    },
    computed: {}
}
</script>
