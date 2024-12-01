"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { InputsLogin } from "../../types/loginType";
import Swal from "sweetalert2";
import { useLoginQuery } from "@/app/api";
import Image from "next/image";
import Input from "../common/inputs/input";
import Link from "next/link";

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
        <Image
          src="/logo.svg"
          alt="لوگو ایرانی کارت"
          width={400}
          height={100}
          className="mb-10"
        />
        <div className="relative sm:max-w-md w-full ">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform top-2"></div>
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <h1 className="block mt-3 mb-10 text-3xl text-gray-700 text-center font-semibold">
              ورود
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mb-7">
              <div className="mb-5">
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

              <div className="mb-7">
                <Controller
                  name="pass"
                  control={control}
                  render={({ field }) => (
                    <Input type="password" placeholder="رمز عبور" {...field} />
                  )}
                />
              </div>

              <div className="mb-7 flex">
                <label
                  htmlFor="remember_me"
                  className="inline-flex items-center w-full cursor-pointer"
                >
                  <Input
                    id="remember_me"
                    type="checkbox"
                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ml-2"
                    name="remember"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    مرا به خاطر داشته باش
                  </span>
                </label>

                <div className="w-full text-right">
                  <Link
                    className="underline text-sm text-gray-600 hover:text-gray-900"
                    href="#"
                  >
                    رمز عبور خود را فراموش کرده اید؟
                  </Link>
                </div>
              </div>

              <button className="mb-7 bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                ورود
              </button>

              <div className=" mb-4  text-center font-medium text-md text-gray-600 ">
                ورود با
              </div>

              <div className="flex mt-7 justify-center w-full">
                <button className="flex items-center gap-5 bg-blue-700 border-none px-7 py-3 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0"
                    y="0"
                    viewBox="0 0 512 512"
                    className="w-5 h-5"
                  >
                    <g>
                      <path
                        d="M512 256c0-16.084-1.509-32.183-4.497-47.813-1.348-7.075-7.544-12.188-14.736-12.188H257c-8.291 0-15 6.709-15 15v90c0 8.291 6.709 15 15 15h120.967c-7.537 15.258-17.924 28.497-30.121 39.635l84.78 84.78C481.407 393.939 512 328.539 512 256zM256 120c29.429 0 57.422 9.346 80.947 27.041 5.947 4.468 14.341 3.926 19.614-1.392l64.014-64.014c2.974-2.974 4.57-7.061 4.38-11.265s-2.124-8.13-5.347-10.84C373.803 21.138 315.692 0 256 0 168.151 0 90.542 44.654 44.663 112.452l88.048 88.048C153.717 153.184 200.979 120 256 120zM256 512c57.263 0 109.993-19.2 152.602-51.187l-86.371-86.371C302.489 385.558 279.925 392 256 392c-55.021 0-102.283-33.184-123.289-80.5l-88.048 88.048C90.542 467.346 168.151 512 256 512zM122.184 277.605C121.035 270.526 120 263.397 120 256s1.035-14.526 2.184-21.605L28.06 140.271C10.252 175.051 0 214.316 0 256s10.252 80.949 28.061 115.728z"
                        fill="#fff"
                        opacity="1"
                        data-original="#fff"
                      ></path>
                    </g>
                  </svg>
                  گوگل
                </button>
              </div>

              <div className="mt-7">
                <div className="flex justify-center items-center">
                  <span className="mr-2 text-black ml-1">
                    حساب کاربری ندارید؟
                  </span>
                  <Link
                    href="#"
                    className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  >
                    ثبت نام
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
