import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { currentEmail, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();

  useEffect(() => {
    if (emailRef.current && currentEmail) {
      emailRef.current.value = currentEmail;
    }
    document.title = "JobFinder | Reset Password";
  }, [currentEmail]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    resetPassword(email)
      .then(() => {
        window.location.href = "https://mail.google.com";
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <Helmet>
        <title>JobFinder | Reset Password</title>
      </Helmet>
      <div className="card bg-white shadow-xl p-8 w-full max-w-sm mx-auto my-18">
        <h2 className="text-2xl mb-4 font-bold text-center">Reset Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <label className="label">Email</label>
          <input
            ref={emailRef}
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Your Email"
            required
          />
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
