import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Home1() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform form validation
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      // const item = { email, password };
      // const response = await fetch("http://localhost:3034/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify(item),
      // });

      // const result = await response.json();
      // localStorage.setItem("result", JSON.stringify(result));

      // Navigate to the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const validateEmail = (value) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value) => {
    return value.length >= 8;
  };

  return (
    <div>
      <Box
        sx={{
          "& > :not(style)": {  width: "30ch",margin:"auto" ,  marginTop:5 ,  },
        }}
      >
        <form onSubmit={handleSubmit}>
          <p style={{ marginLeft: 50 }}>
            <b>Sign In</b>
          </p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <Button variant="contained" type="submit" style={{ marginLeft: 50 }}>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Home1;
