export default function IconCard({
  title,
  count,
  icon,
  iconColor,
}: {
  title: String;
  count: string;
  icon: string;
  iconColor: string;
}) {
  return (
    <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
      <div
        className={`${iconColor} bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr  text-white  shadow-lg absolute -mt-4 left-0 grid h-16 w-16 place-items-center p-2`}
        dangerouslySetInnerHTML={{ __html: icon }}
      ></div>
      <div className="p-4 text-right">
        <p className="block antialiased  text-sm leading-normal font-normal text-blue-gray-600">
          {title}
        </p>
        <h4 className="block antialiased tracking-normal  text-2xl font-semibold leading-snug text-blue-gray-900">
          {count}
        </h4>
      </div>
    </div>
  );
}
