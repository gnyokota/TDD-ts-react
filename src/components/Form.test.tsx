import { fireEvent, render } from "@testing-library/react";
import Form, { validateInput } from "./Form";

describe("login", () => {
  let component: any;
  let handleSubmit: any;

  beforeEach(() => {
    handleSubmit = jest.fn();
    component = render(<Form handleSubmit={handleSubmit} />);
  });

  it("validate the email", () => {
    let email = "text@test.com";
    expect(validateInput(email)).toBe(true);
  });

  it("validate should fail with incorrect email", () => {
    let email = "text";
    expect(validateInput(email)).not.toBe(true);
  });

  it("form should be in the document", () => {
    const labelEmail = component.getByText("Email:");
    expect(labelEmail).toBeInTheDocument();
    const labelPass = component.getByLabelText("Password:");
    expect(labelPass.getAttribute("name")).toBe("password");
  });

  it("should validate the email", () => {
    const inputNode = component.getByLabelText("Email:");
    expect(inputNode.value).toMatch("");
    fireEvent.change(inputNode, { target: { value: "testing" } });
    expect(inputNode.value).toMatch("testing");

    const error = component.getByText("Enter a valid email");
    expect(error).toBeInTheDocument();

    fireEvent.change(inputNode, { target: { value: "testing@test.com" } });
    expect(inputNode.value).toMatch("testing@test.com");
    expect(error).not.toBeInTheDocument();
  });

  it("should be able to submit form", () => {
    const submitbtn = component.getByRole("button");
    fireEvent.submit(submitbtn);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
