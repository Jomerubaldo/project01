// Get references
const myCountValue = document.querySelector('#count');
const myIncrementButton = document.querySelector('#incrementButton');
const myDecrementButton = document.querySelector('#decrementButton');
const myResetButton = document.querySelector('#reset');

// Declare a variable to store the count, initially set to 0.
let count = 0;

// Increment button
// Arrow function modern
myIncrementButton.addEventListener('click', () => {
  count++;
  myCountValue.innerText = count;
});

// Decrement button
// Function old
myDecrementButton.addEventListener('click', myFunction);
function myFunction() {
  count--;
  myCountValue.innerText = count;
}

// Reset button
// Arrow function modern
myResetButton.addEventListener('click', () => {
  count = 0;
  myCountValue.innerHTML = count;
});
