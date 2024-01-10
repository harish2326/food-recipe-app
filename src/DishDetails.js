import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dish from "./api/dish";

const DishDetails = () => {
  const { id } = useParams();
  const [DishDetails, setDishDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await dish.get(`/recipes/${id}/summary`, {
          params: { apiKey: "5f55743f0cef4915b3b07d71b94a86cf" }
        });
        console.log(response.data);
        setDishDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id]);

  console.log("DishDetails:", DishDetails);

  return (
    <>
    <div className="dishDetailsContainer">
        <div className="title">
          <h1>{DishDetails.title}</h1>
        </div>
        <div className="summary">
          <p dangerouslySetInnerHTML={{
            __html:DishDetails.summary
          }}></p>
        </div>
      </div>
    </>
  );
};

export default DishDetails;











// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import dish from "./api/dish";

// const DishDetails = () => {
//   const { id } = useParams();
//   const [DishDetails, setDishDetails] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await dish.get(`/recipes/${id}/summary`, {
//           params: { apiKey: "5f55743f0cef4915b3b07d71b94a86cf" }
//         });
//         console.log(response.data);

//         setDishDetails(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log("DishDetails:", DishDetails);

//   return (
//     <>
//       <h1 style={{ color: "white" }}>{id}</h1>
//       <div className="summary">
//         {Object.keys(DishDetails).map((key) => (
//           <p key={key.id}>
//              <h1 style={{ color: "white" }}>{DishDetails.title}</h1>
             
//           </p>
          
//         ))}
        
//       </div>
//     </>
//   );
// };

// export default DishDetails;
