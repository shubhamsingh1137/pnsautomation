import { Children } from "react";
import About from "../About/About";
import Contact from "../Contactus/Contact";
import Sidebar from "../Dashboard/Sidebar";
import Gallery from "../Gallery/Gallery";
import Login from "../Header/Login";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";

import DashboardLayout from "../Dashboard/Dashboardlayout";
import All_student from "../Dashboard/student_management/All_student";
import Enrolled from "../Dashboard/student_management/Enrolled";
import Add_student from "../Dashboard/student_management/Add_student";
import Add_course from "../Dashboard/course_management/Add_course";
import All_course from "../Dashboard/course_management/All_course";
import Course_setting from "../Dashboard/course_management/Course_setting";
import Schedule_live from "../Dashboard/Live_recorded_class/Schedule_live";
import Upload_video from "../Dashboard/Live_recorded_class/Upload_video";
import Join_link from "../Dashboard/Live_recorded_class/Join_link";
import Attendance from "../Dashboard/Live_recorded_class/Attendance";
import Allpayment from "../Dashboard/payment/Allpayment";
import Pendingpayment from "../Dashboard/payment/Pendingpayment";
import Refundpayment from "../Dashboard/payment/Refundpayment";
import Reportpayment from "../Dashboard/payment/Reportpayment";
import Uploadassignment from "../Dashboard/Assignment&test/Uploadassignment";
import Student_submission from "../Dashboard/Assignment&test/Student_submission";
import Createquiz from "../Dashboard/Assignment&test/Createquiz";

export const routes = [
  {
    id: 1,
    element: <Home />,
    path: "/",
    Layout: false,
  },
  {
    id: 2,
    element: <About />,
    path: "/about",
    Layout: true,
  },
  {
    id: 3,
    element: <Contact />,
    path: "/contact",
    Layout: true,
  },
  {
    id: 4,
    element: <Gallery />,
    path: "/gallery",
    Layout: true,
  },
  {
    id: 5,
    element: <Login />,
    path: "/login",
    Layout: false,
  },
  {
    id: 6,
    element: <Sidebar />,
    path: "/sidebar",
    Layout: false,
  },
  {
    id: 7,
    path: "/dashboard",
    element: <DashboardLayout />,
    Layout: false,
    children: [
      {
        id: 71,
        path: "students/all",
        element: <All_student />,
      },
      {
        id: 72,
        path: "students/enrolled",
        element: <Enrolled />,
      },
      {
        id: 73,
        path: "students/add",
        element: <Add_student />,
      },
      {
        id: 74,
        path: "/dashboard/courses/add",
        element: <Add_course />,
      },
      {
        id: 75,
        path: "/dashboard/courses/all",
        element: <All_course />,
      },
      {
        id: 76,
        path: "/dashboard/courses/settings",
        element: <Course_setting />,
      },
      {
        id: 77,
        path: "/dashboard/classes/schedule",
        element: <Schedule_live />,
      },
      {
        id: 78,
        path: "/dashboard/classes/upload",
        element: <Upload_video />,
      },
      {
        id: 79,
        path: "/dashboard/classes/join-links",
        element: <Join_link />,
      },
      {
        id: 80,
        path: "/dashboard/classes/attendance",
        element: <Attendance />,
      },
      {
        id: 81,
        path: "/dashboard/payments/all",
        element: <Allpayment />,
      },
      {
        id: 82,
        path: "/dashboard/payments/pending",
        element: <Pendingpayment />,
      },
      {
        id: 83,
        path: "/dashboard/payments/refunds",
        element: <Refundpayment />,
      },
      {
        id: 84,
        path: "/dashboard/payments/reports",
        element: <Reportpayment />,
      },
      {
        id: 85,
        path: "/dashboard/assignments/upload",
        element: <Uploadassignment />,
      },
      {
        id: 86,
        path: "/dashboard/assignments/submissions",
        element: <Student_submission />,
      },
      {
        id: 87,
        path: "/dashboard/assignments/quiz",
        element: <Createquiz />,
      },
    ],
  },
];
