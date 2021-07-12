import { useState } from "react";
import "./Form.css";

type Values = {
  email: string;
  password: string;
};

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Form = ({ handleSubmit }: Props) => {
  const initialValues: Values = {
    email: "",
    password: "",
  };

  const [data, setData] = useState<Values>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const validateInput = (str: string) => /\S+@\S+\.\S+/.test(str);

  return (
    <div className="form-wrapper">
      <h1>Form validation</h1>
      <form className="form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        {data.email && validateInput(data.email) ? null : (
          <span className="error">Enter a valid email</span>
        )}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;