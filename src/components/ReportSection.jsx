import { IoArrowForward } from "react-icons/io5";
import reportImg from "../assets/reportImg.png";

const ReportSection = () => {
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
         <div
            style={{
               padding: "50px",
               background:
                  "linear-gradient(0deg, rgb(77, 127, 194) 0%, rgb(254, 254, 254) 70%)",
               borderRadius: "1rem",
            }}
         >
            <img
               src={reportImg}
               alt='Detail Feature Image'
               height={500}
               width={480}
            />
         </div>
         <div>
            <p className='text-uppercase text-primary'>Make Report Feature</p>
            <h2 style={{ fontSize: "3rem" }}>
               Streamlining Online Exam Reports for Students
            </h2>
            <p>
               Facilitating Student Progress Tracking: This feature streamlines
               the generation of comprehensive exam reports for students,
               ensuring quick access to detailed performance summaries.
            </p>
            <button className='black-btn'>
               Explore More
               <span style={{ fontSize: "1.2rem", margin: "10px" }}>
                  <IoArrowForward />
               </span>
            </button>
         </div>
      </div>
   );
};

export default ReportSection;
