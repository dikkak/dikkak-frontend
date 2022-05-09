import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import FindAccount from "./pages/FindAccount";
import EmailSignUp1 from './pages/EmailSignUp1';
import EmailSignUp2 from './pages/EmailSignUp2';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findAccount" element={<FindAccount />} />
        <Route path="/email_signup1" element={<EmailSignUp1 />} />
        <Route path="/email_signup2" element={<EmailSignUp2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
