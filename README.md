# Project Name

A Full-Stack Educational Platform with user authentication, course management, and a dashboard for different user roles.

## Features
- User authentication (Login, Signup, Password Management)
- Role-based access control (Admin, Instructor, Student)
- Course management (Add, Edit, View Courses)
- Dashboard for students, instructors, and admins
- Course catalog and purchase history
- Cart functionality
- Video-based course lectures
- Responsive UI with React Router for navigation
- Backend API with Express.js
- Database connectivity and cloud storage integration

## Tech Stack
### Frontend
- React.js
- React Router
- Redux (State Management)
- React Top Loading Bar
- Local Storage for token handling

### Backend
- Node.js
- Express.js
- MongoDB
- Cloudinary (File Storage)
- CORS, Cookie Parser
- dotenv (Environment Configuration)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Install frontend dependencies:
   ```sh
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```sh
   cd backend
   npm install
   ```

4. Start the frontend development server:
   ```sh
   npm start
   ```

5. Start the backend server:
   ```sh
   npm run server
   ```

## Project Structure
```
/root
  ├── frontend
  │   ├── components
  │   │   ├── common (Navbar, etc.)
  │   │   ├── core
  │   │   │   ├── Auth (PrivateRoute, OpenRoute)
  │   │   │   ├── Dashboard (Profile, Settings, Instructor, Courses, AdminPanel, etc.)
  │   │   │   ├── ViewCourse (VideoDetails)
  │   ├── pages
  │   │   ├── Home, About, Contact
  │   │   ├── Auth (Login, Signup, ForgotPassword, UpdatePassword, VerifyEmail)
  │   │   ├── Dashboard
  │   │   ├── CourseDetails, Catalog
  │   │   ├── Error
  │   ├── slices (Redux slices)
  │   ├── services (API calls)
  │   ├── utils (Constants, Helpers)
  ├── backend
  │   ├── routes
  │   │   ├── User
  │   │   ├── Profile
  │   │   ├── Payments
  │   │   ├── Course
  │   ├── config (Database, Cloudinary)
  │   ├── middleware
  │   ├── models
  │   ├── controllers
  │   ├── server.js (Main entry point)
```

## Routes
### Frontend Public Routes
- `/` - Home
- `/about` - About
- `/contact` - Contact
- `/courses/:courseId` - Course Details
- `/catalog/:catalogName` - Catalog
- `/login` - Login
- `/signup` - Signup
- `/forgot-password` - Forgot Password
- `/update-password/:id` - Update Password
- `/verify-email` - Verify Email

### Frontend Private Routes (Authenticated Users)
- `/dashboard/my-profile` - Profile
- `/dashboard/settings` - Settings

#### Instructor Routes
- `/dashboard/instructor`
- `/dashboard/my-courses`
- `/dashboard/add-course`
- `/dashboard/edit-course/:courseId`

#### Student Routes
- `/dashboard/enrolled-courses`
- `/dashboard/cart`
- `/dashboard/purchase-history`
- `/view-course/:courseId/section/:sectionId/sub-section/:subSectionId` - Video Lectures

#### Admin Routes
- `/dashboard/admin-panel`

### Backend API Endpoints
- `GET /api/v1/auth` - Authentication routes
- `GET /api/v1/profile` - User profile routes
- `GET /api/v1/course` - Course management routes
- `GET /api/v1/payment` - Payment processing routes

## Contributing
Feel free to submit issues and pull requests.

## **License** 📄

## **Contact** 📧

- **Name:** Adarsh shahi  
- **Email:** shahiadarsh7675@gmail.com

