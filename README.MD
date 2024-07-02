# Simple Terminal Calculator

## Description

- The Simple Terminal Calculator is an interactive command-line application designed for basic arithmetic operations.
- This beginner-friendly project leverages `Node.js` and the `readline-sync` package to create a fun and educational experience.

## Features

- Addition, Subtraction, Multiplication, and Division operations.
- User-friendly ASCII art interface.
- Input validation to ensure correct data entry.
- Looping mechanism to perform multiple calculations without restarting the application.

## Installation

To install and run the Simple Terminal Calculator on your local machine, follow these steps:

1. Clone the repository or create a new repository using the template:
   ```bash
   // Clone the repository using your GitHub username
   git clone https://github.com/yourusername/simple-terminal-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-js-calculator-terminal
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

To start the calculator, run the following command in your terminal:

```bash
node terminal-calculator.js
```

Follow the on-screen prompts to perform arithmetic operations. You can continue performing calculations until you choose to exit.

## Technologies and Techniques Used

- **Node.js**: JavaScript runtime for executing code outside of a browser.
- **readline-sync**: A Node.js package for synchronous user input in command-line interfaces.
- **ASCII Art**: Enhances the visual appeal of the user interface.
- **ES6+ Syntax**: Utilizes modern JavaScript features for cleaner and more efficient code.

## Code Overview

### Main Functions

- There are minor functions in the application that handle different aspects of the calculator:

  1. **logResult**: Displays the result of the calculation.
  2. **logOperatorErrorMessage**: Displays an error message for an invalid operator choice.

- There are four main functions in the application that handle different aspects of the calculator:
  - **displayMenu**: Displays the main menu with ASCII art and operation choices.
  - **getNumber**: Prompts the user for a number and validates the input.
  - **performCalculation**: Executes the chosen arithmetic operation and displays the result.
  - **runCalculator**: Controls the flow of the application, integrating all other functions.

1. **displayMenu**: Displays the main menu with ASCII art and operation choices.

   ```javascript
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
   ```

2. **getNumber**: Prompts the user for a number and validates the input.

   ```javascript
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
   ```

3. **performCalculation**: Executes the chosen arithmetic operation and displays the result.

   ```javascript
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
   ```

4. **runCalculator**: Controls the flow of the application, integrating all other functions.

   ```javascript
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
   ```

### Constants

- **ADD**: Represents the addition operation.
  ```javascript
  const ADD = 1;
  ```
- **SUBTRACT**: Represents the subtraction operation.
  ```javascript
  const SUBTRACT = 2;
  ```
- **MULTIPLY**: Represents the multiplication operation.
  ```javascript
  const MULTIPLY = 3;
  ```
- **DIVIDE**: Represents the division operation.
  ```javascript
  const DIVIDE = 4;
  ```

### User Interaction

- **Prompts the user to choose an operation and enter numbers.**
- **Validates user input to ensure it is a number.**
- **Allows the user to perform multiple calculations in a single session.**
- **Gracefully exits the application upon user request.**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to modify or add any sections as needed!
