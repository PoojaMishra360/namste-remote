import { render , screen } from "@testing-library/react";
import ContactUs from "../ContactUs.js";

test("should render ContactUs component correctly", () => {
    render(<ContactUs />); 
    const heading = screen.getAllByRole("heading");
    expect(heading).tobeInTheDocument(); 

});