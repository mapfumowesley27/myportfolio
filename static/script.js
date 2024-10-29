
const typedTextElement = document.getElementById('multiple-text');
const textToType = ['Software Engineer', 'Web Developer', 'Python Enthusiast', 'Tech Enthusiast']; // add more text as needed
let currentIndex = 0;
let currentText = '';

function typeText() {
  currentText = textToType[currentIndex];
  let charIndex = 0;
  let typeInterval = setInterval(function() {
    typedTextElement.textContent += currentText[charIndex];
    charIndex++;
    if (charIndex >= currentText.length) {
      clearInterval(typeInterval);
      setTimeout(function() {
        currentIndex = (currentIndex + 1) % textToType.length; // reset to 0 when reaching the end
        typedTextElement.textContent = '';
        typeText();
      }, 1000); // adjust the delay before switching to the next text
    }
  }, 90); // adjust the speed of typing
}

typeText();
