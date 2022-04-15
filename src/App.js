import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import MyLineChart from './component/Dashboard/MyLineChart';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Review from './component/Review/Review';
import SignUp from './component/SignUp/SignUp';


function App() {
  return (
    <div className="App">
     <Header></Header>
   <Routes>

      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Review></ Review>}></Route>
      <Route path='/dashboard' element={<MyLineChart></MyLineChart>}></Route>
      <Route path='/blogs'element={<Blogs></Blogs>}></Route>
      <Route path='/about'element={<About></About>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='*'element={<NotFound></NotFound>}></Route>

   </Routes>
  

    </div>
  );
}

export default App;
