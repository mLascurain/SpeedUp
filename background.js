// NOT USING IT
// chrome.storage.local.get('videoSpeed', function(result) {
//   var videoSpeed = result.videoSpeed;
//   chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, { action: 'setVideoSpeed', speed: videoSpeed });
//   });
// });

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === 'setVideoSpeed') {
//     chrome.storage.local.set({ videoSpeed: request.speed });
//   }
// });