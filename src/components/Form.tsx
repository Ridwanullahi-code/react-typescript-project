import { FormGroup } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Store from "../functions/store";


interface FormValues {
  name: string;
  phoneNumber: string;
  email: string;
}

const initialState = {
  name: "",
  phoneNumber: "",
  email: "",
};

const Form = () => {
  const [values, setValues] = useState<FormValues>(initialState);
  const storage = new Store();
  const navigate = useNavigate();
  
  const handleChange = (event: any) => {
    const value = event.target.value;
    setValues({
      ...values,
      [event.target.name]: value,
    });
  }
    
  const handleSubmit = (event: any) => {
    event.preventDefault();
    storage.addData(values);
    navigate("/data");
  }
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "100px auto",
          maxWidth: "60%",
        }}
      >
        <TextField
          required
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-basic"
          label="phoneNumber"
          variant="outlined"
          name="phoneNumber"
          type="tel"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            fontSize: 20,
          }}
          size="large"
        >
          Submit
        </Button>
      </form>
    );
};

export default Form;
