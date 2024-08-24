## Project Overview

The goal of this project is to build a frontend-only application that includes an authentication flow as per the provided design. The application does not include any backend logic or API integration, and there's no need to implement the logic for creating new posts, comments, or likes.

## Features

- Authentication flow (Login, Register, Forgot Password)
- Responsive design using TailwindCSS
- TypeScript for type safety and better developer experience
- Clean and modular code with a focus on maintainability

## Tech Stack

- **Framework:** React (Preferred)
- **Language:** TypeScript
- **CSS Framework:** TailwindCSS
- **Build Tool:** CRA (Create React App)
- **Routing:** React Router

## Installation

```
npm install

```


## Running the Project

```
npm start

```

## live url

```
https://atlys-chat-system.netlify.app/

```

## Coding Best Practices
1. Component Reusability: Components are created to be reusable and modular.
2. TypeScript: All components and functions are strongly typed using TypeScript.
3. TailwindCSS: Styling is done using TailwindCSS, ensuring consistency and responsiveness.
4. File Structure: The project structure is modular, keeping related files together to improve maintainability.
5. Interfaces: TypeScript interfaces and types are stored in a dedicated interfaces/ directory for easy reference and    consistency.


```
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  ├─ posts.json
│  └─ robots.txt
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ Logo.png
│  │  ├─ chat.jpg
│  │  ├─ chatBubble.jpg
│  │  └─ index.js
│  ├─ components
│  │  ├─ Login.tsx
│  │  ├─ LoginContainer.tsx
│  │  ├─ Post.tsx
│  │  ├─ PostCard.tsx
│  │  ├─ PostDataContainer.tsx
│  │  ├─ SignUpMainContainer.tsx
│  │  └─ Signup.tsx
│  ├─ css
│  │  ├─ App.css
│  │  └─ customModal.css
│  ├─ index.css
│  ├─ index.tsx
│  ├─ interfaces
│  │  └─ general.interface.ts
│  ├─ logo.svg
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ root.css
│  ├─ setupTests.ts
│  └─ utils
│     ├─ CustomModal.tsx
│     └─ GetSvg.tsx
├─ tailwind.config.js
└─ tsconfig.json

```