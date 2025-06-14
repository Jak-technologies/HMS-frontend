# Backend Setup for Hotel Management System (HMS)

This backend is built using **Node.js** and **PostgreSQL** with a focus on scalability, security, and maintainability. It follows modern best practices and is designed for real-world applications.

---

## **Project Structure**

The project is organized into the following structure:

```
backend/
├── src/
│   ├── config/
│   │   └── db.js                # Database connection setup
│   │   └── logger.js            # Logging configuration
│   ├── controllers/
│   │   └── exampleController.js # Example controller for handling requests
│   ├── middlewares/
│   │   └── errorHandler.js      # Centralized error handling middleware
│   │   └── authMiddleware.js    # Authentication middleware
│   ├── models/
│   │   └── exampleModel.js      # Example model for database queries
│   ├── routes/
│   │   └── index.js             # Main route file
│   │   └── exampleRoutes.js     # Example route file
│   ├── utils/
│   │   └── response.js          # Utility functions for API responses
│   ├── app.js                   # Application setup
│   └── server.js                # Server entry point
├── tests/
│   └── example.test.js          # Example test file
├── .env                         # Environment variables
├── .env.example                 # Example environment variables
├── .gitignore                   # Files to ignore in Git
├── package.json                 # Node.js dependencies and scripts
├── README.md                    # Project documentation
```

---

## **Setup Instructions**

### **1. Install Dependencies**
Run the following commands to install the required dependencies:

```bash
npm install express pg dotenv cors body-parser winston helmet morgan express-validator
npm install --save-dev nodemon jest supertest
```

---

### **2. Environment Variables**
Create a `.env` file in the root directory to store sensitive information:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
PORT=5000
JWT_SECRET=your_jwt_secret
```

Provide an example `.env.example` file for reference:

```env
DB_USER=
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=
PORT=
JWT_SECRET=
```

---

### **3. Run the Application**
Start the server using the following command:

```bash
npm start
```

For development, use `nodemon` to automatically restart the server on file changes:

```bash
npm run dev
```

---

## **Features**

### **1. Database Connection**
- PostgreSQL connection pooling is implemented using `pg.Pool` for efficient database interactions.
- Configuration is stored in `src/config/db.js`.

---

### **2. Logging**
- Centralized logging is implemented using Winston.
- Logs are written to files (`logs/error.log` and `logs/combined.log`) and displayed in the console during development.
- Configuration is stored in `src/config/logger.js`.

---

### **3. Middleware**
#### **Error Handling**
- Centralized error handling middleware (`src/middlewares/errorHandler.js`) ensures consistent error responses and logs errors.

#### **Authentication**
- Token-based authentication middleware (`src/middlewares/authMiddleware.js`) verifies JWT tokens for protected routes.

---

### **4. Modular Routes**
- Routes are organized into separate files for scalability.
- Example routes are defined in `src/routes/exampleRoutes.js` and combined in `src/routes/index.js`.

---

### **5. Controllers**
- Controllers handle business logic and interact with models.
- Example controller: `src/controllers/exampleController.js`.

---

### **6. Models**
- Models abstract database queries for reusability.
- Example model: `src/models/exampleModel.js`.

---

### **7. Utilities**
- Utility functions for standardized API responses are stored in `src/utils/response.js`.

---

### **8. Security**
- **Helmet**: Adds security headers to protect against common vulnerabilities.
- **JWT Authentication**: Ensures secure access to protected routes.
- **CORS**: Handles cross-origin requests for frontend-backend communication.

---

### **9. Testing**
- **Jest** and **Supertest** are used for unit and integration testing.
- Example test file: `tests/example.test.js`.

Run tests using:

```bash
npm test
```

---

## **Scripts**

Add the following scripts to your `package.json`:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js",
  "test": "jest"
}
```
