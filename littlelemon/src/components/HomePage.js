
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import BookingForm from "./BookingForm";
import Hero from "./Hero";


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