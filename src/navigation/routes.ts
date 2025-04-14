export const AUTH_ROUTES = {
  LOGIN: "Login",
  REGISTER: "Register",
} as const;
export const SETTING_ROUTES = {
  SETTING_STACK: "SettingStack",
  SETTING: "setting",
  TERMS_POLICY: "TermsAndPolicy",
} as const;

export type AuthStackParamList = {
  [AUTH_ROUTES.LOGIN]: undefined;
  [AUTH_ROUTES.REGISTER]: undefined;
  [SETTING_ROUTES.SETTING]: undefined;
};
export type SettingStackParamList = {
  [SETTING_ROUTES.SETTING]: undefined;
  [SETTING_ROUTES.SETTING]: undefined;
  [SETTING_ROUTES.TERMS_POLICY]: undefined;
};
