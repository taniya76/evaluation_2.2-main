const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.vertical_list')
// const section1 = document.querySelector('.vertical_list')

window.addEventListener('scroll', (e) => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 250
//   const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
if((window.scrollY>400) || (window.scrollY <= 600) ){
    section1.style.color = `#dc3545`
}  
if((window.scrollY>800) || (window.scrollY <= 1000) ){
    section1.style.color = `#000`
}  
})

