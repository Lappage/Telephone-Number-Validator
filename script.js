const textBox = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

// Regex

const countryCode = "^(1\\s?)?";
const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
const spacesDashes = "[\\s\\-]?";
const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

// Check Number Function

const checkNumber = () => {
  let input = textBox.value;

  if (!input) {
    alert("Please provide a phone number");
    textBox.value = "";
    return;
  }

  if (phoneRegex.test(input)) {
    results.innerHTML += `
    <p class="valid"> Valid US Number: <br> ${input} </p>`;
    textBox.value = "";
  } else {
    results.innerHTML += `
    <p class="invalid"> Invalid US Number: <br> ${input.toUpperCase()} </p>`;
    textBox.value = "";
    results.scrollTop = results.scrollHeight;
  }
};

// Reset Button

const reset = () => {
  results.innerHTML = "";
  textBox.value = "";
};
// Enter Keypress

textBox.addEventListener("keypress", (buttonPress) => {
  if (buttonPress.key === "Enter") {
    checkNumber();
  }
});

checkButton.addEventListener("click", checkNumber);
clearButton.addEventListener("click", reset);
