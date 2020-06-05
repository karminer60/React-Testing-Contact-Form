import React from "react";
import { render, fireEvent, act} from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});




test("submits user infromation and renders information on screen", () => {
  const { getByLabelText, getByText, findAllByText } = render(<App />);

  const firstNameInput = getByLabelText(/First Name/i);
  const lastNameInput = getByLabelText(/Last Name/i);
  const emailInput = getByLabelText(/Email/i);
  const messageInput = getByLabelText(/Message/i);
  act(() => {
  fireEvent.change(firstNameInput, {
    target: { firstName: "firstName", value: "Kar" }
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
});
  console.log(firstNameInput.value);

  // query for the submit button
  const submitButton = getByText(/submit/i);

  // clicking the button
  act(() => {fireEvent.click(submitButton);});
  

  // assertion
  getByText(/.*"firstName": "Kar".*/i);


});