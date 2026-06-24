import { Link } from "react-router-dom";
import { useState } from "react";

import {
    FaArrowLeft,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

import "../Styles/signup.css";

function SignupForm() {

    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] =
        useState({
            fullName: "",
            email: "",
            dob: "",
            phone: "",
            password: "",
        });

    const [errors, setErrors] =
        useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const validate = () => {

        let newErrors = {};

        if (!formData.fullName) {
            newErrors.fullName =
                "Full Name Required";
        }
        if (!formData.email) {
            newErrors.email =
                "Email Required";
        }
        if (!formData.dob) {
            newErrors.dob =
                "Date of Birth Required"
        }
        if (!formData.phone) {
            newErrors.phone =
                "Phone Required";
        }
        if (!formData.password) {
            newErrors.password =
                "Password Required";
        }

        else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters long";
        }
        else if (!/\d/.test(formData.password)) {
            newErrors.password = "Password must contain at least 1 number";
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
            newErrors.password = "Password must contain at least 1 special character";
        }
        setErrors(newErrors);

        return (
            Object.keys(newErrors).length === 0
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Registration Success");
        }
    };

    return (
        <div className="signup-page">

            <div className="signup-card">

                <Link
                    to="/"
                    className="back-btn"
                >
                    <FaArrowLeft />
                </Link>

                <h1>Sign up</h1>

                <p>
                    Already have an account?
                    <Link to="/">
                        Login
                    </Link>
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Full Name</label>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="vamsi krishna"
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.fullName}</p>

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="abc123@gmail.com"
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.email}</p>


                    <label>
                        Birth of Date
                    </label>

                    <input
                        type="date"
                        name="dob"
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.dob}</p>

                    <label>
                        Phone Number
                    </label>

                    <input
                        type="text"
                        name="phone"
                        placeholder="4547260592"
                        onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{errors.phone}</p>

                    <label>
                        Set Password
                    </label>


                    <div className="password-wrapper">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            name="password"
                            placeholder="********"
                            onChange={handleChange}
                        />
                        <p style={{ color: "red" }}>{errors.password}</p>

                        <span
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >
                            {showPassword ? (
                                <FaEye />
                            ) : (
                                <FaEyeSlash />
                            )}
                        </span>

                    </div>

                    <button
                        className="register-btn"
                        type="submit"
                    >
                        Register
                    </button>

                </form>

            </div>
        </div>
    );
}

export default SignupForm;