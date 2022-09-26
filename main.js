const model = document.querySelector(".model-img")
const modeBalloon = document.querySelector(".model-balloon img")

model.addEventListener('mouseover', () => {
   modeBalloon.style.opacity = '1'
   modeBalloon.style.transition = '0.6s all ease-in-out'
})

model.addEventListener('mouseout', () => {
    modeBalloon.style.opacity = "0"
    modeBalloon.style.transition = '.6s all ease-in-out'
})

