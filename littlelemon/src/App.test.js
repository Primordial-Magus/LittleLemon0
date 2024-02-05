import { render, screen } from "@testing-library/react";
import BookSection from '../src/components/BookSection';

test('Renders the BookingForm heading', () => {
    render(<BookSection />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})