import './style.css'

getSpeed()

document.getElementById('speed').addEventListener('click', () => {
  getSpeed()
});

function getSpeed(){
  const speed = parseFloat(document.getElementById('speed').value);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      func: setVideoSpeed,
      args: [speed]
    });
  });
}

function setVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}
