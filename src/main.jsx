import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from "@material-tailwind/react";
// import Overview from './components/Overview/Overview.jsx';
// import Courses from './components/Courses/Courses.jsx';
// import Users from './components/Users/Users.jsx';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Forums from './components/Forums/Forums.jsx';
// import Rewards from './components/Rewards/Rewards.jsx';
// import Announcements from './components/Announcements/Announcements.jsx';
// import Support from './components/Support/Support.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/Overview",
//     element: <Overview/>,
//   },
//   {
//     path: "/Courses",
//     element: <Courses />,
//   },
//   {
//     path: "Users",
//     element: <Users />,
//   },
//   {
//     path: "Forums",
//     element: <Forums />,
//   },
//   {
//     path: "Rewards",
//     element: <Rewards />,
//   },
//   {
//     path: "Announcements",
//     element: <Announcements />,
//   },
//   {
//     path: "Support",
//     element: <Support />,
//   },

// ]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
