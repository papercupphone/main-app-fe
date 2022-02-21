<template>
    <div class="videocall-header">
        <div class="header-item header-item-left"></div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-right">
            <button class="header-item-button" @click="minimize()">
                <minimize-icon />
            </button>
        </div>
    </div>
</template>

<script>
import { MinimizeIcon } from 'vue-feather-icons'

export default {
    components: {
        MinimizeIcon
    },
    props: ['hide'],
    methods: {
        minimize() {
            this.hide()
        }
    }
}
</script>
