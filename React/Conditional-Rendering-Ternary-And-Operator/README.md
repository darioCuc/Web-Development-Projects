# Challenge: Conditional Rendering in React

This challenge focuses on implementing conditional rendering in a React application without moving the `userIsRegistered` variable.

## Objectives

- **Button Text**: Based on the `userIsRegistered` variable:
  - Show "Login" as the button text if `userIsRegistered` is `true`.
  - Show "Register" as the button text if `userIsRegistered` is `false`.

- **Confirm Password Input**:
  - Only display the "Confirm Password" input field if `userIsRegistered` is `false`.
  - Do not show this input field if `userIsRegistered` is `true`.

## Requirements

- You cannot move the `userIsRegistered` variable.
- Implement conditional rendering to achieve the objectives stated above.

## Hints

- Consider using ternary operators or logical `&&` operator for concise conditional rendering.
- Remember to maintain the `userIsRegistered` variable's scope so it's accessible where needed.

Good luck with the challenge! This exercise will help solidify your understanding of conditional rendering in React components.
