export const state = () => ({
    messages: []
})

export const mutations = {
    addMessage(state, messageObj) {
        state.messages.push(messageObj)
    }
}