# Hotel Management System (HMS) - Backend and Frontend Integration

This project is a **Hotel Management System (HMS)** that includes a **React.js frontend** and a **Django backend**. The system supports user authentication, role-based access control, and token-based authentication using **JSON Web Tokens (JWT)**.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Backend Setup](#backend-setup)
   - [Django REST Framework](#django-rest-framework)
   - [JWT Authentication](#jwt-authentication)
   - [API Endpoints](#api-endpoints)
4. [Frontend Setup](#frontend-setup)
   - [React.js](#reactjs)
   - [Redux for State Management](#redux-for-state-management)
   - [Axios for API Calls](#axios-for-api-calls)
5. [Authentication Flow](#authentication-flow)
6. [Error Handling](#error-handling)
7. [Testing and Debugging](#testing-and-debugging)

---

## Features
- **User Authentication**:
  - Login and logout functionality.
  - JWT-based authentication with access and refresh tokens.
- **Role-Based Access Control**:
  - Different roles (e.g., admin, employee) with restricted access to specific routes.
- **API Integration**:
  - Seamless integration between the React frontend and Django backend.
- **Error Handling**:
  - Proper error handling for API requests and responses.


## Technologies Used
### Backend
- **Django**: A high-level Python web framework.
- **Django REST Framework (DRF)**: For building RESTful APIs.
- **SimpleJWT**: For JWT-based authentication.
- **PostgreSQL**: Database for storing user and employee data.

### Frontend
- **React.js**: A JavaScript library for building user interfaces.
- **Redux**: For state management.
- **Axios**: For making HTTP requests to the backend API.
- **React Router DOM**: For client-side routing.
- **Bootstrap**: For styling and responsive design.

---

## Backend Setup

### Django REST Framework
The backend is built using Django REST Framework (DRF) to provide RESTful API endpoints.

#### Key Features:
- **Serializers**: Convert complex data types (e.g., models) into JSON.
- **Views**: Handle HTTP requests and return responses.
- **Permissions**: Restrict access to specific views based on user roles.

### JWT Authentication
The system uses **SimpleJWT** for token-based authentication.

#### Key Features:
- **Access Token**: Short-lived token for authenticating API requests.
- **Refresh Token**: Long-lived token for obtaining new access tokens.
- **Token Blacklisting**: Invalidate refresh tokens during logout.

#### Example Code:
```python
from rest_framework_simplejwt.tokens import RefreshToken

class LoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['username'], password=request.data['password'])
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            })
        return Response({'error': 'Invalid credentials'}, status=400)
```

### API Endpoints
| Endpoint               | Method | Description                          |
|------------------------|--------|--------------------------------------|
| `/emp/auth/login`      | POST   | Login and obtain JWT tokens.         |
| `/emp/auth/logout`     | POST   | Logout and blacklist refresh token.  |
| `/emp/auth/refresh`    | POST   | Obtain a new access token(not ye).           |

---

## Frontend Setup

### React.js
The frontend is built using React.js for a dynamic and responsive user interface.


#### Key Features:
- **Components**: Reusable UI components (e.g., `Login`, `Dashboard`).
- **State Management**: Use Redux for global state management.
- **Routing**: Use React Router DOM for client-side routing.

### Redux for State Management
Redux is used to manage the application state, including:
- Authentication state (e.g., `isAuthenticated`, `user`, `roles`).
- Theme and layout preferences.

#### Example Code:
```javascript
const initialState = {
    isAuthenticated: false,
    user: null,
    roles: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.roles = action.payload.roles;
        },
        
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.roles = [];
        },
    },
})
```

### Axios for API Calls
Axios is used to make HTTP requests to the backend API.

#### Key Features:
- **Interceptors**: Add request/response interceptors for handling tokens and errors.
- **Base URL**: Configure a base URL for all API requests.

#### Example Code:
```javascript
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://hms-j01n.onrender.com',
    headers: { 'Content-Type': 'application/json' },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
```

---

## Authentication Flow

1. **Login**:
   - User submits login form with `username` and `password`.
   - Frontend sends a POST request to `/emp/auth/login`.
   - Backend validates credentials and returns JWT tokens.
   - Frontend stores tokens in `localStorage` and updates Redux state.

2. **Access Protected Routes**:
   - Frontend includes the `access_token` in the `Authorization` header for all authenticated requests.
   - Backend verifies the token and returns the requested data.

3. **Token Expiry**:
   - If the `access_token` expires, the frontend uses the `refresh_token` to obtain a new `access_token`.

4. **Logout**:
   - Frontend sends a POST request to `/emp/auth/logout` with the `refresh_token`.
   - Backend blacklists the `refresh_token` and clears the user session.

---

## Error Handling


### Frontend
- Use Axios interceptors to handle API errors.
- Example:
  ```javascript
  axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
          if (error.response?.status === 401) {
              localStorage.removeItem('access_token');
              window.location.href = '/login';
          }
          return Promise.reject(error);
      }
  );
  ```

---

## Testing and Debugging

### Backend
- Use Django's `DEBUG` mode to log detailed error messages.
- Test API endpoints using **Postman** or **cURL**.

### Frontend
- Use browser developer tools (e.g., Chrome DevTools) to inspect network requests and de


<h4>note</h4>: 
/emp/auth/refresh is not yet set in the backend

i enabled CORS in the api and edited the loginview paylod to include user object  