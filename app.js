const volumeIcon = document.querySelector('#volume')
const lines = document.querySelectorAll('.line')
const circles = document.querySelectorAll('.circle')
const homeIcon = document.querySelector('#home')
const roof = document.querySelector('#ceiling')
const heart = document.querySelector('#heart')
const homeBody = document.querySelector ('#body')
const settingIcon = document.querySelector ('#settings')
const wheel1 = document.querySelector('#s2')
const wheel2 = document.querySelector('#s1')

volumeIcon.addEventListener('click', () => {
  volumeIcon.style.animation = 'getBig .5s 2 ease-in-out forwards alternate'
  lines.forEach((line) => {
    line.style.animation = 'glowLines 1s ease-in-out'
  })

  circles[0].style.animation =
    'jumpCircles2 .5s 2 ease-in-out forwards alternate'
  circles[1].style.animation =
    'jumpCircles .5s 2 ease-in-out forwards alternate'

  volumeIcon.addEventListener('animationend', () => {
    circles.forEach((circle) => {
      circle.style.animation = ''
    })

    lines.forEach((line) => {
      line.style.animation = ''
    })

    volumeIcon.style.animation = ''
  })
})

homeIcon.addEventListener('click', () => {
    homeBody.style.animation ='glowLines 1s ease-in-out'
    homeIcon.style.animation = 'getBig .5s 2 ease-in-out forwards alternate'
    roof.style.animation = 'roofUp .5s 2 alternate ease-in-out'
    heart.style.animation = 'heartUp .4s .2s 2 ease-in-out forwards alternate'
    homeIcon.addEventListener ('animationend', () => {
        homeIcon.style.animation = ''
        heart.style.animation = ''
        roof.style.animation = ''
        homeBody.style.animation =''
    })

})


settingIcon.addEventListener('click', () => {

     settingIcon.style.animation = 'getBig .5s 2 ease-in-out forwards alternate'
    wheel1.style.animation = 'rotate1 1s 2 forwards  alternate ease-in-out '
    wheel2.style.animation = 'rotate2 1s 2 forwards alternate ease-in-out'

    settingIcon.addEventListener ('animationend', () => {
        settingIcon.style.animation = ''
        wheel1.style.animation =''
        wheel2.style.animation = ''
    
    })
})