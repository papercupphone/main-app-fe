export const state = () => ({
    messages: [],
    localStream: null,
    mediaConstraints: {
        video: true,
        audio: true
    },
    maximized: true,
    remoteStreams: []
})

export const mutations = {
    addMessage(state, messageObj) {
        state.messages.push(messageObj)
    },
    toggleMaximized(state) {
        state.maximized = !state.maximized
    },
    setLocalStream(state, localStream) {
        state.localStream = localStream
    },
    addRemoteStream(state, remoteStream) {
        console.log(remoteStream)
        state.remoteStreams.push(remoteStream)
    },
    setMediaConstraints(state, mediaConstraints) {
        state.mediaConstraints = mediaConstraints
    },
    removeRemoteStream(state, remoteSocketId) {
        state.remoteStreams = state.remoteStreams.filter(el => {
            return el.remoteSocketId !== remoteSocketId
        })
    }
}