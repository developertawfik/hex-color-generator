document.addEventListener('DOMContentLoaded', () => {
  main();
});

function main() {
  const btn = document.querySelector('#btn');
  const body = document.querySelector('#root');
  const input = document.querySelector('#hex');

  btn.addEventListener('click', () => {
    const bgColor = hexColorGenerator();
    updateBackgroundColor(bgColor);
  });

  function updateBackgroundColor(color) {
    input.value = color;
    body.style.backgroundColor = color;
  }
}

function hexColorGenerator() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `#${padZero(red)}${padZero(green)}${padZero(blue)}`;
}

function padZero(number) {
  return number.toString(16).padStart(2, '0');
}
