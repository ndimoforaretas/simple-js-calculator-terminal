import readline from "readline-sync";

// ASCII Art for an enjoyable UI
const asciiArt = `
 _____________________
|  _________________  |
| |              0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`;

// Constants for operations
const ADD = 1;
const SUBTRACT = 2;
const MULTIPLY = 3;
const DIVIDE = 4;

// Function to display the main menu
const displayMenu = () => {
  console.log(asciiArt);
  console.log("Welcome to the Simple Calculator!\n");
  console.log("Choose an operation:");
  console.log(`${ADD}. Add`);
  console.log(`${SUBTRACT}. Subtract`);
  console.log(`${MULTIPLY}. Multiply`);
  console.log(`${DIVIDE}. Divide`);
};

// Function to get a valid number from the user
const getNumber = (prompt) => {
  while (true) {
    const input = readline.question(prompt);
    const number = Number(input);
    if (!isNaN(number)) {
      return number;
    }
    console.log("Invalid input. Please enter a valid number.");
  }
};

// Function to perform the calculation
const performCalculation = (operation, num1, num2) => {
  let result;
  switch (operation) {
    case ADD:
      result = num1 + num2;
      console.log(`${num1} + ${num2} is ${result}`);
      break;
    case SUBTRACT:
      result = num1 - num2;
      console.log(`${num1} - ${num2} is ${result}`);
      break;
    case MULTIPLY:
      result = num1 * num2;
      console.log(`${num1} * ${num2} is ${result}`);
      break;
    case DIVIDE:
      if (num2 === 0) {
        console.log("Error: Cannot divide by zero.");
      } else {
        result = num1 / num2;
        console.log(`${num1} / ${num2} is ${result}`);
      }
      break;
    default:
      console.log("Invalid operation choice.");
  }
};

// Main function to run the calculator
const runCalculator = () => {
  while (true) {
    displayMenu();

    // Get the operation choice from the user
    const operationChoice = getNumber(
      "Enter the number corresponding to your desired operation: "
    );

    if (![ADD, SUBTRACT, MULTIPLY, DIVIDE].includes(operationChoice)) {
      console.log("Invalid operation choice. Please try again.");
      continue;
    }

    // Get the two numbers from the user
    const firstNumber = getNumber("Enter the first number: ");
    const secondNumber = getNumber("Enter the second number: ");

    // Perform the calculation
    performCalculation(operationChoice, firstNumber, secondNumber);

    // Ask if the user wants to perform another calculation
    const anotherCalculation = readline
      .question("Do you want to perform another calculation? (yes/no): ")
      .toLowerCase();
    if (anotherCalculation !== "yes") {
      console.log("Thank you for using the Simple Calculator! Goodbye!");
      break;
    }
  }
};

// Run the calculator
runCalculator();
