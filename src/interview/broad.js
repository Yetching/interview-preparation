const bc = new BroadcastChannel('msg-1')

const body = document.body

bc.onmessage = function(e) {
  console.log(e)
  const data = e.data
  const text = `receive msg: ${data} from tab ${data}`
  const p = document.createElement('p')
  p.innerText = text
  body.append(p)
}

function post() {
  bc.postMessage('我是msg-1')
}
