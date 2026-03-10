# TaskFlow App

TaskFlow is a comprehensive task management application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It helps users organize, track, and prioritize tasks efficiently, featuring user authentication, task categorization, and a modern, responsive UI.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Environment Variables](#environment-variables)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [Folder Structure](#folder-structure)  
- [Screenshots](#screenshots)  
- [Roadmap](#roadmap)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Features

- **Task Management:** Create, update, delete, and view tasks  
- **Task Categorization:** Status categories: To Do, In Progress, Completed  
- **Authentication:** Secure login & signup with JWT  
- **Responsive Design:** Works on desktop, tablet, and mobile  
- **Real-Time Updates:** React state management for instant task changes  
- **Search & Filter:** Quickly find tasks by name or status  
- **Dark/Light Mode:** Toggle for user preference (optional)  

---

## Tech Stack

| Layer       | Technology                |
|------------|---------------------------|
| Frontend   | React.js, HTML5, CSS3     |
| Backend    | Node.js, Express.js       |
| Database   | MongoDB                   |
| Authentication | JWT (JSON Web Token)   |
| API Calls  | Axios                     |
| Security   | bcrypt for password hashing |
| Environment | dotenv for env variables |

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow
```

2. **Install dependencies**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## Environment Variables

Create a `.env` file in the **backend folder** and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Replace the values with your actual MongoDB connection string and secret key.

---

## Usage

### Start Backend Server

```bash
cd backend
npm start
```

### Start Frontend Application

```bash
cd frontend
npm start
```

Open your browser and go to:

```
http://localhost:3000
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|------|------|------|
| POST | /api/auth/signup | Register a new user |
| POST | /api/auth/login | Login and get JWT token |

### Tasks

| Method | Endpoint | Description |
|------|------|------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

---

## Folder Structure

```
taskflow
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
|   ├── App.js
│   └── package.json
│
└── README.md
```

---

## Screenshots

Add screenshots of your application here.

Example:

```
screenshots/dashboard.png
screenshots/tasks.png
```

---

## Roadmap

Future improvements planned:

- Drag and drop task management
- Task deadlines and reminders
- Notifications
- Improved UI/UX
- Deployment support

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Contact

Author: Viharika Vasireddy

GitHub: https://github.com/your-username
```
