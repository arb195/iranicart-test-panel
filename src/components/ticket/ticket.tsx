"use client";
import IconCard from "../common/iconCard/iconCard";
import Link from "next/link";

export default function Ticket() {
  const allTicket: string = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#ffffff" opacity="1" data-original="#000000"></path></clipPath></defs><path d="M0 0v-32.133" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 469.867 491.29)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="M0 0h192.8" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 105.689 469.867)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="M0 0h96.4" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 105.689 555.556)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 22.726-22.727" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 422.898 229.466)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 54.521 54.521" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 259.32 362.755)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a32.1 32.1 0 0 1-9.415 22.719 32.097 32.097 0 0 1-22.719 9.415h-80.333C-130.212 32.134-144.6 17.746-144.6 0a32.1 32.1 0 0 1-9.415 22.719 32.096 32.096 0 0 1-22.718 9.415h-273.133a32.097 32.097 0 0 1-22.719-9.415A32.1 32.1 0 0 1-482 0v-160.666a32.1 32.1 0 0 1 9.415-22.719 32.097 32.097 0 0 1 22.719-9.415h273.133a32.096 32.096 0 0 1 22.718 9.415 32.1 32.1 0 0 1 9.415 22.719c0-17.746 14.388-32.134 32.133-32.134h80.333a32.097 32.097 0 0 1 22.719 9.415A32.1 32.1 0 0 1 0-160.666z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(497 207.8)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 145.412 145.403a32.09 32.09 0 0 0 22.718 9.415 32.122 32.122 0 0 0 22.719-9.407c-12.548 12.548-12.548 32.889 0 45.437l56.803 56.803a32.126 32.126 0 0 0 22.726 9.415 32.096 32.096 0 0 0 22.719-9.415 760525.78 760525.78 0 0 0 113.607-113.607 32.129 32.129 0 0 0 0-45.444L349.9 31.796c-12.547-12.548-32.888-12.548-45.436 0A32.123 32.123 0 0 0 312.562 0h-8.91c-17.745 0-32.132-14.388-32.132-32.134a32.098 32.098 0 0 1-9.416 22.719A32.096 32.096 0 0 1 239.386 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(80.88 239.934)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path></g></g></svg>`;

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <IconCard
          title="همه تیکت ها"
          count="4"
          icon={allTicket}
          iconColor="bg-blue-600"
        />
        <IconCard
          title="پاسخ داده شده"
          count="2"
          icon={allTicket}
          iconColor="bg-green-600"
        />
        <IconCard
          title="بسته شده"
          count="1"
          icon={allTicket}
          iconColor="bg-gray-600"
        />
        <IconCard
          title="درانتظار برسی"
          count="1"
          icon={allTicket}
          iconColor="bg-red-600"
        />
      </div>

      <div className="mb-4 grid grid-cols-0 gap-6 ">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <h6 className="block antialiased tracking-normal  text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
              لیست تیکت ها
            </h6>
            <p className="antialiased  text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
              <strong>4</strong> تعداد
              <Link
                href="/panel/ticket/msg"
                className="flex gap-2 items-center bg-blue-600 text-white p-2 rounded-xl shadow-md mr-2"
              >
                ثبت تیکت جدید
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  className="w-4"
                >
                  <g>
                    <path
                      d="M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z"
                      fill="#fff"
                      opacity="1"
                      data-original="#fff"
                    ></path>
                  </g>
                </svg>
              </Link>
            </p>
          </div>
          <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    ردیف
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    شماره تیکت
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    موضوع تیکت
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    دپارتمان پشتیبانی
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    تاریخ آخرین پیام
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    وضعیت تیکت
                  </th>
                  <th className="border-b border-blue-gray-50 py-3 px-6 ">
                    عملیات
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    1
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    765483
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    ارسال مدارک / اطلاعات
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    احراز هویت
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    ۷ آبان ۱۴۰۳ ساعت ۱۶:۰۸
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    در دست بررسی
                  </td>
                  <td className="py-3 px-5 border-b border-blue-gray-50 text-center">
                    جزئیات
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
