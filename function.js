const input1 = document.querySelector('#myInput');
const button1 = document.querySelector('#myButton');

button1.addEventListener('click', () => {
  const name = input1.value.trim();
  alert(`Hello There ${name}`);
  input1.value = '';
});
