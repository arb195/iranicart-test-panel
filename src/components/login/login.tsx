"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { InputsLogin } from "../../types/loginType";
import Swal from "sweetalert2";
import { useLoginQuery } from "@/app/api";
import Image from "next/image";
import Input from "../common/input/input";

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InputsLogin>();

  const { data, error, isLoading } = useLoginQuery();

  if (error instanceof Error) {
    const s = Swal.fire({
      title: "خطا!",
      text: error.message,
      icon: "error",
      confirmButtonText: "بارگذاری مجدد صحفه",
    }).then((result) => {
      result.isConfirmed && window.location.reload();
    });
  }

  const onSubmit: SubmitHandler<InputsLogin> = (formData) => {
    console.log(data?.data?.key);

    console.log(formData);
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div className="relative sm:max-w-md w-full ">
          <Image
            src="/logo.svg"
            alt="لوگو ایرانی کارت"
            width={500}
            height={100}
            className="absolute animate-bounce -top-[5.5rem]"
          />
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
          <div className="card bg-blue-700 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <h1 className="block mt-3 text-3xl text-gray-700 text-center font-semibold">
              ورود
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
              <div>
                <Controller
                  name="user"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="text"
                      placeholder="شماره تماس یا ایمیل"
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="mt-7">
                <Controller
                  name="pass"
                  control={control}
                  render={({ field }) => (
                    <Input type="password" placeholder="رمز عبور" {...field} />
                  )}
                />
              </div>

              <div className="mt-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                >
                  <Input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    مرا به خاطر داشته باش
                  </span>
                </label>

                <div className="w-full text-right">
                  <a
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    رمز عبور خود را فراموش کرده اید؟
                  </a>
                </div>
              </div>

              <div className="mt-7">
                <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  ورود
                </button>
              </div>

              <div className="flex mt-7 items-center text-center">
                <label className="block font-medium text-sm text-gray-600 w-full">
                  ورود با
                </label>
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  گوگل
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <label className="mr-2">حساب کاربری ندارید؟</label>
                  <a
                    href="#"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    ثبت نام
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
