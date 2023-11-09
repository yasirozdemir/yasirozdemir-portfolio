import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Landing />
      <Nav />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
