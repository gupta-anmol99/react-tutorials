import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Logo } from "./index";
import { useDispatch } from "react-redux";
import { login as updateLogin } from "../features/authSlice";
import authService from "../appwrite/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

/**
 * When using React Hook Form, you pass props such as 
 * ...register("email", { required: true }) and 
 * ...register("password", { required: true }) to the Input components. 
 * These props include a ref which is forwarded to the input element 
 * in the Input component.
 * 
 * when you pass ...register("email", { required: true }) to an Input component, 
 * the ref provided by React Hook Form is automatically forwarded to the 
 * input element inside the Input component. This ensures that form 
 * validation and data collection are handled correctly by React Hook Form.
 */

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const signin = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) dispatch(updateLogin(currentUser));
        navigate("/");
      }
    } catch (error) {
      console.log("LoginJsx :: error", error);
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signin)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: true })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />

            <Button type="submit" children={"Sign In"} className="w-full" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
