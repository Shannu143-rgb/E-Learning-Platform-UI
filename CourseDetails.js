import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava,faReact,faJs,faCss3,faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faBrain,faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";

function CourseDetails(){

    const courseData={
        1:{
            name:"Java",
            title:"Java for Beginners",
            icon:faJava,
            description:[
                "In this Course you will learn:",
                "Introduction to Java",
                "Object-Orientated Programming(OOP)",
                "Exception Handling &",
                "Multithreading and File Handling",
            ],
            videoUrl:"https://www.youtube.com/embed/eIrMbAQSU34",
            price:"₹1199",
        },
        2:{
            name:"AI",
            title:"Artificial Intelligence Basics",
            icon:faBrain,
            description:[
                "In this Course you will learn:",
                "Introduction to AI & Machine Learning",
                "Neural Networks & Deep Learning",
                "Natural Language Processing",
                "AI Applications in Real World",
              ],
              videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
              price: "₹1499",
        },
        3:{ 
            name:"ML",
            title: "Machine Learning Fundamentals",
            icon:faBrain,
            description: [
              "In this Course you will learn:",
              "Supervised vs Unsupervised Learning",
              "Regression and Classification Models",
              "Deep Learning with TensorFlow",
              "Real-World ML Projects",
            ],
            videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
            price: "₹1599",
          },
          4: {
            name:"HTML",
            title: "HTML Crash Course",
            icon:faHtml5,
            description: [
              "In this Course you will learn:",
              "HTML Basics & Structure",
              "Forms & Tables",
              "Semantic HTML",
              "Building a Simple Webpage",
            ],
            videoUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
            price: "₹499",
          },
          5: {
            name:"CSS",
            title: "CSS for Web Developers",
            icon:faCss3,
            description: [
              "In this Course you will learn:",
              "CSS Basics & Selectors",
              "Flexbox & Grid",
              "CSS Animations & Transitions",
              "Responsive Design Techniques",
            ],
            videoUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
            price: "₹799",
          },
          6: {
            name:"React",
            title: "React JS Mastery",
            icon:faReact,
            description: [
              "In this Course you will learn:",
              "React Basics & JSX",
              "State & Props Management",
              "React Hooks & Context API",
              "Building Scalable React Apps",
            ],
            videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            price: "₹1299",
          },
          7: {
            name:"JavaScript",
            title: "JavaScript Essentials",
            icon:faJs,
            description: [
              "In this Course you will learn:",
              "JS Basics & ES6 Features",
              "DOM Manipulation & Events",
              "Asynchronous JavaScript & APIs",
              "Building Projects with JS",
            ],
            videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
            price: "₹999",
          },
          8: {
            name:"DSA",
            title: "Data Structures & Algorithms",
            icon:faDatabase,
            description: [
              "In this Course you will learn:",
              "Arrays, Linked Lists, Stacks & Queues",
              "Recursion & Dynamic Programming",
              "Sorting & Searching Algorithms",
              "Graph & Tree Data Structures",
            ],
            videoUrl: "https://www.youtube.com/embed/8hly31xKli0",
            price: "₹1399",
          },
        };

    const {id}=useParams();
    const course=courseData[id];
    
      const [progress, setProgress] = useState(0);
      const [isEligible,setIsEligible] = useState(false);

      useEffect(() => {
        const savedProgress = localStorage.getItem(`progress_${id}`);
        if (savedProgress){
          const progressValue=parseInt(savedProgress);
          setProgress(progressValue>=90?100:progressValue);
          if(progressValue>=90) setIsEligible(true);
        }
       }, [id])

      const updateProgress = () => {
        let newProgress = Math.min(progress + 10, 100);
        if(newProgress>=90){
          newProgress=100;
          setIsEligible(true);
        }
        setProgress(newProgress);
        localStorage.setItem(`progress_${id}`, newProgress);
      };
    
  
    return(
        <div className="courses-container">
          <div className="name-icon">
            <h1>{course.name}</h1>
            <FontAwesomeIcon icon={course.icon} className="icon"/>
          </div>
            <h2 className="title">{course.title}</h2>
            <h3 className="description">Description:</h3>

             <ul>
                {course.description.map((point,index)=>(
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <h3 className="preview">Course Preview:</h3>
            <div className="video">
              <iframe
                  width="560"
                  height="315"
                  src={course.videoUrl}
                  title="Course Video"
                  
                  frameBorder="0"
                  allowFullScreen>
              </iframe>
            </div>
          
           <div style={{ textAlign: "center", padding: "20px" }}>
              <h2>Course Progress: {progress}%</h2>
              <progress value={progress} max="100" style={{ width: "80%" }}></progress>
              <br />


          <button onClick={updateProgress} style={{ marginTop: "10px" }}>
            Complete Lesson
          </button>

          <p>Get Certificate</p>
          <button 
          disabled={!isEligible}
          onClick={Enroll}
          style={{
            padding:"10px 20px",
            background:isEligible?"#28a745":"#ccc",
            color:"white",
            border:"none",
            cursor:isEligible?"pointer":"not-allowed",
          }}>Enroll Now:{course.price}</button>
        
        </div>
      </div>
    )
    function Enroll(){
      alert("get certificate by enroll..")
    }
  }



export default CourseDetails
