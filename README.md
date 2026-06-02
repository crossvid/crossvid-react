# crossvid-react-components

[![CI](https://github.com/crossvid/crossvid-react/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/crossvid/crossvid-react/actions/workflows/ci.yml?query=branch%3Amain)

**crossvid** is suite of libraries to support video call applications, helping to avoid vendor lock-in:

- A unified interface for video call configuration
- A unified customisable UI framework components

`crossvid-react-components` provides a layer of abstraction between your React application code, and the video call provider of your choice.

- Allows a high degree of customisation for video call components and layouts

## Developer notes

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [Playwright](https://playwright.dev/)

#### Optional

- [actionlint](https://github.com/rhysd/actionlint) (for linting GitHub Actions workflows)

### Installation steps

<details>
<summary>Mac OS</summary>

#### Homebrew

Homebrew is recommended to help install the other dependencies. You could also follow each application's instructions to install it an alternative way.

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### Node

```sh
brew install node
```
  
#### Playwright (with browsers)

```sh
npx playwright install --with-deps
```

#### `actionlint`

```sh
brew install actionlint
```

</details>

### `npm` scripts

| Script | Purpose |
|-|-|
| `npm run test` | Run all tests (including browser tests) |
| `npm run lint` | Lint the application |
| `npm run dev` | Launch the component demo application |
| `npm run build` | Builds the library |
