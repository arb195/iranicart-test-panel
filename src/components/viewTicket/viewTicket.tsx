"use client";

import Image from "next/image";
import Link from "next/link";
import Message from "../common/message/message";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextAriaFormData } from "@/types/newTicketType";
import TextArea from "../common/inputs/textarea";
import { MessageType } from "@/types/viewTicketType";
import Swal from "sweetalert2";

export default function ViewTicket() {
  const [timeLeft, setTimeLeft] = useState(60);
  const circleRadius = 50;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const progress = (timeLeft / 60) * circleCircumference;

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const messages: MessageType[] = [
    { id: 1, text: "سلام! چطوری؟", isSent: false },
    { id: 2, text: "خیلی خوبم! تو چطوری؟", isSent: true },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
    { id: 3, text: "منم خوبم، ممنون!", isSent: false },
  ];

  const { control, handleSubmit } = useForm<TextAriaFormData>();

  const onSubmit = (data: TextAriaFormData) => {
    console.log(data);
  };

  const closeTicket = () => {
    Swal.fire({
      title: "آیا مایل به بستن تیکت هستید؟",
      icon: "question",
      iconHtml: "؟",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "#1d4ed8",
    }).then((result) => {
      result.isConfirmed && console.log("close");
    });
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-full ">
      <div className="bg-gray-50 p-3 col-span-3 order-2 md:col-span-2 md:order-1">
        <div className="flex items-center justify-between">
          <h2 className="text-blue-500 font-bold mb-3"> عنوان تیکت </h2>
          <Link
            href="/panel/ticket"
            className="flex items-center gap-2 text-sm"
          >
            بازگشت به تیکت ها
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <g>
                <g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M13 2.5c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM13 21C7.486 21 3 16.514 3 11S7.486 1 13 1s10 4.486 10 10-4.486 10-10 10z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M14.442 15.22a.747.747 0 0 1-.529-.218l-3.487-3.47a.751.751 0 0 1 0-1.063l3.487-3.471a.749.749 0 1 1 1.058 1.063L12.02 11l2.952 2.94a.749.749 0 0 1-.529 1.28z"
                    fill="#000000"
                    opacity="1"
                    data-original="#000000"
                  ></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>

        <div className="mb-7 bg-gray-100 flex-grow flex flex-col  overflow-y-scroll p-4 max-h-[500px]">
          {messages.map((msg) => (
            <Message key={msg.id} text={msg.text} isSent={msg.isSent} />
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="desc">توضیحات ( متن پیام ارسالی )</label>

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea placeholder="توضیحات ... " rows={4} {...field} />
              )}
            />
          </div>

          <button className="bg-blue-700 text-white py-3 px-7 rounded-sm">
            ارسال تیکت
          </button>
        </form>
      </div>
      <div className="col-span-3 order-1 bg-blue-50 p-6 md:col-span-1 md:order-2">
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-7">
            <Image
              src="/imgs/profile.svg"
              width={80}
              height={80}
              alt="profile"
            />
            <span className="font-bold ">کارشناس ایرانیکارت</span>
          </div>
          <div className="flex justify-between font-bold text-md mb-6">
            <span className="font-normal text-sm">عنوان تیکت</span>
            <span>تیکت تست</span>
          </div>
          <div>
            <span className="block mb-4 font-bold text-md">جزئیات</span>
            <ul className="flex flex-col gap-2 mb-4">
              <li className="flex justify-between">
                <span className="text-sm">زمان ایجاد تیکت : </span>
                <span className="font-bold text-sm">
                  {" "}
                  ۱۰ آذر ۱۴۰۳ ساعت ۱۷:۲۹
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm">زمان ایجاد تیکت : </span>
                <span className="font-bold text-sm">
                  {" "}
                  ۱۰ آذر ۱۴۰۳ ساعت ۱۷:۲۹
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-sm">زمان ایجاد تیکت : </span>
                <span className="font-bold text-sm">
                  {" "}
                  ۱۰ آذر ۱۴۰۳ ساعت ۱۷:۲۹
                </span>
              </li>
            </ul>
            <div className="flex items-center justify-between mb-7">
              <Link
                href="/panel/ticket"
                className="flex items-center gap-5 bg-blue-600 text-white text-md py-3 px-6 text-center rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 482.6 482.6"
                  className="h-5 w-5"
                >
                  <g>
                    <path
                      d="M512 346.5c0-63.535-36.45-120.238-91.04-147.82-1.694 121.82-100.46 220.586-222.28 222.28C226.262 475.55 282.965 512 346.5 512c29.79 0 58.758-7.934 84.21-23.008l80.567 22.285-22.285-80.566C504.066 405.258 512 376.289 512 346.5zm0 0"
                      fill="#fff"
                      opacity="1"
                      data-original="#fff"
                    ></path>
                    <path
                      d="M391 195.5C391 87.7 303.3 0 195.5 0S0 87.7 0 195.5c0 35.133 9.352 69.34 27.11 99.371L.718 390.277l95.41-26.386C126.16 381.648 160.367 391 195.5 391 303.3 391 391 303.3 391 195.5zM165.5 150h-30c0-33.086 26.914-60 60-60s60 26.914 60 60c0 16.793-7.11 32.934-19.512 44.277L210.5 217.605V241h-30v-36.605l35.234-32.25c6.297-5.762 9.766-13.625 9.766-22.145 0-16.543-13.457-30-30-30s-30 13.457-30 30zm15 121h30v30h-30zm0 0"
                      fill="#fff"
                      opacity="1"
                      data-original="#fff"
                    ></path>
                  </g>
                </svg>
                سوالات متداول
              </Link>
              <Link
                href={timeLeft == 0 ? "tel:+989130804416" : "#"}
                className="flex items-center gap-5 bg-green-700 text-white text-center text-md py-3 px-6 rounded"
              >
                {timeLeft == 0 ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      x="0"
                      y="0"
                      viewBox="0 0 482.6 482.6"
                      className="h-5 w-5"
                    >
                      <g>
                        <path
                          d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z"
                          fill="#fff"
                          opacity="1"
                          data-original="#fff"
                        ></path>
                      </g>
                    </svg>
                    تماس با مدیریت
                  </>
                ) : (
                  <>
                    مدت زمان انتظار :{timeLeft}
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 120 120"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r={circleRadius}
                        fill="none"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDasharray={circleCircumference}
                        strokeDashoffset={circleCircumference - progress}
                        strokeLinecap="round"
                        className="transition-stroke-dashoffset duration-1000 ease-linear"
                      />
                    </svg>
                  </>
                )}
              </Link>
            </div>
            <div className="flex flex-col">
              <span className="mb-2">
                <b>بستن این تیکت</b> به منزله‌ی پایان گفت‌وگو و اعلام موفقیت
                پشتیبانی است.
              </span>
              <button
                className="bg-gray-500 text-white py-4"
                onClick={closeTicket}
              >
                بستن تیکت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
