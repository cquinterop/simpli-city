# Contributing to Simpli-city Component Library

Thank you for your interest in contributing! This guide will help you get started and ensure consistency across the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Generating New Components](#generating-new-components)
- [Linting & Formatting](#linting--formatting)
- [Testing](#testing)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)

---

## Code of Conduct

Please be respectful and considerate. All contributors are expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/cquinterop/simpli-city.git
   cd simpli-city
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```

## Development Workflow

- All code should be written in TypeScript and follow the existing folder structure.
- Use [Hygen](https://www.hygen.io/) to scaffold new components for consistency.
- Run linting and tests before pushing changes.

## Generating New Components

To create a new component with the correct structure:

```sh
npm run hygen generator new <ComponentName>
```

- This will create a new folder in `src/components/<componentname>` with all required files.
- Use PascalCase for component names (e.g., `Button`, `Card`).
- The folder will be lowercase (e.g., `button`, `card`).

## Linting & Formatting

- Lint and format your code before committing:
  ```sh
  npm run lint
  npm run format
  ```
- Linting and formatting are also run automatically on staged files via `husky` and `lint-staged`.

## Testing

- All components must have corresponding test files (`*.test.tsx`).
- Run tests with:
  ```sh
  npm run test
  ```
- Only test files inside `src/components` are run by default.

## Commit Messages

We use **Conventional Commits** for all commit messages. This helps automate changelogs and releases.

- **Do not use `git commit` directly.**
- Instead, use [Commitizen](https://commitizen.github.io/cz-cli/):
  ```sh
  npm run cz
  ```
- Follow the prompts to create a properly formatted commit message.

## Pull Requests

- Ensure your branch is up to date with `main` before opening a PR.
- All PRs must pass linting and tests.
- Provide a clear description of your changes and reference any related issues.

---

Thank you for helping us build a consistent and high-quality component library!
