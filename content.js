
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "setSpeed") {
    document.querySelector('video').playbackRate = request.speed;
  }
});
