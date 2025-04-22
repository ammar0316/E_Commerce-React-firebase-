

// // export default UpDateCards;
// import React, { useEffect, useState } from "react";
// import { db, collection,
//   getDocs,
//   doc,

//   updateDoc, } from "../../firebase-Config";


// const UpDateCards = () => {
//   const [data, setData] = useState([]);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [updatedData, setUpdatedData] = useState({
//     title: "",
//     description: "",
//     image: "",
//   });

//   const fetchData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "React"));
//       const items = querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setData(items);
//       setLoading(false); // stop loading when done
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

 

//   const handleUpdateClick = (item) => {
//     setEditingId(item.id);
//     setUpdatedData({
//       title: item.title,
//       description: item.description,
//       image: item.image,
//     });
//   };

//   const handleUpdateSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const itemRef = doc(db, "React", editingId);
//       await updateDoc(itemRef, {
//         title: updatedData.title,
//         description: updatedData.description,
//         image: updatedData.image,
//       });
//       setData((prev) =>
//         prev.map((item) =>
//           item.id === editingId
//             ? {
//                 ...item,
//                 title: updatedData.title,
//                 description: updatedData.description,
//                 image: updatedData.image,
//               }
//             : item
//         )
//       );
//       setEditingId(null);
//     } catch (error) {
//       console.error("Error updating document: ", error);
//     }
//   };

//   return (
//     <>
//       {loading ? (
//         // Loader shown while loading is true
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
//           {[1, 2, 3].map((n) => (
//             <div
//               key={n}
//               className="border p-4 rounded shadow-md bg-white h-[410px] flex justify-center items-center"
//             >
//               <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         // Actual UpDateCards shown when loading is false
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
//           {data.map((item) => (
//             <div
//               key={item.id}
//               className="border p-4 rounded shadow-lg/45 bg-white relative h-[410px] overflow-hidden"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded"
//               />
//               <h2 className="text-xl font-bold mt-2">{item.title.toUpperCase()}</h2>
  
//               <p className="text-gray-700 overflow-y-auto scrollbar-hide max-h-[100px] pr-2">
//                 {item.description}
//               </p>
  
//               <div className="mt-4 flex justify-end ">
//                 <button
//                   onClick={() => handleUpdateClick(item)}
//                   className="bg-yellow-500  text-white px-3 py-1 rounded"
//                 >
//                   Update
//                 </button>
               
//               </div>
  
//               {editingId === item.id && (
//                 <form onSubmit={handleUpdateSubmit} className="mt-4">
//                   <input
//                     type="text"
//                     value={updatedData.title}
//                     onChange={(e) =>
//                       setUpdatedData({ ...updatedData, title: e.target.value })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update title"
//                   />
//                   <textarea
//                     value={updatedData.description}
//                     onChange={(e) =>
//                       setUpdatedData({
//                         ...updatedData,
//                         description: e.target.value,
//                       })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update description"
//                   ></textarea>
//                   <input
//                     type="text"
//                     value={updatedData.image}
//                     onChange={(e) =>
//                       setUpdatedData({ ...updatedData, image: e.target.value })
//                     }
//                     className="block w-full mb-2 p-2 border rounded"
//                     placeholder="Update image URL"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-green-500 text-white px-4 py-1 rounded"
//                   >
//                     Save
//                   </button>
//                 </form>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }
  

// export default UpDateCards;
// gpt 
import React, { useEffect, useState } from "react";
import { db, collection, getDocs, doc, updateDoc } from "../../firebase-Config";

const UpDateCards = () => {
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  const [updatedData, setUpdatedData] = useState({
    title: "",
    description: "",
    image: "",
    price: "", // added price field
  });

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "React"));
      const items = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdateClick = (item) => {
    setEditingId(item.id);
    setUpdatedData({
      title: item.title,
      description: item.description,
      image: item.image,
      price: item.price || "", // initialize price if it exists
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const itemRef = doc(db, "React", editingId);
      await updateDoc(itemRef, {
        title: updatedData.title,
        description: updatedData.description,
        image: updatedData.image,
        price: updatedData.price, // include price in update
      });
      setData((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                title: updatedData.title,
                description: updatedData.description,
                image: updatedData.image,
                price: updatedData.price,
              }
            : item
        )
      );
      setEditingId(null);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="border p-4 rounded shadow-md bg-white h-[410px] flex justify-center items-center"
            >
              <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-lg/45 bg-white relative h-[410px] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">{item.title.toUpperCase()}</h2>
              <p className="text-gray-700 overflow-y-auto scrollbar-hide max-h-[100px] pr-2">
                {item.description}
              </p>
              <h3 className="text-md font-semibold text-green-600 mt-2">
                Price: ${item.price}
              </h3>
             

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleUpdateClick(item)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Update
                </button>
              </div>

              {editingId === item.id && (
                <form onSubmit={handleUpdateSubmit} className="mt-4">
                  <input
                    type="text"
                    value={updatedData.title}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, title: e.target.value })
                    }
                    className="block w-full mb-2 p-2 border rounded"
                    placeholder="Update title"
                  />
                  <textarea
                    value={updatedData.description}
                    onChange={(e) =>
                      setUpdatedData({
                        ...updatedData,
                        description: e.target.value,
                      })
                    }
                    className="block w-full mb-2 p-2 border rounded"
                    placeholder="Update description"
                  ></textarea>
                  <input
                    type="text"
                    value={updatedData.image}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, image: e.target.value })
                    }
                    className="block w-full mb-2 p-2 border rounded"
                    placeholder="Update image URL"
                  />
                  <input
                    type="text"
                    value={updatedData.price}
                    onChange={(e) =>
                      setUpdatedData({ ...updatedData, price: e.target.value })
                    }
                    className="block w-full mb-2 p-2 border rounded"
                    placeholder="Update price"
                  />
                  <button
                    type="submit"
                    onClick={()=>{ Swal.fire({
                        title: "Update Successfully!",
                        icon: "success",
                        draggable: true
                        });}}
                    className="bg-green-500 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                </form>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UpDateCards;
