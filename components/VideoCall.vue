<template>
    <b-modal
        content-class="modal-space"
        class="modal"
        id="videocall"
        size="lg"
        ref="videocall"
        tabindex="-1"
        role="dialog"
        hide-footer
        hide-header
        hide-header-close
        centered
    ></b-modal>
</template>

<script>
export default {
    data() {
        return {};
    },
    name: "VideoCall",
    methods: {
        show() {
            this.$refs.videocall.show();
        },
        hide() {
            this.$refs.videocall.hide();
        },
    },
};
</script>
