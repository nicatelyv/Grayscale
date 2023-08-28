import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Signup from "./components/Signup";
import Footer from "./layout/Footer/Footer";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Signup />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
