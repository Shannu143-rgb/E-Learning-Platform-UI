import { BrowserRouter as Router,Routes,Route } from 'react-router';
import CourseDetails from "./CourseDetails";
import Dashboard from './Dashboard';
import CreateAccount from './CreateAccount';
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";

function App() {
  
  return (
    <div>
    <Router>
      <Routes>
         <Route path="/" element={<Dashboard/>}/> 
         <Route path="/createaccount" element={<CreateAccount/>}/>
        <Route path="/aboutus" element={<About/>}/> 
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/courses/:id" element={<CourseDetails/>}/>
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
    </Router>

    </div>
  );
}

export default App;
