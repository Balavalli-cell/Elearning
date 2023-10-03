import React, { Suspense } from "react";
// import ReactDOM from "react-dom";
import {createRoot} from 'react-dom/client';
import "./assets/scss/style.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter,Route, Routes } from "react-router-dom";
import Loader from "./layouts/loader/Loader";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const LoginPage = React.lazy(() => import('../src/views/ui/Login/LoginPage'))
const SignupPage = React.lazy(() => import('../src/views/ui/Signup/SignupPage') )
const Forgotpage = React.lazy(()=> import('../src/views/ui/Forgot/Forgotpage'))
const Reset = React.lazy(()=> import("../src/views/ui/Reset/Reset"))
const Page6 =React.lazy(()=> import("../src/views/ui/CoursePages/Page6"))
const Page7 =React.lazy(()=> import("../src/views/ui/CoursePages/Page7"))
const Page8 =React.lazy(()=> import("../src/views/ui/CoursePages/Page8"))
const Page9 =React.lazy(()=> import("../src/views/ui/CoursePages/Page9"))
const Page10 =React.lazy(()=> import("../src/views/ui/CoursePages/Page10"))
const Page11=React.lazy(()=> import("../src/views/ui/CoursePages/Page11"))
const Landing=React.lazy(()=> import("../src/views/ui/Landing/Landing"))
root.render(
  <Suspense fallback={<Loader />}>
    <HashRouter>
      <Routes>
       <Route exact path="/" name="landing" element={<Landing />} />  //Landing Page
      <Route exact path="/LoginPage" name="Login Page" element={<LoginPage />} />
      <Route exact path="/SignupPage" name="Signup Page" element={<SignupPage />} />
      <Route exact path="/Forgotpage" name="Forgot page" element={<Forgotpage />} />
      <Route exact path="/Reset" name="Reset" element={<Reset />} />
      <Route exact path="/page6" name="page6" element={<Page6 />} />
      <Route exact path="/page7" name="page7" element={<Page7 />} />
      <Route exact path="/page8" name="page8" element={<Page8 />} />
      <Route exact path="/page9" name="page9" element={<Page9 />} />
      <Route exact path="/page10" name="page10" element={<Page10 />} />
      <Route exact path="/page11" name="page11" element={<Page11 />} />
      
      </Routes>
      <App />
    </HashRouter>
  </Suspense>,

  // document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
