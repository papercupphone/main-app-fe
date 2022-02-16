import { SignalService } from '@papercupphone/communication-services'

export default (context, inject) => {
    inject('signalService', new SignalService())
}