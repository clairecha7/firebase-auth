import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Profile = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  console.log(user);

  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        {user ? (
          <>
            <p>
              <strong>Email: </strong> {user.email}
            </p>
            <p>
              <strong>ID: </strong> {user.uid}
            </p>
          </>
        ) : (
          <>
            <p>
              <strong>Email: </strong>
            </p>
            <p>
              <strong>ID: </strong>
            </p>
          </>
        )}
        <span
          onClick={() => {
            signOut(auth);
            navigate("/");
          }}
        >
          LogOut
        </span>
      </div>
    </div>
  );
};

export default Profile;
