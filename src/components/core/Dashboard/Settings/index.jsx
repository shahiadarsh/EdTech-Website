import ChangeProfilePicture from "./ChangeProfilePicture.jsx"
import DeleteAccount from "./DeleteAccount.jsx"
import EditProfile from "./EditProfile.jsx"
import UpdatePassword from "./UpdatePassword.jsx"

export default function Settings() {
  return (
    <>
      <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        Edit Profile
      </h1>
      {/* Change Profile Picture */}
      <ChangeProfilePicture />
      {/* Profile */}
      <EditProfile />
      {/* Password */}
      <UpdatePassword />
      {/* Delete Account */}
      <DeleteAccount />
    </>
  )
}
