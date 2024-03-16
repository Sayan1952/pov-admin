import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Courses from './components/Courses/Courses';
import Users from './components/Users/Users';
import Forums from './components/Forums/Forums';
import Rewards from './components/Rewards/Rewards';
import Announcements from './components/Announcements/Announcements';
import Support from './components/Support/Support';
import Overview from './components/Overview/Overview';
import Settings from './components/Settings/Settings';
import Sidebar from './components/Sidebar/Sidebar';
import ManageCourse from './components/ManageCourse/ManageCourse';


function App() {
  return (
    <Router>
    <div className='flex'>
    <Sidebar/>
    <div className='flex-1'>
    <Routes>
    <Route path="/Overview" element={<Overview/>} />
    <Route path="/Courses" element={<Courses/>} />
    <Route path="/Users" element={<Users/>} />
    <Route path="/Forums" element={<Forums/>} />
    <Route path="/Rewards" element={<Rewards/>} />
    <Route path="/Announcements" element={<Announcements/>} />
    <Route path="/Settings" element={<Settings/>} />
    <Route path="/Support" element={<Support/>} />
    <Route path="/ManageCourse" element={<ManageCourse/>} />
    </Routes>
    </div>
    </div>
    </Router>


    // <div>
    //   <Sidebar/>
    // </div>
  );
}

export default App;




//</div> function App() {
//   return (
//     <div>
//       <Layout/>
//       <Outlet></Outlet>
//     </div>
      
    
//   );
// }