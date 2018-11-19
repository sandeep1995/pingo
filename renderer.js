const { ipcRenderer } = require('electron');

ipcRenderer.on('message', function(event, text) {
  var container = document.getElementById('messages');
  var message = document.createElement('div');
  message.innerHTML = text;
  container.appendChild(message);
})

ipcRenderer.on('version', function(event, text) {
    console.log(text);
    document.getElementById('version').innerText = text;
})