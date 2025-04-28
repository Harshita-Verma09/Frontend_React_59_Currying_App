# Currying Sum Example in React

This project demonstrates the concept of function currying in React, specifically how it can be used to perform a series of operations and update the user interface at each step.

## Overview

The `CurrySum` component uses a curried function `sum` to perform sequential addition. Each time an argument is provided to the curried function, it updates a state variable `steps` with the intermediate result and the operation performed. Finally, when the function is called without any arguments, it returns the total sum.

## Features

- **Curried Addition:** The `sum` function is curried, allowing for step-by-step addition.
- **UI Updates:** The component displays each step of the addition process in real-time.
- **Clear Visualization:** Shows the previous value, the current value being added, and the intermediate result for each step.
- **Final Result Display:** Clearly presents the final calculated sum.
- **React Hooks:** Utilizes `useState` to manage the steps and the final result.
- **Tailwind CSS:** Styled with Tailwind CSS for a clean and modern look.

## How to Run

1.  **Clone the repository** (if you have one, otherwise just create a new React project).
2.  **Navigate to the project directory** in your terminal.
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn add
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
5.  Open your browser and navigate to the address shown in the terminal (usually `http://localhost:3000`).

## Usage

1.  You will see a heading "Currying Sum Example" and a button "Calculate Sum".
2.  Click the "Calculate Sum" button.
3.  The component will then display each step of the addition:
    - Step 1: 3 (1 + 2)
    - Step 2: 8 (3 + 5)
4.  Finally, the "Final Result: 8" will be shown below the steps.

## Code Explanation

### `sum(a, updateSteps)`

- This is the main curried function.
- It takes an initial value `a` and an `updateSteps` function (from the `useState` hook) as arguments.
- It returns another function that accepts the next value `b`.
- If `b` is provided:
    - It updates the `steps` state by adding a new object containing the step number, the previous value (`a`), the current value (`b`), and their sum (`a + b`).
    - It recursively calls `sum` with the new accumulated value (`a + b`) and the `updateSteps` function, allowing for the next addition in the chain.
- If `b` is `undefined` (when the function is called without arguments), it returns the final accumulated value `a`.

### `CurrySum` Component

- Uses `useState` to manage:
    - `steps`: An array to store the details of each addition step.
    - `finalResult`: The final calculated sum.
- `handleSum()`:
    - Resets the `steps` array to empty.
    - Calls the curried `sum` function with an initial value of `1` and the `setSteps` function. It then chains calls with subsequent numbers (`2`, `5`) and finally calls it without arguments `()` to get the final result.
    - Updates the `finalResult` state with the returned total.
- The JSX renders:
    - A heading and a button to trigger the calculation.
    - A mapping over the `steps` array to display each step's information.
    - A conditional rendering of the `finalResult` when it's available.

## Learnings

This example illustrates:

- **Currying:** A functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument.
- **State Management in React:** Using `useState` to manage and update the UI based on the progression of an operation.
- **Functional Programming in React:** Combining currying with React's functional component paradigm.

## Dependencies

- React (`react`)
- Tailwind CSS (`tailwindcss`, `postcss`, `autoprefixer`) - although the example code includes Tailwind classes, you need to have Tailwind CSS set up in your project for the styling to work.
