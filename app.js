// ? Task: Simple slider


// Solution 1
function slidesPlugin(activeSlide=0) {
  const slides = document.querySelectorAll(".slide");
slides[activeSlide].classList.add('active');
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      slides.forEach((i) => i.classList.remove("active"));
      slide.classList.add("active");
    });
  }
}
slidesPlugin(3);

// ! Explanation: 
