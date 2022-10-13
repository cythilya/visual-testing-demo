# Visual Testing Demo with Chromatic & Percy

## Setup

- Clone this project.
- Install dependencies by using `yarn`.
- To run component-level testing by Chromatic, please reference the document [here](https://www.chromatic.com/docs/setup).
- To run page-level testing by Cypress and Percy, please reference the document [here](https://docs.percy.io/docs/cypress-tutorial).
- After integrate Chromatic, Cypress and Percy, the you can run the following testing.

## Run Component-Level Testing with Chromatic

Run `yarn chromatic` in local.

## Run Page-Level Testing with Cypress and Percy

Run `yarn cy:percy` in local.

## Run Visual Testing Automatically

In the `.github` folder, there are two workflow files,

- One is for regular page-level testing by Cypress and Percy in `regular-visual-testing.yml`.
- Another is for compent-level testing by Chromatic when submit PR in `visual-testing.yml`.
