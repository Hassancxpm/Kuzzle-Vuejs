import kuzzle from '../services/kuzzle'
export default {
  state: {
     messages: []
  },
  sendMessage (content) {
    let message = {content, date: Date.now()}
    kuzzle
      .collection('messages', 'klack')
      .createDocument(message, {title: 'titre', content: message})
  },
  subscribeMessages () {
  kuzzle
    .collection('messages', 'klack')
    .subscribe({}, (error, notification) => {
      if (error) {
        console.log(error.message)
        return
      }
      this.state.messages.push({
        ...notification.document.content
      })
    })
}
}
