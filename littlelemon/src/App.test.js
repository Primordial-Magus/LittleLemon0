import { render, screen } from "@testing-library/react";
import Hero from './components/Hero';

test('Renders the BookingForm heading', () => {
    render(<Hero />);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
})