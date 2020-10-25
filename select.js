let selectedMinuteStr = ''
let selectedStrengthStr = ''

document.body.requestFullscreen();

function selectMinute(minuteStr) {
    selectedMinuteStr = minuteStr;
    window.location.href = 'strength.html'
}

function selectStrength(strengthStr) {
    selectedStrengthStr = strengthStr;
    window.location.href = 'video.html'
}