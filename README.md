# Nextless 🚀

**Unlock React's full potential, anywhere. Nextless provides framework-agnostic alternatives to popular Next.js components, giving you the power of modern web features without the framework lock-in.**

Are you looking to use Next.js-like conveniences such as optimized images, font loading, client-side navigation, or OG image generation in your Vite, Create React App, or custom React setup? Nextless is here to help! We're building a suite of high-quality, tree-shakeable React components that offer similar functionality to their Next.js counterparts, but with the freedom to use them in any React project.

## ✨ Features & Goals

*   **Framework Agnostic:** Use in Vite, CRA, Astro, or your custom React build.
*   **Familiar APIs:** Components designed to be intuitive, often mirroring Next.js patterns.
*   **Performance Focused:** Optimized for speed, small bundle sizes, and best practices.
*   **Tree-Shakeable:** Only include what you use.
*   **Modern Tooling:** Built with Bun, TypeScript, and Biome.
*   **Community Driven:** We aim to evolve with the needs of React developers.

## 📦 Installation

You can install Nextless components using your favorite package manager. As this project is under development, it's not yet published to NPM. Once published, you'll be able to install it like so:

```bash
# Using Bun (recommended for this project)
bun add @databuddy/nextless react react-dom

# Using npm
npm install @databuddy/nextless react react-dom

# Using yarn
yarn add @databuddy/nextless react react-dom
```

Ensure you have `react` and `react-dom` (version 18.0.0 or newer, or 19.0.0 or newer as per recent changes) as peer dependencies in your project.

## 🛠️ Components

Here's a list of components Nextless aims to provide, with their current status:

| Feature Replaced | Nextless Component | Status      | Description                                                                 |
| :--------------- | :----------------- | :---------- | :-------------------------------------------------------------------------- |
| `next/link`      | `<SmartLink />`    | ✅ Alpha    | Intelligent link component for internal/external navigation, router adaptable. |
| `next/image`     | `<OptimizedImage />` | 🚧 Planned  | Performant image loading with lazy-loading, `srcset`, and modern formats.   |
| `next/font`      | `<FontOptimizer />`| 🚧 Planned  | Simplified font loading and optimization to reduce CLS.                     |
| `next/og`        | `<OpenGraphImage />` | 🚧 Planned  | Dynamic Open Graph image generation utilities.                              |

*(✅ Alpha/Beta/Stable, 🚧 Planned, ⏳ In Progress)*

## 🚀 Getting Started & Usage

### `<SmartLink />`

The `<SmartLink />` component provides a flexible way to handle navigation.

**Basic Usage:**

```tsx
import { SmartLink } from '@databuddy/nextless';

function App() {
  return (
    <div>
      {/* External link (opens in new tab by default) */}
      <SmartLink href="https://example.com">Visit Example</SmartLink>

      {/* Internal link (renders as <a> by default) */}
      <SmartLink href="/about">About Us</SmartLink>

      {/* Explicitly external, opening in same tab */}
      <SmartLink href="https://othersite.com" isExternal={true} target="_self">
        Visit Other Site (same tab)
      </SmartLink>
    </div>
  );
}
```

**With React Router DOM:**

First, ensure `react-router-dom` is installed in your project.

```tsx
import { SmartLink } from '@databuddy/nextless';
import { Link as ReactRouterLink } from 'react-router-dom'; // Your router's Link component

function AppWithRouter() {
  return (
    <SmartLink href="/dashboard" linkAs={ReactRouterLink}>
      Go to Dashboard
    </SmartLink>
  );
}
```

`<SmartLink>` will pass relevant props like `to` (from `href`), `replace`, `state`, etc., to the `ReactRouterLink` component.

## 💻 Development Scripts

This project uses Bun for package management and execution.

*   **Install Dependencies:**
    ```bash
    bun install
    ```
*   **Lint Code:**
    ```bash
    bun run lint
    ```
*   **Lint and Fix Code:**
    ```bash
    bun run lint:fix
    ```
*   **Format Code:**
    ```bash
    bun run format
    ```
*   **(Example) Run main entry point (currently outputs nothing specific):**
    ```bash
    bun run index.ts
    ```

## 🤝 Contributing

Contributions are welcome! As the project is in its early stages, the best way to contribute is to:

1.  Check the "Issues" tab for planned features or bugs.
2.  Fork the repository.
3.  Create a new branch for your feature or fix.
4.  Implement your changes and ensure all checks pass (`bun run lint`, `bun run format`).
5.  Submit a pull request with a clear description of your changes.

*(More detailed contribution guidelines will be added as the project matures.)*

## 📜 License

This project is intended to be open source. A specific license (e.g., MIT) will be formally added soon.

---

Built with ❤️ and Bun!
