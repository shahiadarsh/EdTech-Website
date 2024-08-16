import "./App.css";
import { Route,Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import CourseDetails from "./pages/CourseDetails"
import Catalog from "./pages/Catalog.jsx"
import Navbar from"./components/common/Navbar";
import Login from "./pages/Login"
import Signup from "./pages/Signup.jsx"
import ForgotPassword from "./pages/ForgotPassword"
import UpdatePassword from "./pages/UpdatePassword.jsx"
import VerifyEmail from "./pages/VerifyEmail.jsx"
import ViewCourse from "./pages/ViewCourse.jsx"
import VideoDetails from "./components/core/ViewCourse/VideoDetails.jsx"
import MyProfile from "./components/core/Dashboard/MyProfile.jsx"
import Settings from "./components/core/Dashboard/Settings/index.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Instructor from "./components/core/Dashboard/Instructor.jsx"
import AddCourse from "./components/core/Dashboard/AddCourse/index.jsx"
import MyCourses from "./components/core/Dashboard/MyCourses.jsx"
import EditCourse from "./components/core/Dashboard/EditCourse/index.jsx"
import PrivateRoute from "./components/core/Auth/PrivateRoute.jsx"
import Error from "./pages/Error"
import OpenRoute from "./components/core/Auth/OpenRoute"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses.jsx"
import Cart from "./components/core/Dashboard/Cart/index.jsx"
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants"
import { getUserDetails } from "./services/operations/profileAPI.jsx";
import { useEffect } from "react";

function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="courses/:courseId" element={<CourseDetails />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          } />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* Private Route - for Only Logged in User */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >

          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />

          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}

          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
        </Route>


        {/* For the watching course lectures */}
        <Route
          element={
            <PrivateRoute>
              <ViewCourse />
            </PrivateRoute>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>



        {/* 404 Page */}
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
