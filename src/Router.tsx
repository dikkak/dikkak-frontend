import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import FindAccount from "./pages/FindAccount";
import EmailSignUp1 from "./pages/EmailSignUp1";
import EmailSignUp2 from "./pages/EmailSignUp2";
import SignUp from "./pages/SignUp";
import Start from "./pages/Start";
import ClientWorkPage from "./pages/ClientWork";
import DesignerWorkPage from "./pages/DesignerWork";
import Redirect from "./components/Redirect";
import WorkSpaceClient from "./pages/WorkSpace_client";
import JobChoice from "./components/JobChoice";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/findAccount" element={<FindAccount />} />
        <Route path="/email_signup1" element={<EmailSignUp1 />} />
        <Route path="/email_signup2" element={<EmailSignUp2 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/service_start" element={<Start />} />
        <Route path="/client_workspace1" element={<ClientWorkPage />} />
        <Route path="/designer_workspace1" element={<DesignerWorkPage />} />
        // 작업실 라우팅
        <Route path="/workspace_client" element={<WorkSpaceClient />} />
        //
        <Route
          path="/auth/kakao/callback" //http://localhost:3000//auth/kakao/callback
          element={<Redirect />}
        />
        <Route
          path="/oauth/google/callback" //http://localhost:3000//oauth/google/callback
          element={<Redirect />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
