import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useNavigation } from "react-router";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isNavigating = Boolean(navigation.location);
  useEffect(() => {
    document.title = "JobFinder | Profile";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>JobFinder | Profile</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg my-24"
      >
        {isNavigating && <Loading />}
        <div className="bg-neutral text-neutral-content mx-auto w-24 h-24 flex items-center justify-center rounded-full overflow-hidden">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              className="object-cover h-24 w-24 rounded-full"
              alt="User"
            />
          ) : (
            <span className="text-xl">{user?.displayName?.[0]}</span>
          )}
        </div>
        <h2 className="text-2xl font-bold text-center mt-4">
          {user?.displayName}
        </h2>
        <p className="text-center text-gray-500">{user?.email}</p>
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/update-profile")}
            className="btn btn-primary"
          >
            Update Information
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Profile;
