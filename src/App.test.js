import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm.js'

test("renders App without crashing", () => {
  render(<App />);
});




test("submits user infromation and renders information on screen", async () => {
  render(<ContactForm/>);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const emailInput = screen.getByLabelText(/Email/i);
  const messageInput = screen.getByLabelText(/Message/i);
 
  fireEvent.change(firstNameInput, {
    target: { firstName: "firstName", value: "Karina" }
  });
  fireEvent.change(lastNameInput, {
    target: { lastName: "lastName", value: "Rodriguez" }
  });
  fireEvent.change(emailInput, {
    target: { email: "email", value: "karminer60@gmail.comt" }
  });
  fireEvent.change(messageInput, {
    target: { message: "message", value: "Hello, how are you?" }
  });

  // query for the submit button
  const submitButton = screen.getByText(/submit/i);

  // clicking the button
  fireEvent.click(submitButton);
  
  // assertion
  await screen.findByText(/"firstName": "Karina"/i);


});