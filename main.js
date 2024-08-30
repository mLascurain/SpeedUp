import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.getElementById('setSpeed').addEventListener('click', () => {
  const speed = parseFloat(document.getElementById('speed').value);

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      func: setVideoSpeed,
      args: [speed]
    });
  });
});

function setVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}

setupCounter(document.querySelector('#counter'))
