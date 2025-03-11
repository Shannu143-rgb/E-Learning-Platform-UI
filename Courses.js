import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava,faReact,faJs,faCss3,faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBrain,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const courses=[
    {id:1,name:"Java",icon:faJava,price:"$30"},
    {id:2,name:"AI",icon:faBrain,price:"$45"},
    {id:3,name:"ML",icon:faBrain,price:"$40"},
    {id:4,name:"HTML",icon:faHtml5,price:"$35"},
    {id:5,name:"CSS",icon:faCss3,price:"$30"},
    {id:6,name:"React",icon:faReact,price:"$45"},
    {id:7,name:"JavaScript",icon:faJs,price:"$35"},
    {id:8,name:"DSA",icon:faDatabase,price:"$50"}
]
function Courses(){
    const navigate=useNavigate();

    const handlecourse=(id)=>{
        navigate(`/courses/${id}`);
    }

    return(
        <>
        <h2>Happy Learning 😊</h2>
        <div className="course-wrapper">
            <div className="course-container">
                {courses.map((course)=>(
                    <div key={course.id} className="course" onClick={()=>handlecourse(course.id)}>
                        <FontAwesomeIcon icon={course.icon} className="course-icon"/>
                        <p>{course.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}


export default Courses
