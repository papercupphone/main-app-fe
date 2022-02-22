import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal, {
    dynamicDefaults: {
        draggable: true,
        resizable: true,
        clickToClose: false,
        height: 'auto'
    }
})