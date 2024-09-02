import React, { useContext, useEffect, useRef, useState } from "react";
import { UserForm } from "../Usecontext/UserForm/UserForm";
import { useForm } from "react-hook-form";

const Researchinfo = () => {
  const { formData, setFormData } = useContext(UserForm);

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: formData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await uploder(FormData);
  };

  return (
    <div className="w-[95vw] md:px-10 ml-2 md:ml-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-screen-xl h-auto p-8 flex flex-col bg-[#403e3e41] rounded-xl  items-center  mx-auto text-black">
          <div className=" w-full flex md:flex-row flex-col justify-between overflow-hidden ">
            <div className="mb-5">
              <label className="flex text-md font-medium text-white">
                Faculty Name
              </label>
              <input
                type="text"
                value={formData.FACULTY}
                {...register("faculty", {
                  required: "faculty is required",
                  min: 4,
                  onChange: handleChange,
                  pattern: {
                    message: "faculty is invalid",
                  },
                })}
                placeholder="Faculty Name..."
                required
                className="mt-1 px-3 py-2 outline-none w-full  md:w-[18rem] rounded-md"
              />
              {errors.faculty && (
                <p className="text-red-500 text-xs italic">
                  {errors.faculty.message}
                </p>
              )}
            </div>
            <div className="mb-5">
              <label className="flex text-md font-medium text-white">
                Topic
              </label>
              <input
                type="text"
                value={formData.Research}
                {...register("Research", {
                  required: "Research is required",
                  onChange: handleChange,
                })}
                placeholder="Research..."
                required
                className="mt-1 w-full  md:w-[22rem] outline-none rounded-md px-3 py-2 "
              />
              {errors.Research && (
                <p className="text-red-500 text-xs italic">
                  {errors.Research.message}
                </p>
              )}
            </div>
          </div>

          <div className="w-full   mb-5">
            <label className="flex text-md font-medium text-white">
              Project Url
            </label>
            <input
              type="url"
              value={formData.projecturl}
              {...register("projecturl", {
                required: "projecturl is required",
                onChange: handleChange,
              })}
              className="md:w-full mt-1 px-3 py-2 outline-none w-full   rounded-md"
              placeholder="Projecturl"
            />
            {errors.projecturl && (
              <p className="text-red-500 text-xs italic">
                {errors.projecturl.message}
              </p>
            )}
          </div>

          <div className="w-full   mb-10 ">
            <label className="flex text-md font-medium text-white">Work</label>
            <div className=" flex md:flex-row flex-col justify-between ">
              <div className="mt-5">
                <h1 className="text-white">Start</h1>
                <input
                  type="Date"
                  value={formData.researchstart}
                  {...register("researchstart", {
                    required: "researchstart is required",
                    onChange: handleChange,
                  })}
                  className="mt-1 w-full md:w-[10vw] outline-none rounded-md px-3 py-2 "
                />
                {errors.researchstart && (
                  <p className="text-red-500 text-xs italic">
                    {errors.researchstart.message}
                  </p>
                )}
              </div>
              <div className="mt-5">
                <h1 className="text-white">End</h1>
                <input
                  type="Date"
                  value={formData.researchend}
                  {...register("researchend", {
                    required: "researchend is required",
                    onChange: handleChange,
                  })}
                  className="mt-1 w-full md:w-[10vw] outline-none rounded-md px-3 py-2 "
                />
                {errors.researchend && (
                  <p className="text-red-500 text-xs italic">
                    {errors.researchend.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="w-full   mb-5 ">
            <label className="flex text-md font-medium text-white">
              About Research
            </label>
            <textarea
              value={formData.aboutResearch}
              {...register("aboutResearch", {
                required: "aboutResearch is required",
                onChange: handleChange,
              })}
              rows="7"
              className="w-full outline-none px-5 py-4 overflow-scroll  text-black"
            ></textarea>
            {errors.aboutResearch && (
              <p className="text-red-500 text-xs italic">
                {errors.aboutResearch.message}
              </p>
            )}
          </div>
          <div className="w-full  ">
            <label className="flex text-md font-medium text-white">
              About Approach
            </label>
            <textarea
              value={formData.aboutapproach}
              {...register("aboutapproach", {
                required: "aboutapproach is required",
                onChange: handleChange,
              })}
              rows="7"
              className="w-full  outline-none px-5 py-4 overflow-scroll text-black"
            ></textarea>
            {errors.aboutapproach && (
              <p className="text-red-500 text-xs italic">
                {errors.aboutapproach.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Researchinfo;
