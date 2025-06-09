let up = document.getElementById('top');
let right = document.getElementById('right');
let left = document.getElementById('left');
let bottom = document.getElementById('bottom');
let image = document.querySelector('img')



let upAndDown = 0;
let leftAndRight = 0;

up.addEventListener('click', () => {
  upAndDown += 40;
  image.style.bottom = `${upAndDown}px`
})

bottom.addEventListener('click', () => {
  image.style.bottom = `${upAndDown}px`
  upAndDown -= 40;

})

right.addEventListener('click', () => {
  leftAndRight += 40
  image.style.left = `${leftAndRight}px`
})
left.addEventListener('click', () => {
  image.style.left = `${leftAndRight}px`
  leftAndRight -= 40
})

