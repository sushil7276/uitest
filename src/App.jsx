import Navbar from "./components/Navbar";
import MainStartSection from "./components/MainStartSection";
import LogoSection from "./components/LogoSection";
import FeaturesSection from "./components/FeaturesSection";
import ReportSection from "./components/ReportSection";
import QuestionGenerationSection from "./components/QuestionGenerationSection";

const App = () => {
   return (
      <div className='w-100 d-flex flex-column'>
         <Navbar />
         <div
            className='container-xl'
            style={{
               borderRadius: "10px",
               // backgroundColor: "lightcyan",
            }}
         >
            {/* Header Section */}

            {/* Hero Section */}
            <MainStartSection />
         </div>

         {/* logo section */}
         <LogoSection />

         {/* Feature Section */}
         <FeaturesSection />

         {/* Report Section */}
         <ReportSection />

         {/* QuestionGenerationSection */}
         <QuestionGenerationSection />
      </div>
   );
};

export default App;
