import { AiFeatureCard } from "./AiFeatureCard";
import generateImg from "../assets/generateImg.png";
import scanningImg from "../assets/scanningImg.png";
import resultImg from "../assets/resultImg.png";

const AiFeatureSection = () => {
   return (
      <div
         className='container d-flex justify-content-center align-items-center p-5'
         style={{ marginTop: "-20rem" }}
      >
         <div className='d-flex flex-wrap justify-content-between gap-4 w-100'>
            <AiFeatureCard
               title={"Generate Questions & Answer"}
               description={
                  "Ai-Powered Exam Creation: Effortless Generate Questions and Answers with Our Advanced Artificial Intelligence Platform"
               }
               image={generateImg}
            />
            <AiFeatureCard
               title={"Analysist Exam Result"}
               description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum eius nihil officia quaerat architecto omnis amet reprehenderit quia dolorem?"
               }
               image={scanningImg}
            />
            <AiFeatureCard
               title={"Scanning Document Summary"}
               description={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum eius nihil officia quaerat architecto omnis amet reprehenderit quia dolorem?"
               }
               image={resultImg}
            />
         </div>
      </div>
   );
};

export default AiFeatureSection;
