const video = document.querySelectorAll('.stupenka__video-blok')
video.forEach(element => {
   element.addEventListener('click', function () {
      element.querySelector('video').setAttribute('controls', '')
      element.classList.add('_active')
   })
});