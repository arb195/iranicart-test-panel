// import { convertKeysToCamelCase } from "./../Interceptors/case-convertors";
// import { EXPECTED_ERROR } from "@/constants/messages";
export const fetchInstance = async (path: string, options?: RequestInit) => {
  const modifiedOptions: RequestInit = {
    ...options,
    headers: options?.headers
  };

  try {
    const url = process.env.NEXT_PUBLIC_BASE_URL + path;

    const response = await fetch(url, modifiedOptions);
    if (!response.ok) {
      //   toast.error(EXPECTED_ERROR);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    // toast.error(EXPECTED_ERROR);
  }
};
