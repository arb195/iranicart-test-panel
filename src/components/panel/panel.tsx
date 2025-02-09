"use client";
import HeaderPanel from "./headerPanel/headerPanel";
import SidebarPanel from "./sidebarPanel/sidebarPanel";

export default function Panel({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allTicket: string = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 682.667 682.667" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><defs><clipPath id="a" clipPathUnits="userSpaceOnUse"><path d="M0 512h512V0H0Z" fill="#ffffff" opacity="1" data-original="#000000"></path></clipPath></defs><path d="M0 0v-32.133" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 469.867 491.29)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="M0 0h192.8" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 105.689 469.867)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="M0 0h96.4" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 105.689 555.556)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 22.726-22.727" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 422.898 229.466)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 54.521 54.521" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="matrix(1.33333 0 0 -1.33333 259.32 362.755)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)"><path d="M0 0a32.1 32.1 0 0 1-9.415 22.719 32.097 32.097 0 0 1-22.719 9.415h-80.333C-130.212 32.134-144.6 17.746-144.6 0a32.1 32.1 0 0 1-9.415 22.719 32.096 32.096 0 0 1-22.718 9.415h-273.133a32.097 32.097 0 0 1-22.719-9.415A32.1 32.1 0 0 1-482 0v-160.666a32.1 32.1 0 0 1 9.415-22.719 32.097 32.097 0 0 1 22.719-9.415h273.133a32.096 32.096 0 0 1 22.718 9.415 32.1 32.1 0 0 1 9.415 22.719c0-17.746 14.388-32.134 32.133-32.134h80.333a32.097 32.097 0 0 1 22.719 9.415A32.1 32.1 0 0 1 0-160.666z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(497 207.8)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path><path d="m0 0 145.412 145.403a32.09 32.09 0 0 0 22.718 9.415 32.122 32.122 0 0 0 22.719-9.407c-12.548 12.548-12.548 32.889 0 45.437l56.803 56.803a32.126 32.126 0 0 0 22.726 9.415 32.096 32.096 0 0 0 22.719-9.415 760525.78 760525.78 0 0 0 113.607-113.607 32.129 32.129 0 0 0 0-45.444L349.9 31.796c-12.547-12.548-32.888-12.548-45.436 0A32.123 32.123 0 0 0 312.562 0h-8.91c-17.745 0-32.132-14.388-32.132-32.134a32.098 32.098 0 0 1-9.416 22.719A32.096 32.096 0 0 1 239.386 0Z" style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1" transform="translate(80.88 239.934)" fill="none" stroke="#ffffff" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class="" opacity="1"></path></g></g></svg>`;

  return (
    <div className="min-h-screen text-black">
      
        <SidebarPanel />
      
      <div className="p-4 xl:mr-80">
        <HeaderPanel />

        {children}

        <div className="text-blue-gray-600">
          <footer className="py-2">
            <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
              <p className="block antialiased  text-sm leading-normal font-normal text-inherit">
                made with{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="-mt-0.5 inline-block h-3.5 w-3.5"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>{" "}
                in iranicart
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
