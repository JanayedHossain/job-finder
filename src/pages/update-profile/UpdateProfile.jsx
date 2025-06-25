import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, useNavigation } from "react-router";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  useEffect(() => {
    document.title = "JobFinder | Update Profile";
    window.scrollTo(0, 0);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser(name, photoURL)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success("Profile updated!");
        navigate("/profile");
      })
      .catch(() => {
        toast.error("Failed to update profile");
      });
  };

  return (
    <>
      <Helmet>
        <title>JobFinder | Update Profile</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto my-24 bg-white p-6 rounded-xl shadow-lg"
      >
        {isNavigating && <Loading />}
        <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update Information
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default UpdateProfile;
