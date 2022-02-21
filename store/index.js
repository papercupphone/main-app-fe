export const state = () => ({
    messages: [],
    localStream: null,
    mediaConstraints: {
        video: true,
        audio: true
    },
    remoteStreams: []
})

export const mutations = {
    addMessage(state, messageObj) {
        state.messages.push(messageObj)
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
    }
}