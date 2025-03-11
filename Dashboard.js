import {Link, useNavigate} from 'react-router-dom';
function Dashboard(){
const navigate=useNavigate();
    return(
        <>
            <div className='background'>
                <nav className="navbar">
                    <div className="logo">E-Learning</div>
                    <ul className="nav_links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">AboutUs</Link></li>
                        <li><Link to="/createaccount">Courses</Link></li>
                        <li><Link to="/contact">Contact</Link></li>

                    </ul>
                </nav>
                
                <div className="container">
                    <h1>Welcome to Our E-learning Platform</h1>
                    <p>Learn and grow with the best online Courses</p>
                    <button className="explore-btn" onClick={()=>navigate("/createaccount")}>Explore Courses</button>
                </div>
            </div>
        </>
    )
}
export default Dashboard
