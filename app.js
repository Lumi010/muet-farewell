const lights = document.querySelector('.fairy-lights');
for (let i = 0; i < 25; i++) { const bulb = document.createElement('i'); bulb.className = 'bulb'; lights.append(bulb); }
const toggle = document.querySelector('.lights-toggle');
toggle.addEventListener('click', () => {
  const still = document.body.classList.toggle('still');
  toggle.setAttribute('aria-pressed', String(!still));
  toggle.setAttribute('aria-label', still ? 'Turn light animation on' : 'Turn light animation off');
  toggle.innerHTML = `${still ? 'Lights still' : 'Lights on'} <span>✦</span>`;
});
