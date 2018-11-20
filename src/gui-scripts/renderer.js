const { ipcRenderer } = require('electron');

const select = selector => document.querySelector(selector)

let container = select('#messages')
let progressBar = select('#progressBar')
let version = select('#version')

ipcRenderer.on('message', (event, text) => {

  let message = document.createElement('div')
  message.innerHTML = text
  container.appendChild(message)

})

ipcRenderer.on('version', (event, text) => {
  version.innerText = text
})

ipcRenderer.on('download-progress', (event, text) => {
  progressBar.style.width = `${text}%`
})