# dot_Net-Project

# Todo List Application

A simple, beginner-friendly Todo List application built with React (frontend) and .NET 6 (backend). This project demonstrates fundamental concepts of full-stack development with these technologies.

## Features

- Create new tasks
- View list of existing tasks
- Delete completed tasks
- Clean, responsive UI

## Tech Stack

### Frontend
- React 18
- JavaScript (ES6+)
- CSS3 for styling
- Fetch API for HTTP requests

### Backend
- .NET 6 Web API
- C# for business logic
- In-memory data storage (for demonstration purposes)
- RESTful API design

## Project Structure
  ``` bash
  TodoList/
  ├── frontend/ # React frontend
  │ ├── public/
  │ └── src/
  │ ├── App.js # Main React component
  │ └── App.css # Styling
  │
  └── backend/ # .NET backend
  ├── Controllers/
  │ └── TodoController.cs # API endpoints
  ├── Models/
  │ └── TodoItem.cs # Data model
  └── Program.cs # Application configuration

  ```


## API Endpoints

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | /api/todo           | Get all todo items        |
| GET    | /api/todo/{id}      | Get a specific todo item  |
| POST   | /api/todo           | Create a new todo item    |
| PUT    | /api/todo/{id}      | Update a todo item        |
| DELETE | /api/todo/{id}      | Delete a todo item        |

## Setup Instructions

### Prerequisites
- .NET 6 SDK
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Run the .NET application:
   ```bash
   dotnet run
   The API will be available at http://localhost:5000/api/todo
   ```
### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   The application will open in your browser at http://localhost:3000
   ```
---

Created By, Snegan.
