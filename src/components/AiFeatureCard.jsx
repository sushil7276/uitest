export const AiFeatureCard = ({
   title,
   description,
   image = "https://i.ibb.co/9r7wY1G/undraw-Questions-re-75e5.png",
}) => {
   return (
      <div
         className='p-4'
         style={{
            border: "2px solid #efefef",
            width: "23rem",
            height: "20rem",
            borderRadius: "15px",
            overflow: "hidden",
            backgroundColor: "#f7f7f7",
         }}
      >
         <h1 className='text-start fs-4'>{title}</h1>
         <p
            className='lead text-start mt-3'
            style={{ color: "gray", fontSize: "14px", fontWeight: "400" }}
         >
            {description}
         </p>
         <img className='featureImage' src={image} alt={title} />
      </div>
   );
};
