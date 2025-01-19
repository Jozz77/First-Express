# Express MongoDB Application

## Description
This project is an Express.js application that connects to a MongoDB database. It demonstrates routing, middleware usage, error handling, and database interaction. The application is designed to serve API endpoints and render views using the Jade template engine.

## Features
- User management with MongoDB.
- API routing.
- Middleware for logging and request parsing.
- Centralized error handling.
- Environment variable support using `.env` files.

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local or cloud-based)

## Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/Jozz77/First-Express
cd First-Express
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Create a `.env` file in the root of the project and provide the following variables:
```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-address>/<database-name>?retryWrites=true&w=majority
PORT=3000
```
Replace `<username>`, `<password>`, `<cluster-address>`, and `<database-name>` with your MongoDB connection details.

### Step 4: Start the Application

#### Local Development
To run the application locally:
```bash
npm run dev
```
The application will start on the specified `PORT` (default: 3000). Visit [http://localhost:3000](http://localhost:3000) in your browser.

#### Production
To run the application in production mode:
```bash
npm start
```

## Deployment

### Deploying to Railway
1. Push your code to a Git repository.
2. Link your Railway project to the repository.
3. Add the following environment variables in Railway:
   - `MONGO_URL`: Your MongoDB connection string.
   - `PORT`: The port for the application (default: 3000).
4. Deploy the project using the Railway dashboard.

### Deploying to Other Platforms
For other hosting platforms, make sure your `.env` file or environment variables are correctly configured, and that your hosting provider supports Node.js applications.

## Folder Structure
```
.
├── config
│   └── db.js              # Database connection configuration
├── controllers
│   └── userController.js  # Controller logic for user-related routes
├── middlewares
│   └── index.js           # Custom middleware configurations
├── models
│   └── userModel.js       # MongoDB schema for users
├── routes
│   ├── index.js           # Main routes
│   ├── users.js           # User routes
│   ├── about.js           # About page routes
│   ├── form.js            # Form handling routes
├── views
│   └── ...                # Jade view templates
├── .env                   # Environment variables
├── app.js                 # Application entry point
├── package.json           # Node.js dependencies and scripts
└── README.md              # Project documentation
```

## API Endpoints

### Users
- `GET /api/users`: Fetch all users.
- `POST /api/users`: Create a new user.

### About
- `GET /about`: Fetch information about the application.

### Form
- `GET /form`: Render a form page.
- `POST /form`: Handle form submissions.

## Troubleshooting

### Common Issues

#### Authentication Failed
Ensure your `MONGO_URL` in `.env` is correct and contains valid credentials for the MongoDB database.

#### Port Already in Use
If the specified `PORT` is in use, change the value in the `.env` file or stop the conflicting process.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Railway](https://railway.app/)
