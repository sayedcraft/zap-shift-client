// import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, UpdateUserProfile } = useAuth();

const location = useLocation();

  const navigate=useNavigate()

  const handleRegister = (e) => {
    console.log(e.photo[0]);
    const profileImg = e.photo[0];

    registerUser(e.email, e.password)
      .then((result) => {
        console.log(result.user);
        // store the image and get the photo url

        const formData = new FormData();
        formData.append("image", profileImg);

        const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image}`;

        axios.post(imgUrl, formData).then((res) => {
          console.log("After img upload", res.data.data.url);

          // update user profile here
          const userProfile = {
            displayName: e.name,
            photoURL: res.data.data.url,
          };
          UpdateUserProfile(userProfile)
            .then(() => {
              console.log("User profile updated done");
                navigate(location?.state || '/')
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome to ZapShift</h3>
      <p className="text-center">Please Register</p>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <fieldset className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input
            type="name"
            {...register("name", { required: true })}
            className="input"
            placeholder="name"
          />
          {errors.name?.type == "required" && (
            <p className="text-red-500">Name is required</p>
          )}

          {/* photo */}

          <label className="label">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input"
            placeholder="Your photo"
          />
          {errors.email?.type == "required" && (
            <p className="text-red-500">Photo is required</p>
          )}

          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type == "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {/* pass */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6 })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type == "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type == "minLength" && (
            <p className="text-red-600">Password must be 6 characters</p>
          )}
          {/* ---- */}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>
          Already have an account ? Pls{" "}
          <Link state={location.state} to="/login" className="text-blue-400 underline">
            Login
          </Link>
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
