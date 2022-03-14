const bc = new BroadcastChannel('msg-2')

const body = document.body

bc.onmessage = function(e) {
  console.log(e)
  const data = e.data
  const text = `receive msg: ${data} from tab ${data}`
  body.append(`<p>${text}</p>`)
}

function post() {
  bc.postMessage('我是msg-2')
}
