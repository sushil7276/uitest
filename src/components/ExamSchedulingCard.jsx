import { IoMdArrowForward } from "react-icons/io";

const ExamSchedulingCard = () => {
   return (
      <div
         className='p-4'
         style={{ border: "2px solid black", maxWidth: "23rem" }}
      >
         <div className='d-flex justify-content-between'>
            <p
               className='rounded-pill px-2 py-1'
               style={{
                  backgroundColor: "#d0e1ff",
                  fontSize: "0.8rem",
                  border: "2px solid #d0e1ff",
                  color: "blue",
               }}
            >
               Running
            </p>
            <p
               className='rounded-pill px-2 py-1'
               style={{ border: "2px solid gray", fontSize: "0.8rem" }}
            >
               Assignment
            </p>
         </div>
         <div className='d-flex justify-content-between'>
            <div className='text-start' style={{ position: "relative" }}>
               <p
                  className='lead'
                  style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}
               >
                  Start
               </p>
               <h1
                  style={{
                     fontSize: "2rem",
                     position: "relative",
                     top: "-1rem",
                  }}
               >
                  10:00
               </h1>
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-1.6rem",
                     width: "6rem",
                  }}
               >
                  Tue, 16 Mar
               </p>
            </div>
            <div className='arrow'>
               <button className='arrow-btn'>
                  <IoMdArrowForward />
               </button>
            </div>
            <div className='text-end' style={{ position: "relative" }}>
               <p
                  className='lead'
                  style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}
               >
                  Start
               </p>
               <h1
                  style={{
                     fontSize: "2rem",
                     position: "relative",
                     top: "-1rem",
                  }}
               >
                  10:00
               </h1>
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-1.6rem",
                     width: "6rem",
                  }}
               >
                  Tue, 16 Mar
               </p>
            </div>
         </div>
      </div>
   );
};

export default ExamSchedulingCard;
