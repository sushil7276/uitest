import { IoShareSocialOutline } from "react-icons/io5";
import { MdArrowForward, MdArrowOutward } from "react-icons/md";

const ExamSchedulingCard = () => {
   return (
      <div
         className='p-4'
         style={{
            border: "2px solid #efefef",
            boxShadow: "0px 0px 0px 3px #ecf6ff",
            width: "23rem",
            borderRadius: "15px",
         }}
      >
         {/* Timing date Details Start */}
         <div className='d-flex justify-content-between'>
            <p
               className='rounded-pill px-3 py-1'
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
               className='rounded-pill px-3 py-1'
               style={{ border: "1px solid #d6d6d6", fontSize: "0.8rem" }}
            >
               Assignment
            </p>
         </div>
         <div className='d-flex justify-content-between position-relative'>
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

            <button className='arrow-btn'>
               <MdArrowForward className='arrow-icon' />
            </button>
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
         {/* Timing date Details End */}

         <hr style={{ margin: "-1rem 0" }} />

         {/* Subject Details Start */}
         <div
            className='d-flex justify-content-between'
            style={{ marginTop: "2rem" }}
         >
            <div
               className='text-start position-relative'
               style={{ width: "7rem" }}
            >
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "12px",
                     fontWeight: "400",
                  }}
               >
                  Title
               </p>

               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-10%",
                  }}
               >
                  Programming
               </p>

               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "12px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-10%",
                  }}
               >
                  Participants
               </p>
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-20%",
                  }}
               >
                  34
               </p>
            </div>

            <div
               className='text-start position-relative'
               style={{ width: "7rem", left: "-20%" }}
            >
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "12px",
                     fontWeight: "400",
                  }}
               >
                  Subject
               </p>

               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-10%",
                  }}
               >
                  Backend
               </p>

               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "12px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-10%",
                  }}
               >
                  Class
               </p>
               <p
                  className='lead'
                  style={{
                     color: "gray",
                     fontSize: "14px",
                     fontWeight: "400",
                     position: "relative",
                     top: "-20%",
                  }}
               >
                  TECH-3A
               </p>
            </div>
         </div>
         {/* Subject Details End */}

         <hr style={{ margin: "-1rem 0" }} />

         {/* Card Footer Start */}
         <div className='d-flex align-items-center justify-content-around mt-4'>
            <p
               style={{
                  fontSize: "0.8rem",
                  color: "blue",
                  marginTop: "1rem",
               }}
            >
               5 Hours 37 Minutes 18 Second
            </p>
            <button className='white-sm-btn'>
               <IoShareSocialOutline />
            </button>
            <button className='white-sm-btn' style={{ fontSize: "0.8rem" }}>
               Detail <MdArrowOutward style={{ fontSize: "1rem" }} />
            </button>
         </div>
         {/* Card Footer End */}
      </div>
   );
};

export default ExamSchedulingCard;
