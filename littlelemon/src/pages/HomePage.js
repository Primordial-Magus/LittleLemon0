
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import Hero from "../components/Hero";


export default function Homepage() {
    return (
        <>
        <main>
          <Hero />
          <Highlights />
          <Testimonials />
          <About />
        </main>
        </>
    )
}