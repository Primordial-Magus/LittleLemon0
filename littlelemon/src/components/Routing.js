import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import BookingPage from "../pages/BookingPage";




export default function Routing() {
    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/reservations" element={<BookingPage />} />


            </Routes>

        </BrowserRouter>
    );
}