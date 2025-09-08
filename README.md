# Welcome to Your Task App! 👋

This is a simple and intuitive task management application built with React and TypeScript. Keep track of your daily tasks with ease!

## Getting Started 🚀

Follow these steps to get your task app up and running on your local machine.

### Prerequisites

Before you begin, make sure you have [Node.js](https://nodejs.org/en/download/) and [npm](https://docs.npmjs.com/download/package-manager) installed on your system.

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone git@github.com:GodfredAsa/task-app.git
    cd task-app
    ```
     Prodect URL:  `https://github.com/GodfredAsa/task-app`

2.  **Install dependencies:**
    Navigate to the project directory and install the necessary packages:
    ```bash
    npm install
    ```

### Running the App

To start the application in development mode, run:

```bash
npm start
```

This will open the app in your browser at [http://localhost:3000](http://localhost:3000). The page will automatically reload if you make any changes.

### Running Tests

To run the test suite and ensure everything is working as expected, use:

```bash
npm test
```

This command launches the test runner in interactive watch mode.

### Building for Production

To build the application for production, optimizing it for the best performance, run:

```bash
npm run build
```

This creates the `build` folder with all the minified and optimized files, ready for deployment!

## Technologies Used 💻

*   **React**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS (or similar)**: For a sleek and responsive design.
*   **Jest & React Testing Library**: For robust testing.

Enjoy managing your tasks! ✨

## Running with Docker 🐳

You can also run this application using Docker and Docker Compose. Ensure you have Docker installed on your system.

### Build and Run with Docker Compose

1.  **Build the Docker image (if not already built):**
    ```bash
    docker-compose build
    ```

2.  **Run the application:**
    ```bash
    docker-compose up
    ```

    The application will be accessible at [http://localhost:3000](http://localhost:3000).

3.  **Stop the application:**
    ```bash
    docker-compose down
    ```
