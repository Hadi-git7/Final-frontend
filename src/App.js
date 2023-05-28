import './App.css';
import Home from './Pages/Home/Home'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserLayout from './Pages/userLayout';
import Activity from './Pages/Activity/Activity'
import Blog from './Pages/Blog/Blog'
import Resource from './Pages/Resource/Resource'
import Overview from './Pages/Overview/Overview'
import Login from './Pages/Login/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route  element={<UserLayout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/activity' element={<Activity/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/resource' element={<Resource/>} />
      <Route path='/overview' element={<Overview/>} />
    </Route>
    <Route path='/login' element={<Login/>} />
    <Route path='/dashboard/*' element={<Dashboard/>} />

   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
