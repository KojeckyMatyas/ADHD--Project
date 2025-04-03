function checkVisibility() {
  const wrapper = document.querySelector('.fade-in-wrapper'); 
  const rect = wrapper.getBoundingClientRect(); 

  
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    wrapper.classList.add('visible');
  } else {
    wrapper.classList.remove('visible'); 
  }
}


window.addEventListener('scroll', checkVisibility);

document.addEventListener('DOMContentLoaded', checkVisibility);