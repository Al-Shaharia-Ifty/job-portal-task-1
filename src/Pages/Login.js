import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ResetPasswordModal from "../Components/ResetPasswordModal";
import auth from "../Firebase.init";
import Loading from "../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [modal, setModal] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInErrorMessage;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    signInErrorMessage = <p className="text-red-500 mb-2">{error?.message}</p>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div>
      <div className="flex min-h-screen justify-center items-center">
        <div className="card  max-w-md bg-base-100 shadow-xl">
          <div className="card-body border-2 rounded-lg">
            <h2 className="text-center text-3xl">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Email */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-sm"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              {/* Password */}
              <div className="form-control w-full max-w-sm">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full max-w-sm"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {/*  */}
              {signInErrorMessage}
              <input
                className="btn btn-primary bg-gradient-to-r from-[#6CA83F] via-[#4C8F3E] to-[#166534] text-white w-full max-w-sm"
                value="login"
                type="submit"
              />
            </form>
            <div className="divider"></div>
            <p>
              New to JobFinder{" "}
              <Link to="/signUp" className="text-blue-500">
                Create and Account
              </Link>{" "}
            </p>
            <p>
              Are you forget your password?{" "}
              <label
                onClick={() => setModal(true)}
                htmlFor="reset-modal"
                className="text-blue-500"
              >
                Reset Password
              </label>
            </p>
          </div>
        </div>
      </div>
      {modal && <ResetPasswordModal setModal={setModal} />}
    </div>
  );
};

export default Login;
