import Dropdown from "./Dropdown";
import { screen, render, userEvent } from "../test.config";

const options = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
const title = "Select your Pokemon";

describe("Dropdown", () => {
  it("should start close", () => {
    render(<Dropdown title={title} options={options} />);
    //if the dropdown is closed there are no options
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();
  });

  it("should show options when opened", () => {
    render(<Dropdown title={title} options={options} />);
    //initially
    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
    expect(screen.queryByText(options[3])).not.toBeInTheDocument();

    const dropdownBtn = screen.getByRole("button", { name: title });

    userEvent.click(dropdownBtn);
    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(screen.getByText(options[1])).toBeInTheDocument();
    expect(screen.getByText(options[2])).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[3] })
    ).toBeInTheDocument();
  });

  it("select an pokemon and close the menu", () => {
    //to mock a function

    render(<Dropdown title={title} options={options} />);

    const dropdownBtn = screen.getByRole("button", { name: title });

    userEvent.click(dropdownBtn);
    expect(screen.getByText(options[0])).toBeInTheDocument();
    expect(
      screen.getByRole("menuitem", { name: options[1] })
    ).toBeInTheDocument();

    userEvent.click(screen.getByText(options[2]));

    const img = document.querySelector("img") as HTMLImageElement;
    expect(img.alt).toContain("Charmander-img");

    expect(
      screen.queryByRole("menuitem", { name: options[0] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[1] })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("menuitem", { name: options[2] })
    ).not.toBeInTheDocument();
  });
});
