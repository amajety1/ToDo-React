
# To-Do List App with React and Mongoose

This project is a To-Do List application built using React for the front end and Mongoose for database interactions. The application allows users to create, read, update, and delete tasks (notes) with a sleek and responsive design.

## Features

- **Create Tasks**: Add new tasks with a title and content.
- **Delete Tasks**: Remove tasks from the list with a single click.
- **Responsive Design**: The application is fully responsive and optimized for various screen sizes.
- **Persistent Storage**: Tasks are stored in a MongoDB database, ensuring data persistence.

## Project Structure

Here is an overview of the file structure of the project:

### Public Directory
- **index.html**: The main HTML file that includes the root div where the React app is rendered.
- **styles.css**: The CSS file used to style the application.

### Src Directory
- **components/**
  - **App.jsx**: The main App component that serves as the entry point for the application.
  - **Footer.jsx**: The Footer component (currently minimalistic, can be expanded as needed).
  - **Header.jsx**: The Header component that handles task creation and displays the list of tasks.
  - **Note.jsx**: The Note component that represents individual tasks with options to delete them.

### Learning Mongoose Directory
- **mongoose.js**: A standalone script demonstrating basic Mongoose operations, including connecting to MongoDB and saving a sample user document.

### Root Files
- **index.js**: The main entry point for the React application, rendering the `Header` component into the root div in `index.html`.
- **package.json**: Contains project metadata and dependencies.
- **package-lock.json**: Describes the exact dependency tree that was generated.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **MongoDB**: Make sure you have MongoDB installed and running.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-list-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd todo-list-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up MongoDB**:
   - Make sure MongoDB is running on your machine.
   - Update the MongoDB connection string in `mongoose.js` if necessary.

5. **Run the React application**:
   ```bash
   npm start
   ```

6. **Open your browser**:
   - Navigate to `http://localhost:3000` to see the application in action.

## Usage

- **Add a Task**: Click the input area, type a title and content, then click the add button to create a task.
- **Delete a Task**: Click the delete icon on any task to remove it from the list.

## Live Demo

This elegant website serves as a platform for creating and managing notes, meticulously crafted using the React framework. Accessibility to the general public has been granted through this refined rendering link: [https://test-react-static.onrender.com](https://test-react-static.onrender.com).

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Mongoose**: ODM for MongoDB, used for interacting with the database.
- **Node.js**: JavaScript runtime environment.
- **Axios**: Promise-based HTTP client for making API requests.

## License

This project is licensed under the MIT License.

---

