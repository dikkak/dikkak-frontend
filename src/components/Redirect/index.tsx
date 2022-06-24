import React from 'react';
import { useLocation } from 'react-router-dom';
import { authLogin } from '../../apis/auth_login';


const Redirect = () => {
  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const location = useLocation();
  switch(location.pathname) {
    case '/auth/kakao/callback':
      authLogin('kakao', code || "")
      .then(res => console.log(res.data));
      break;
    case '/oauth/google/callback':
      authLogin('google', code || "")
      .then(res => console.log(res.data));
      break;
    case '/oauth/facebook/callback':
      console.log(code);
      break;
  }
  return (
    <div>
      
    </div>
  );
};

export default Redirect;