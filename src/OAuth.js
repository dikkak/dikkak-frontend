const KAKAO_API_KEY = process.env.REACT_APP_KAKAO_API_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const FACEBOOK_API_KEY = process.env.REACT_APP_FACEBOOK_API_KEY;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
const FACEBOOK_REDIRECT_URI = process.env.REACT_APP_FACEBOOK_REDIRECT_URI;
const LOGOUT_REDIRECT_URI = process.env.REACT_APP_KAKAO_LOGOUT_REDIRECT_URI;

// eslint-disable-next-line no-useless-concat
const google_scope =  "https://www.googleapis.com/auth/userinfo.email " + "https://www.googleapis.com/auth/userinfo.profile";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
export const KAKAO_AUTH_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${KAKAO_API_KEY}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_API_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=${google_scope}`;
export const FACEBOOK_AUTH_URL = `https://www.facebook.com/v14.0/dialog/oauth?client_id=${FACEBOOK_API_KEY}&redirect_uri=${FACEBOOK_REDIRECT_URI}&response_type=code&scope=email`