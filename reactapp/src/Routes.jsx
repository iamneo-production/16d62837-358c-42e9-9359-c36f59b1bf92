import { Routes,Route} from "react-router-dom";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Appbars from './Homepage'
import MyLearning from "./MyLearning";
import Livesession from "./Livesession";
import Certificates from "./Certificates";
import Course from "./Coursee";
import About from "./About";
import Checkout from "./Checkout";
import PaymentForm from './Payment'
import { BrowserRouter } from "react-router-dom";
import Review from "./review";
import Time from "./Livesession";
import Profile from "./Profile";
import FeedForm from "./feedback";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/Signup' element={<Signup/>}/>
                <Route path='/Homepage'element={<Appbars/>} />
                <Route path='/MyLearning'element={<MyLearning/>} />
                <Route path='/Course'element={<Course/>} />
                {/* <Route path='/Livesession'element={<Livesession/>} /> */}
                <Route path='/Certificates'element={<Certificates/>} />
                {/* <Route path='/blog'element={<Blog/>} /> */}
                <Route path='/About'element={<About/>} />
                <Route path='/Checkout'element={<Checkout/>} />
                <Route path='/Payment' element={< PaymentForm/>} />
                <Route path='/Review' element={< Review/>} />
                {/* <Route path='/' element={< PaymentForm/>} /> */}
                {/* <Route path='/Orders' element={<Orders/>} /> */}
                <Route path='/Profile' element={<Profile/>} />
               
                <Route path='/feed' element={<FeedForm/>}/>


            </Routes>
        </BrowserRouter>    
    );
}
export default App;
