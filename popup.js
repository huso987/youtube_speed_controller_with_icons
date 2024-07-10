
document.getElementById('speed1x').addEventListener('click', () => setSpeed(1));
document.getElementById('speed2x').addEventListener('click', () => setSpeed(2));
document.getElementById('speed4x').addEventListener('click', () => setSpeed(4));
document.getElementById('speed5x').addEventListener('click', () => setSpeed(5));
document.getElementById('speed10x').addEventListener('click', () => setSpeed(10));

function setSpeed(speed) {
  chrome.tabs.executeScript(null, {
    code: `document.querySelector('video').playbackRate = ${speed};`
  });
}
