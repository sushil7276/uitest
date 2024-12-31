import webImg from "../assets/mid-Image.png";
import { LuSquare } from "react-icons/lu";

const MainStartSection = () => {
   return (
      <section
         className='text-center'
         style={{
            height: "60rem",
            overflow: "hidden",
            background:
               "linear-gradient(0deg, rgba(77, 127, 194,1) 0%, rgba(255,255,255,0) 44%)",
            borderRadius: "15px",
         }}
      >
         <div className='container d-flex flex-column justify-content-start align-items-center'>
            <p className='text-uppercase text-primary mb-2 mt-2'>
               Product & Management Exam Tool
            </p>
            <h2 className='display-2 fw-bold'>
               An AI-powered solution for online exam challenges.
            </h2>
            <p className='lead text-center mb-3 w-75' style={{ color: "gray" }}>
               This platform is optimized for educators and students, offering
               efficiency, accuracy, and user-friendliness, making it ideal for
               the digital era.
            </p>
            <div
               className='d-flex justify-content-center align-items-center gap-3 mb-5'
               style={{ marginTop: "3rem" }}
            >
               <button className='black-btn'>
                  <span style={{ fontSize: "1.2rem", margin: "10px" }}>
                     <LuSquare />
                  </span>
                  Sign up for free
               </button>
               <button className='white-btn'>See Exam.io in action</button>
            </div>

            {/* Mid Image */}
            <img
               src={webImg}
               alt='webImg'
               style={{
                  objectFit: "contain",
                  borderRadius: "15px",
               }}
            />
         </div>
      </section>
   );
};

export default MainStartSection;
