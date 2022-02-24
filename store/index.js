export const state = () => ({
    messages: [],
    localStream: null,
    mediaConstraints: {
        video: true,
        audio: true
    },
    inCall: false,
    maximized: true,
    muted: false,
    camOpen: true,
    remoteStreams: []
})

export const mutations = {
    addMessage(state, messageObj) {
        state.messages.push(messageObj)
    },
    toggleInCall(state) {
        state.inCall = !state.inCall
    },
    toggleMaximized(state) {
        state.maximized = !state.maximized
    },
    toggleAudioEnabled(state) {
        state.muted = !state.muted
    },
    toggleVideoEnabled(state) {
        state.camOpen = !state.camOpen
    },
    setLocalStream(state, localStream) {
        state.localStream = localStream
    },
    addRemoteStream(state, remoteStream) {
        state.remoteStreams.push(remoteStream)
    },
    setMediaConstraints(state, mediaConstraints) {
        state.mediaConstraints = mediaConstraints
    },
    removeLocalStream(state) {
        state.localStream = null
    },
    removeAllRemoteStreams(state) {
        state.remoteStreams = []
    },
    removeRemoteStream(state, remoteSocketId) {
        state.remoteStreams = state.remoteStreams.filter(el => {
            return el.remoteSocketId !== remoteSocketId
        })
    }
}