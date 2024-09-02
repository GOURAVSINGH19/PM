import React, { useContext, useEffect, useRef, useState } from "react";
import { UserForm } from "../Usecontext/UserForm/UserForm";
import { useForm } from "react-hook-form";

const UserInfo = () => {
  const { formData, setFormData } = useContext(UserForm);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: formData,
  });



  return (
    <div className="w-[95vw]  ml-2 md:ml-0 md:px-10 ">
      <form onSubmit={handleSubmit(onsubmit)}>
        
      </form>
    </div>
  );
};

export default UserInfo;








{/* <div className=" md:max-w-screen-lg md:mx-auto relative overflow-hidden  p-8 flex flex-col bg-[#605e5e2e] rounded-xl  md:items-center h-auto  text-black">
          <div className="flex flex-col md:flex-row gap-[10vw] mb-10">
            <div>
              <label className="flex text-md font-medium text-white">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                {...register("firstname", {
                  required: "First name is required",
                  min: 4,
                  onChange: handleChange,
                  pattern: {
                    message: "firstName is invalid",
                  },
                })}
                placeholder="Username..."
                className="mt-1 px-3 py-2 outline-none w-full  md:w-[24rem] rounded-md"
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                {...register("Lastname", {
                  required: "Lastname is required",
                  min: 4,
                  onChange: handleChange,
                  pattern: {
                    message: "lastname is invalid",
                  },
                })}
                placeholder="Lastname..."
                className="mt-1 w-full  md:w-[24rem] outline-none rounded-md px-3 py-2 "
              />
              {errors.Lastname && (
                <p className="text-red-500 text-xs italic">{errors.Lastname}</p>
              )}
            </div>
          </div>
          <div className=" flex md:flex-row flex-col gap-[10vw] mb-10">
            <div>
              <label className="flex text-md font-medium text-white">
                Email Name
              </label>
              <input
                type="email"
                value={formData.email}
                {...register("email", {
                  required: "Email is required",
                  onChange: handleChange,
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email..."
                className="mt-1 w-full md:w-[24rem]  rounded-md px-3 py-2 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="flex  text-md font-medium text-white">
                Phone Number
              </label>
              <input
                type="text"
                value={formData.phonenumber}
                {...register("phonenumber", {
                  required: "Phonenumber is required",
                  onChange: handleChange,
                })}
                placeholder="Phone no."
                className="mt-1  w-full md:w-[24rem] outline-none rounded-md px-3 py-2 "
              />
              {errors.phonenumber && (
                <p className="text-red-500 text-xs italic">
                  {errors.phonenumber}
                </p>
              )}
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-[10vw] mb-10">
            <div>
              <label className=" flex text-md font-medium text-white">
                Department
              </label>
              <input
                type="text"
                value={formData.department}
                {...register("department", {
                  required: "department is required",
                  onChange: handleChange,
                  pattern: {
                    message: "Invalid department",
                  },
                })}
                placeholder="Department..."
                className="mt-1  w-full md:w-[24rem] outline-none rounded-md px-3 py-2 "
              />
              {errors.department && (
                <p className="text-red-500 text-xs italic">
                  {errors.department}
                </p>
              )}
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Roll Number
              </label>
              <input
                type="text"
                value={formData.rollNumber}
                {...register("rollNumber", {
                  required: "rollnumber is required",
                  onChange: handleChange,
                })}
                placeholder="Roll No."
                className="mt-1  w-full md:w-[24rem] outline-none rounded-md px-3 py-2 "
              />
              {errors.rollNumber && (
                <p className="text-red-500 text-xs italic">
                  {errors.rollNumber}
                </p>
              )}
            </div>
          </div>
          <div className="w-full  mb-5">
            <label className=" flex text-md font-medium text-white">
              Collage Name
            </label>
            <input
              type="text"
              value={formData.Collagename}
              {...register("Collagename", {
                required: "Collagename is required",
                onChange: handleChange,
              })}
              placeholder="Collagename..."
              className="md:w-full  mt-1 px-3 py-2 outline-none w-full   rounded-md"
            />
            {errors.Collagename && (
              <p className="text-red-500 text-xs italic">
                {errors.Collagename}
              </p>
            )}
          </div>
          <div className="w-full  mb-10 ">
            <label className="flex text-md font-medium text-white">
              Year of Graduation
            </label>
            <div className="flex md:flex-row flex-col md:justify-between ">
              <div className="mt-5">
                <h1 className="text-white">Start</h1>
                <input
                  type="Date"
                  value={formData.batchstart}
                  {...register("batchstart", {
                    required: "batchstart is required",
                    onChange: handleChange,
                  })}
                  className="md:w-full mt-1 px-3 py-2 outline-none w-full   rounded-md"
                />
                {errors.batchstart && (
                  <p className="text-red-500 text-xs italic">
                    {errors.batchstart}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-white">End</h1>
                <input
                  type="Date"
                  value={formData.batchend}
                  {...register("batchend", {
                    required: "batchend is required",
                    onChange: handleChange,
                  })}
                  className="mt-1 w-full md:w-[10vw] outline-none rounded-md px-3 py-2 "
                />
                {errors.batchend && (
                  <p className="text-red-500 text-xs italic">
                    {errors.batchend}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className=" flex flex-col md:flex-row gap-[10vw]">
            <div>
              <label className="flex text-md font-medium text-white">
                Github
              </label>
              <input
                type="url"
                value={formData.github}
                {...register("github", {
                  required: "github is required",
                  onChange: handleChange,
                })}
                placeholder="Link..."
                className="mt-1  w-full md:w-[24rem] outline-none  rounded-md px-3 py-2 "
              />
              {errors.github && (
                <p className="text-red-500 text-xs italic">{errors.github}</p>
              )}
            </div>
            <div>
              <label className="flex text-md font-medium text-white">
                Linkedin
              </label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                {...register("linkedin", {
                  required: "linkedin is required",
                  onChange: handleChange,
                })}
                placeholder="Link..."
                className="mt-1  w-full md:w-[24rem] outline-none rounded-md px-3 py-2 "
              />
            </div>
            {errors.linkedin && (
              <p className="text-red-500 text-xs italic">{errors.linkedin}</p>
            )}
          </div>

          <div className="flex justify-between fle-col w-full px-20 mt-16">
            <button
              type="reset"
              className="w-fit h-fit px-4 py-3 cursor-pointer mt-8 text-white font-bold rounded-md bg-gray-400"
              onClick={() => setFormData("")}
            >
              Reset
            </button>
            <button
              type="submit"
              className="w-fit h-fit px-4 py-3 cursor-pointer mt-8 text-white font-bold rounded-md bg-gray-400"
            >
              save
            </button>
          </div>
        </div> */}