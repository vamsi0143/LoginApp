import { Link } from "react-router-dom";
import { useState } from "react";

import {
    FaGoogle,
    FaFacebookF,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

import "../Styles/login.css";

function LoginForm() {
    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.email) {
            newErrors.email = "Email required";
        }

        if (!formData.password) {
            newErrors.password =
                "Password required";
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

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            alert("Login Success");
        }
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <h1>Login</h1>

                <p className="signup-text">
                    Don't have an account?
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="abcd123@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <p> {errors.email && (
                        <span className="error">
                            {errors.email}
                        </span>
                    )}</p>

                    <label>Password</label>

                    <div className="password-wrapper">

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            name="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                        />

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

                    {errors.password && (
                        <span className="error">
                            {errors.password}
                        </span>
                    )}

                    <div className="options">

                        <label className="checklabel">
                            <input className="check-box" type="checkbox" />
                            Remember me
                        </label>

                        <a href="#">
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        className="login-btn"
                        type="submit"
                    >
                        Log In
                    </button>

                </form>

                <div className="or">Or</div>

                <button className="social-btn">
                    <FaGoogle />
                    Continue with Google
                </button>

                <button className="social-btn">
                    <FaFacebookF />
                    Continue with Facebook
                </button>

            </div>
        </div>
    );
}

export default LoginForm;