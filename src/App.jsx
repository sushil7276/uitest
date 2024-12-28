import Navbar from "./components/Navbar";
import MainStartSection from "./components/MainStartSection";
import LogoSection from "./components/LogoSection";
import FeaturesSection from "./components/FeaturesSection";

const App = () => {
   return (
      <div className='w-100 d-flex flex-column'>
         <div
            className='container-xl'
            style={{
               borderRadius: "10px",
               // backgroundColor: "lightcyan",
            }}
         >
            {/* Header Section */}
            <Navbar />

            {/* Hero Section */}
            <MainStartSection />
         </div>

         {/* logo section */}
         <LogoSection />

         {/* Feature Section */}
         <FeaturesSection />
      </div>
   );
};

export default App;
