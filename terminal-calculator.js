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

// Function to log error message when an invalid operation choice is entered
const logOperatorErrorMessage = () => {
  console.log();
  console.log("************************************\n");
  console.log("❌ Invalid operation choice. ❌ ");
  console.log("Please enter a valid operation choice.\n");
  console.log("************************************\n");
};

// Function to log error message when an invalid number is entered
const logNumberErrorMessage = () => {
  console.log();
  console.log("************************************\n");
  console.log("❌ Invalid number. ❌ ");
  console.log("Please enter a valid number.\n");
  console.log("************************************\n");
};

// Function to log the result in a formatted way
const logResult = (num1, num2, result, operationSymbol) => {
  console.log();
  console.log("************************************");
  console.log(`🧮   ${num1} ${operationSymbol} ${num2} = ${result}  🧮`);
  console.log("************************************");
  console.log();
};

// Function to perform the calculation
const performCalculation = (operation, num1, num2) => {
  let result;
  switch (operation) {
    case ADD:
      result = num1 + num2;
      logResult(num1, num2, result, "+");
      break;
    case SUBTRACT:
      result = num1 - num2;
      logResult(num1, num2, result, "-");
      break;
    case MULTIPLY:
      result = num1 * num2;
      logResult(num1, num2, result, "*");
      break;
    case DIVIDE:
      if (num2 === 0) {
        console.log("Error: Cannot divide by zero.");
        return null; // Consider returning null or appropriate value for error handling
      } else {
        result = num1 / num2;
        logResult(num1, num2, result, "/");
      }
      break;
    default:
      logOperatorErrorMessage();
      return null; // Consider returning null or appropriate value for error handling
  }
  return result; // Return the result for further use
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
      logOperatorErrorMessage();
      continue;
    }

    // Get the two numbers from the user
    const firstNumber = getNumber("Enter the first number: ");
    console.log();
    const secondNumber = getNumber("Enter the second number: ");

    // Perform the calculation
    performCalculation(operationChoice, firstNumber, secondNumber);

    // Ask if the user wants to perform another calculation
    const anotherCalculation = readline
      .question("Do you want to perform another calculation? (yes/no): ")
      .toLowerCase();
    if (anotherCalculation !== "yes" && anotherCalculation !== "y") {
      console.log();
      console.log("************************************");
      console.log("Thank you for using the Simple Calculator!");
      console.log("Goodbye!");
      console.log("************************************");
      break;
    }
  }
};

// Display the ASCII art and welcome message
console.log(asciiArt);
console.log("🧮 Welcome to the Simple Calculator! 🧮 \n");

// Function to display the main menu
const displayMenu = () => {
  console.log();
  console.log("************************************");
  console.log();
  console.log("🧮 Choose an operation: 🧮");
  console.log(`${ADD}. Add`);
  console.log(`${SUBTRACT}. Subtract`);
  console.log(`${MULTIPLY}. Multiply`);
  console.log(`${DIVIDE}. Divide \n`);
  console.log("************************************\n");
};

// Function to get a valid number from the user
const getNumber = (prompt) => {
  while (true) {
    const input = readline.question(prompt);
    const number = Number(input);
    if (!isNaN(number)) {
      return number;
    }
    console.log("Invalid input. Please enter a valid number.\n");
  }
};

// Run the calculator
runCalculator();
