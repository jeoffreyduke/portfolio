import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDfIxVvByC1W-JEdOqIkYmtcpL_Iy3IJK4",
  authDomain: "jeoffreyduke.firebaseapp.com",
  databaseURL: "https://jeoffreyduke-9978a-default-rtdb.firebaseio.com",
  projectId: "jeoffreyduke-9978a",
  storageBucket: "jeoffreyduke-9978a.appspot.com",
  messagingSenderId: "529434014681",
  appId: "1:529434014681:web:ba638356f0b7b604ce9fc8",
  measurementId: "G-BL97905Z09",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
