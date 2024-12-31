import questionImg from "../assets/questionImg.png";
import { IoArrowForward } from "react-icons/io5";

const QuestionGenerationSection = () => {
   return (
      <div
         className='container'
         style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "120px",
            margin: "90px auto",
            alignItems: "center",
         }}
      >
         <div>
            <p className='text-uppercase text-primary'>
               Question Customization Generator
            </p>
            <h2 style={{ fontSize: "3rem" }}>
               An effective question maker and easily customization
            </h2>
            <p>
               An effective question maker allows users to create diverse exam
               questions swiftly, while offering easy customization options.
            </p>
            <button className='black-btn'>
               Explore More
               <span style={{ fontSize: "1.2rem", margin: "10px" }}>
                  <IoArrowForward />
               </span>
            </button>
         </div>
         <div
            style={{
               padding: "50px",
               background:
                  "linear-gradient(0deg, rgb(77, 127, 194) 0%, rgb(254, 254, 254) 70%)",
               borderRadius: "1rem",
            }}
         >
            <div
               style={{
                  padding: "1rem",
                  backgroundColor: "white",
                  borderRadius: "15px",
               }}
            >
               <img
                  src={questionImg}
                  alt='Detail Feature Image'
                  height={500}
                  width={480}
               />
            </div>
         </div>
      </div>
   );
};

export default QuestionGenerationSection;
