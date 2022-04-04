import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './component/Blogs/Blogs';
// import Dashboard from './component/Dashboard/Dashboard';
import MyLineChart from './component/Dashboard/MyLineChart';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Review from './component/Review/Review';


function App() {
  return (
    <div className="App">
     <Header></Header>
   <Routes>

      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Review></ Review>}></Route>
      {/* <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route> */}
      <Route path='/dashboard' element={<MyLineChart></MyLineChart>}></Route>
      <Route path='/blogs'element={<Blogs></Blogs>}></Route>

      <Route path='/notfound'element={<NotFound></NotFound>}></Route>

   </Routes>
  

    </div>
  );
}

export default App;
