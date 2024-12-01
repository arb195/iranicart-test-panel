import Image from "next/image";
import Link from "next/link";
import Message from "../common/message/message";

interface MessageType {
  id: number;
  text: string;
  isSent: boolean;
}

export default function ViewTicket() {
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

  return (
    <div className="grid grid-cols-3 gap-4 h-full ">
      <div className="col-span-3 order-2 md:col-span-2 md:order-1">
        <div className="flex items-center justify-between">
          <h2 className="text-blue-500 font-bold mb-3"> عنوان تیکت </h2>
          <Link href="panel/ticket" className="flex items-center gap-2 text-sm">
            بازگشت به تیکت ها
            <div className="h-5 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0"
                y="0"
                viewBox="0 0 24 24"
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
            </div>
          </Link>
        </div>

        <div className="p-4 bg-gray-100 flex-grow flex flex-col ">
          <div className=" overflow-y-scroll p-4 max-h-[500px]">
            {messages.map((msg) => (
              <Message key={msg.id} text={msg.text} isSent={msg.isSent} />
            ))}
          </div>
        </div>

        <form action="">
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="desc">توضیحات ( متن پیام ارسالی )</label>

            <textarea
              className="border"
              name="description"
              id="desc"
              rows={5}
            ></textarea>
          </div>

          <button className="bg-blue-700 text-white py-3 px-7 rounded-sm">
            ارسال تیکت
          </button>
        </form>
      </div>
      <div className="col-span-3 order-1 bg-blue-50 p-5 md:col-span-1 md:order-2">
        <div className="flex flex-col ">
          <div className="flex flex-col items-center mb-4">
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
            <Link
              href="/panel/ticket"
              className="block bg-white text-md py-4 px-5 text-center mb-5"
            >
              سوالات متداول
            </Link>
            <Link
              href="#"
              className="block bg-green-700 text-white text-center text-md py-4 px-5 mb-7"
            >
              تماس با مدیریت
            </Link>
            <div className="flex flex-col">
              <span className="mb-2">
                <b>بستن این تیکت</b> به منزله‌ی پایان گفت‌وگو و اعلام موفقیت
                پشتیبانی است.
              </span>
              <button className="bg-gray-500 text-white py-4 ">
                بستن تیکت
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
