////////
//////
////           Header JS
///
//


 const sakums = document.querySelector('.nav_item1')
 const par_mums = document.querySelector('.nav_item2')
 const kontakti = document.querySelector('.nav_item3')

// console.log(sakums, par_mums, kontakti)


sakums.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site.html#';
  });
par_mums.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site_parmums.html';
  });
kontakti.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site_kontakti.html';
  });
  const sakums1 = document.querySelector('.nav_item4')
 const par_mums1 = document.querySelector('.nav_item5')
 const kontakti1 = document.querySelector('.nav_item6')
 sakums1.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site.html#';
  });
par_mums1.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site_parmums.html';
  });
kontakti1.addEventListener('click', () => {
    window.location='file:///Users/ankit/Desktop/PROG-1-GIT/Site%20programming/Homework_site_kontakti.html';
  });

////////
//////
////           Slider JS
///
//




const prev = document.querySelector('.slider-prev')
const next = document.querySelector('.slider-next')
const dots = document.querySelectorAll('.slider-dot')
const images = document.querySelectorAll('.image_forest-js')

// console.log(next)


let activeIndex = 0

const removeActiveFromAllImages = () => {

  images.forEach((image)=> {
    image.classList.remove('active')
  })
}
const removeActiveFromAllDots = () => {
  dots.forEach((dot) => {
    dot.classList.remove('active')
  })
}

next.addEventListener('click',()=>{
 removeActiveFromAllImages()
 if (activeIndex === images.length - 1) {
   activeIndex = 0
 } else {
   activeIndex = activeIndex + 1
 }
 removeActiveFromAllDots()
 if (activeIndex === dots.length - 1) {
   activeIndex = 0
 } else {
   activeIndex = activeIndex + 1
 }
 dots[activeIndex].classList.add('active')
 images[activeIndex].classList.add('active')
})
prev.addEventListener('click',()=>{
  removeActiveFromAllImages()
  if (activeIndex === 0) {
    activeIndex = images.length - 1
  } else {
    activeIndex = activeIndex - 1
  }
  removeActiveFromAllDots()
  if (activeIndex === 0) {
    activeIndex = dots.length - 1
  } else {
    activeIndex = activeIndex - 1
  }
  dots[activeIndex].classList.add('active')
  images[activeIndex].classList.add('active')
})


console.log(images, dots, next, prev)
