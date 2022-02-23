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
        endCall(){
            console.log("end call")
        }
    },
    computed: {}
}
</script>
