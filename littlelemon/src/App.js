import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import SpecialsSection from "./components/SpecialsSection";
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
          
          <SpecialsSection />
          <BookSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
