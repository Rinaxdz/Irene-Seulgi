/*const albumImg = document.getElementById('likeAFlower');
const audio = document.getElementById('audio-likeAFlower');

albumImg.addEventListener('mouseenter', () => {
  audio.currentTime = 0; // starts from beginning
  audio.play();
});

albumImg.addEventListener('mouseleave', () => {
  audio.pause();
});*/

function addAudioHoverEffect(imageId, audioId) {
  const albumImg = document.getElementById(imageId);
  const audio = document.getElementById(audioId);

  if (albumImg && audio) {
    albumImg.addEventListener('mouseenter', () => {
      audio.currentTime = 0;
      audio.play();
    });

    albumImg.addEventListener('mouseleave', () => {
      audio.pause();
    });
  }
}

addAudioHoverEffect('likeAFlower', 'audio-likeAFlower');
addAudioHoverEffect('twentyEightReasons', 'audio-twentyEightReasons');
addAudioHoverEffect('babyNotBaby', 'audio-babyNotBaby');
