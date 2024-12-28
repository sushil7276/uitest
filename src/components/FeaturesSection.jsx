import ExamSchedulingCard from "./ExamSchedulingCard";

const FeaturesSection = () => {
   return (
      <section className='container d-flex flex-column justify-content-start align-items-center '>
         <div
            className='d-flex flex-column justify-content-start align-items-center mb-3 w-75'
            style={{ marginTop: "4rem" }}
         >
            <p className='text-uppercase text-primary mb-2 mt-2'>Features</p>
            <h2
               className='text-center fw-semibold'
               style={{ fontSize: "3rem" }}
            >
               Explore Our features for easily exam experience
            </h2>
            <p className='lead text-center mb-3 w-75' style={{ color: "gray" }}>
               Discover Seamless Exam Solution: Unblocking Effortless Assessment
               Experiences
            </p>
         </div>
         <div
            className='w-100 d-flex flex-column p-5'
            style={{
               border: "2px solid blue",
               borderRadius: "15px",
            }}
         >
            <div className='w-50 border-primary'>
               <h1 className='text-start' style={{ fontSize: "1.5rem" }}>
                  Automatically Exam scheduling
               </h1>
               <p
                  className='lead text-start w-75'
                  style={{ color: "gray", fontSize: "1rem", fontWeight: "400" }}
               >
                  Effortlessly Organize Your Exams: Simplify Scheduling
                  Automatically with Our Advanced Features.
               </p>
            </div>
            <div>
               <ExamSchedulingCard />
            </div>
         </div>
      </section>
   );
};

export default FeaturesSection;
