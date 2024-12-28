import dropbox from "../assets/dropbox.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import playstation from "../assets/playstation.svg";
import xbox from "../assets/xbox.svg";

const LogoSection = () => {
   return (
      <section
         className='d-flex flex-column align-items-center'
         style={{ color: "gray" }}
      >
         <p className='lead text-center w-75 mt-5'>
            Supported and Powered by several top companies
         </p>
         <div className='photo'>
            <img src={dropbox} alt='DropBox' />
            <img src={google} alt='Google' />
            <img src={microsoft} alt='Microsoft' />
            <img src={playstation} alt='Playstation' />
            <img src={xbox} alt='Xbox' />
         </div>
      </section>
   );
};

export default LogoSection;
