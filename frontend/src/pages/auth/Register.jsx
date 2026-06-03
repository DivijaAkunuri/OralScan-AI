import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Patient",
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

    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (
      !passwordRegex.test(
        formData.password
      )
    ) {
      alert(
        "Password must contain at least 8 characters, one number and one special character."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert(
        "Passwords do not match"
      );
      return;
    }

    alert(
      "Registration Successful!"
    );

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-gray-500">
            Register to access
            OralScan AI
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Name */}

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
                required
                className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-600"
              />
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
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                required
                className="w-full border border-gray-300 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>

          {/* Role */}

          <div>
            <label className="block mb-2 font-medium">
              Select Role
            </label>

            <select
              name="role"
              value={
                formData.role
              }
              onChange={
                handleChange
              }
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600"
            >
              <option value="Patient">
                Patient
              </option>

              <option value="Doctor">
                Doctor
              </option>
            </select>
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
                placeholder="Enter Password"
                value={
                  formData.password
                }
                onChange={
                  handleChange
                }
                required
                className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-2">
              Password must have:
              <br />
              • Minimum 8 characters
              <br />
              • One number
              <br />
              • One special character
            </p>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-4 text-gray-400"
              />

              <input
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                name="confirmPassword"
                placeholder="Confirm Password"
                value={
                  formData.confirmPassword
                }
                onChange={
                  handleChange
                }
                required
                className="w-full border border-gray-300 rounded-xl pl-11 pr-12 py-3 focus:outline-none focus:border-blue-600"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                className="absolute right-4 top-4 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Create Account
          </button>

        </form>

        {/* Login */}

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?

          <Link
            to="/"
            className="ml-2 text-blue-700 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}