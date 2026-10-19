window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bridge p').forEach((p) => {
    const text = p.textContent;
    p.innerHTML = '';

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      span.style.setProperty('--i', index);
      p.appendChild(span);
    });
  });
});