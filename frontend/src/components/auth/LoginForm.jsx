import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
} from "lucide-react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [selectedRole, setSelectedRole] =
    useState("Doctor");

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name:
        formData.email.split("@")[0],
      email: formData.email,
      role: selectedRole,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    if (selectedRole === "Doctor") {
      navigate("/doctor");
    }

    if (selectedRole === "Patient") {
      navigate("/patient");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white px-8">
      <div className="w-full max-w-md">

        {/* Heading */}

        <div className="mb-10">

          <h2 className="text-4xl font-bold text-gray-900">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-3">
            Sign in to continue your oral cancer screening workflow.
          </p>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Role Selection */}

          <div>

            <label className="block mb-3 font-medium">
              Select Role
            </label>

            <div className="grid grid-cols-2 gap-3">

              <button
                type="button"
                onClick={() =>
                  setSelectedRole(
                    "Doctor"
                  )
                }
                className={`border rounded-xl py-3 font-medium transition ${
                  selectedRole ===
                  "Doctor"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Doctor
              </button>

              <button
                type="button"
                onClick={() =>
                  setSelectedRole(
                    "Patient"
                  )
                }
                className={`border rounded-xl py-3 font-medium transition ${
                  selectedRole ===
                  "Patient"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Patient
              </button>

            </div>

          </div>

          {/* Email */}

          <div>

            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <div className="relative">

              <Mail
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-600"
                required
              />

            </div>

          </div>

          {/* Password */}

          <div>

            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="••••••••"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-600"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-4 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          {/* Forgot Password */}

          <div className="flex justify-end">

            <Link
              to="/forgot-password"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Sign In Button */}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Sign In
          </button>

        </form>

        {/* Sign Up Link */}

        <div className="mt-6 text-center text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>

        </div>

        {/* Demo Access */}

        <div className="mt-6 text-center text-sm text-gray-500">
          Demo Access Available
        </div>

      </div>
    </div>
  );
}