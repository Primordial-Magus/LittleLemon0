import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import BookSection from "./components/BookSection";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <Hero />
          <Highlights />
          <Testimonials />
          <About />

          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
