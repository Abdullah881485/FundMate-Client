import { Outlet, useNavigation } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader1 from "../../components/Loader/Loader";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
const Root = () => {
  const { state } = useNavigation();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        {state == "loading" ? <Loader1></Loader1> : <Outlet></Outlet>}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
