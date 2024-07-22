// src/components/ForgetPassword.js
import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgetPassword = () => {
    // Mock API call to handle forget password
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div>
      <h2>Forget Password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleForgetPassword}>Submit</button>
    </div>
  );
};

export default ForgetPassword;
