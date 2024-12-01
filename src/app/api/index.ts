import { fetchCaptchaKeyType } from "@/types/loginType";
import { fetchInstance } from "@/utils/fetchConf";
import { useQuery } from "@tanstack/react-query";

const fetchCaptchaKey = async (): Promise<{
  data: fetchCaptchaKeyType;
}> => {
  const response = await fetchInstance(`/api/v1/captcha`);

  return response;
};

export const useLoginQuery = () => {
  return useQuery({
    queryKey: ["captchaKey"],
    queryFn: fetchCaptchaKey,
  });
};
