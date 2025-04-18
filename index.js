function checkVisibility() {
  const wrapper = document.querySelector('.fade-in-wrapper'); // Vybereme wrapper pro celý obsah
  const rect = wrapper.getBoundingClientRect(); // Získáme pozici wrapperu vůči oknu

  // Pokud je celý wrapper na obrazovce, přidáme třídu "visible"
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    wrapper.classList.add('visible');
  } else {
    wrapper.classList.remove('visible'); // Pokud není viditelný, třídu odebereme
  }
}

// Zavoláme funkci při každém scrollování
window.addEventListener('scroll', checkVisibility);

// Zavoláme funkci ihned po načtení stránky, aby animace začala hned, pokud je wrapper již viditelný
document.addEventListener('DOMContentLoaded', checkVisibility);