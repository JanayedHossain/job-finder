import { NavLink } from "react-router";
import notFoundImage from "../../assets/notFound.jpg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "JobFinder | Not Found";
  }, []);
  return (
    <>
      <Helmet>
        <title>JobFinder | Not Found</title>
      </Helmet>
      <div className="h-screen flex items-center justify-center flex-col gap-5">
        <img
          src={notFoundImage}
          alt=""
          className="w-[50%] sm:w-[40%] md:w-[35%] lg:w-[25%] mx-auto"
        />
        <p className="text-gray-600 w-11/12 text-center text-sm sm:text-base">
          We can’t find the page you’re looking for. It might be missing or no
          longer available.
        </p>
        <NavLink
          to={"/"}
          className="btn btn-sm md:btn-md bg-[#D2F8E6] border-transparent hover:border-[#80ffc1] hover:bg-transparent mt-2"
        >
          Back To Home
        </NavLink>
      </div>
    </>
  );
};

export default ErrorPage;
