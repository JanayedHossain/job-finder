import { Outlet } from "react-router";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Container from "../components/container/Container";

const Root = () => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Root;
