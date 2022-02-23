<template>
    <div class="videocall-header">
        <div class="header-item header-item-left"></div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-right">
            <button v-if="maximized" class="header-item-button" @click="min()">
                <minimize-icon />
            </button>
            <button v-if="!maximized" class="header-item-button" @click="max()">
                <maximize-icon />
            </button>
        </div>
    </div>
</template>

<script>
import { MaximizeIcon, MinimizeIcon } from 'vue-feather-icons'

export default {
    components: {
        MinimizeIcon,
        MaximizeIcon
    },
    methods: {
        min() {
            this.$store.commit("toggleMaximized")
            this.$modal.show('minimizedVideoModal')
            this.$modal.hide('maximizedVideoModal')
        },
        max() {
            console.log("asd")
            this.$store.commit("toggleMaximized")
            this.$modal.show('maximizedVideoModal')
            this.$modal.hide('minimizedVideoModal')
        },
    },
    computed: {
        maximized() {
            return this.$store.state.maximized
        }
    }
}
</script>
