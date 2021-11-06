const shareButton = document.getElementById('share-btn'),
   shareBox = document.getElementById('share-box');

//  Show shareBox
shareButton.addEventListener('click', () => {
   shareBox.classList.toggle('show');
});

const shareButton2 = document.getElementById('share-btn2');

shareButton2.addEventListener('click', () => {
   shareBox.classList.remove('show');
});
