<template>
    <div class="videocall-footer">
        <div class="footer-item header-item-left"></div>
        <div class="footer-item header-item-center">
            <button v-if="!camOpen" class="footer-item-button bluish" @click="toggleVideoEnabled">
                <camera-icon />
            </button>
            <button v-if="camOpen" class="footer-item-button redish" @click="toggleVideoEnabled">
                <camera-off-icon />
            </button>
            <button class="footer-item-button redish" @click="endCall">
                <phone-off-icon />
            </button>
            <button v-if="!muted" class="footer-item-button bluish" @click="toggleAudioEnabled">
                <mic-icon />
            </button>
            <button v-if="muted" class="footer-item-button redish" @click="toggleAudioEnabled">
                <mic-off-icon />
            </button>
        </div>
        <div class="footer-item header-item-right"></div>
    </div>
</template>

<script>
import { PhoneOffIcon, MicOffIcon, MicIcon, CameraIcon, CameraOffIcon } from 'vue-feather-icons'

export default {
    components: {
        PhoneOffIcon, MicOffIcon, MicIcon, CameraIcon, CameraOffIcon
    },
    methods: {
        async endCall() {
            await this.$signalService.removeTracksFromPCs()
            this.$modal.hide("maximizedVideoModal")
            this.$modal.hide("minimizedVideoModal")
            this.$store.commit("toggleInCall")
        },
        async toggleAudioEnabled() {
            this.$store.commit("toggleAudioEnabled")
            await this.$signalService.toggleAudioEnabled()
        },
        async toggleVideoEnabled() {
            this.$store.commit("toggleVideoEnabled")
            await this.$signalService.toggleVideoEnabled()
        }
    },
    computed: {
        muted() {
            return this.$store.state.muted
        },
        camOpen() {
            return this.$store.state.camOpen
        }
    }
}
</script>
