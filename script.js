function openEnvelope() {
  const envelope = document.querySelector('.envelope');
  const audio = document.getElementById('audio');
  
  envelope.classList.add('open');
  audio.play().catch(error => console.log("خطا در پخش آهنگ: ", error));
  // دیگه opacity رو تغییر نمی‌دیم
}

function toggleAudio() {
  const audio = document.getElementById('audio');
  const playIcon = document.querySelector('.play-icon');
  const pauseIcon = document.querySelector('.pause-icon');

  if (audio.paused) {
    audio.play().catch(error => console.log("خطا در پخش آهنگ: ", error));
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
  } else {
    audio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
  }
}

// وقتی آهنگ متوقف می‌شه، دکمه همچنان پیداست، پس این رو حذف می‌کنیم یا تغییر نمی‌دیم
document.getElementById('audio').addEventListener('pause', () => {
  // دیگه opacity رو تغییر نمی‌دیم
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});