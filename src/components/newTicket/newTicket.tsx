import Image from "next/image";
import Link from "next/link";

export default function NewTicket() {
  return (
    <div className="grid grid-cols-3 gap-4 h-full ">
      <div className="col-span-3 order-2 md:col-span-2 md:order-1">
        <h2 className="text-blue-500 font-bold mb-3">افزودن تیکت جدید</h2>
        <p className="text-gray-700 text-xs mb-5">
          کاربر گرامی ایرانیکارت چنانچه سوالی دارید می‌توانید با جستجو در قسمت
          سوالات متداول پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد
          نظر خود دست نیافتید می‌توانید از طریق ارسال تیکت به دپارتمان مربوطه با
          کارشناسان ایرانیکارت در ارتباط باشید.
        </p>

        <form action="">
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="departments">انتخاب دسته بندی (در دپارتمان)</label>

            <select
              className="font-normal p-3"
              name="department"
              id="departments"
            >
              <option value="identity">احراز هویت</option>
              <option value="carts">کارت ها</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="subjects">موضوع پیام ارسالی</label>

            <select className="font-normal p-3" name="subject" id="subjects">
              <option value="help">پیگیری درخواست</option>
              <option value="change">اعمات تغییرات در پنل</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="desc">توضیحات ( متن پیام ارسالی )</label>

            <textarea
              className="border"
              name="description"
              id="desc"
              rows={10}
            ></textarea>
          </div>

          <button className="bg-blue-700 text-white py-3 px-7 rounded-sm">
            ارسال تیکت
          </button>
        </form>
      </div>
      <div className="col-span-3 order-1 bg-blue-50 p-5 md:col-span-1 md:order-2">
        <h2 className="text-xl text-blue-700 font-bold mb-5">
          قبل از ارسال تیکت
        </h2>
        <p className="text-sm mb-7">
          کاربر گرامی ایرانیکارت چنانچه سوالی دارید می‌توانید با جستجو در قسمت
          سوالات متداول پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد
          نظر خود دست نیافتید می‌توانید از طریق ارسال تیکت به دپارتمان مربوطه با
          کارشناسان ایرانیکارت در ارتباط باشید.
        </p>
        <div className="flex flex-col items-center justify-center gap-3">
          <Image
            src="/imgs/folder.png"
            width={125}
            height={125}
            alt="Picture of the author"
          />
          <span className="text-xs font-bold">
            پاسخ سوال خود را از اینجا پیدا کنید
          </span>
          <Link
            href="/faq"
            className="bg-blue-700 rounded-xl px-3 py-1 text-white"
          >
            سوالات متداول
          </Link>
        </div>
      </div>
    </div>
  );
}
