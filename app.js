// ? Task: Simple slider


// Solution 1
const slides = document.querySelectorAll('.slide')
for (const slide of slides) {
    slide.addEventListener('click', () => {
       slides.forEach(i => i.classList.remove('active'));
       slide.classList.add('active')
    })
}



// ! Explanation: 
