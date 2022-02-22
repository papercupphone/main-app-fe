<template>
    <div class="videocall-header">
        <div class="header-item header-item-left"></div>
        <div class="header-item header-item-center"></div>
        <div class="header-item header-item-right">
            <button v-if="maximized" class="header-item-button" @click="_minimize()">
                <minimize-icon />
            </button>
             <button v-if="!maximized" class="header-item-button" @click="_maximize()">
                <maximize-icon />
            </button>
        </div>
    </div>
</template>

<script>
import { MaximizeIcon,MinimizeIcon } from 'vue-feather-icons'

export default {
    components: {
        MinimizeIcon,
        MaximizeIcon
    },
    props: ['minimize','maximize','maximized'],
    methods: {
        _minimize() {
            this.minimize()
        },
        _maximize(){
            this.maximize()
        }
    }
}
</script>
