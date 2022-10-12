# Visual Testing Demo with Chromatic & Percy

## Run Component-Level Testing with Chromatic

- Step 1: Read the document to intall Chromatic.
- Step 2: Run `yarn chromatic` in local..

## Run Page-Level Testing with Cypress and Percy

- Step 1: Read the document to intall Cypress and Percy.
- Step 2: Run `yarn cy:percy` in local.

## Run Visual Testing Automatically

In the `.github` folder, there are two workflow files,

- Run regular page-level testing by Cypress and Percy in `regular-visual-testing.yml`.
- Run compent-level testing by Chromatic when PR.
