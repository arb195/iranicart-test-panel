export type InputsLogin = {
  user: string;
  pass: string;
};

export type fetchCaptchaKeyType = {
  key: string;
  sensitive: boolean;
  is_active: boolean;
  img: string;
};
