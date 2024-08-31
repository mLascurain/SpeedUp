import './style.css'

getSpeed()

document.getElementById('speed').addEventListener('click', () => {
  getSpeed()
});

// Retrieves a numeric value from an input element with the ID speed and calls setVideoSpeed()
function getSpeed(){
  const speed = parseFloat(document.getElementById('speed').value);

  // Query the currently active tab in the current window.
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // Execute a script in the context of the active tab.
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: true },
      func: setVideoSpeed,
      args: [speed]
    });
  });
}

// Adjust the playback speed of all video elements on a webpage
function setVideoSpeed(speed) {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}
