import Image from "next/image";
import Link from "next/link";
import TextArea from "../common/inputs/textarea";
import { useForm, Controller } from "react-hook-form";
import { TextAriaFormData } from "../../types/newTicketType";
import Select from "../common/inputs/select";

const options = [
  { value: "iran", label: "Iran" },
  { value: "usa", label: "USA" },
  { value: "japan", label: "Japan" },
];

export default function NewTicket() {
  const { control, handleSubmit } = useForm<TextAriaFormData>();

  const onSubmit = (data: TextAriaFormData) => {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-3 gap-4 h-full ">
      <div className="col-span-3 order-2 bg-gray-50 p-3 md:col-span-2 md:order-1">
        <h2 className="text-blue-500 font-bold mb-3">افزودن تیکت جدید</h2>
        <p className="text-gray-700 text-xs mb-5">
          کاربر گرامی ایرانیکارت چنانچه سوالی دارید می‌توانید با جستجو در قسمت
          سوالات متداول پاسخ اکثر سوالات خود را بیابید ، در صورتیکه به پاسخ مورد
          نظر خود دست نیافتید می‌توانید از طریق ارسال تیکت به دپارتمان مربوطه با
          کارشناسان ایرانیکارت در ارتباط باشید.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="departments">انتخاب دسته بندی (در دپارتمان)</label>

            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <Select options={options} id="department" {...field} />
              )}
            />
          </div>
          <div className="flex flex-col gap-3 text-xs font-bold mb-4">
            <label htmlFor="subjects">موضوع پیام ارسالی</label>

            <Controller
              name="subjects"
              control={control}
              render={({ field }) => (
                <Select options={options} id="subjects" {...field} />
              )}
            />
          </div>
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
            width={80}
            height={80}
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
