import React, { useState } from "react";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    age: "",
    gender: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    qualification: "",
    profession: "",
    terms: false,
  });

  const [error, setError] = useState({});

  const formHandle = (e) => {
    e.preventDefault();

    let newError = {};
    if (!data.name) newError.name = "Name is required";
    if (!data.username) newError.username = "Username is required";
    if (!data.email) newError.email = "Email is required";
    if (!data.password) newError.password = "Password is required";
    if (!data.terms) newError.terms = "Accept terms & conditions";

    setError(newError);

    if (Object.keys(newError).length === 0) {
      console.log("Form Data:", data);
      localStorage.setItem("users", JSON.stringify(signupData));
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-card" onSubmit={formHandle}>
        <h2>Create Account ✨</h2>

        {/* Full Name */}
        <input
          className="input"
          type="text"
          placeholder="Full Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {error.name && <p className="error">{error.name}</p>}

        {/* Username */}
        <input
          className="input"
          type="text"
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        {error.username && <p className="error">{error.username}</p>}

        {/* Email */}
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {error.email && <p className="error">{error.email}</p>}

        {/* Password */}
        <input
          className="input"
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        {error.password && <p className="error">{error.password}</p>}

        {/* Phone Number */}
        <input  
          className="input"
          type="tel"
          placeholder="Phone"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
        />

        {/* Age */}
        <input
          className="input"
          type="number"
          placeholder="Age"
          value={data.age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />

        {/* DateOfBirth */}
        <input
          className="input"
          type="date"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />

        {/* Gender */}
        <select
          className="input"
          value={data.gender}
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* Address */}
        <input
          className="input"
          type="text"
          placeholder="Address"
          value={data.address}
          onChange={(e) => setData({ ...data, address: e.target.value })}
        />

        {/* City */}
        <input
          className="input"
          type="text"
          placeholder="City"
          value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />

        {/* State */}
        <input
          className="input"
          type="text"
          placeholder="State"
          value={data.state}
          onChange={(e) => setData({ ...data, state: e.target.value })}
        />

        {/* Country */}
        <input
          className="input"
          type="text"
          placeholder="Country"
          value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />

        {/* Pincode */}
        <input
          className="input"
          type="text"
          placeholder="Pincode"
          value={data.pincode}
          onChange={(e) => setData({ ...data, pincode: e.target.value })}
        />

        {/* Qualification */}
        <input
          className="input"
          type="text"
          placeholder="Qualification"
          value={data.qualification}
          onChange={(e) => setData({ ...data, qualification: e.target.value })}
        />

        {/* Profession */}
        <input
          className="input"
          type="text"
          placeholder="Profession"
          value={data.profession}
          onChange={(e) => setData({ ...data, profession: e.target.value })}
        />

        {/* Terms & Conditions Checkbox */}
        <label className="checkbox">
          <input
            type="checkbox"
            checked={data.terms}
            onChange={(e) => setData({ ...data, terms: e.target.checked })}
          />
          Accept Terms & Conditions
        </label>
        {error.terms && <p className="error">{error.terms}</p>}

        {/* Submit Button */}
        <button className="primary-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
