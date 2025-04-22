import React, { useEffect, useState } from "react";
import { db,collection, getDocs, deleteDoc, doc } from "../../firebase-Config";


const DeletePost = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "React", id));
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
            setData(data.filter((item) => item.id !== id));
      });
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              className="border p-4 rounded shadow-lg bg-white h-[410px] overflow-hidden relative"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-xl font-bold mt-2">{item.title}</h2>
              <p className="text-gray-700 overflow-y-auto scrollbar-hide max-h-[100px] pr-2">
                {item.description}
              </p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DeletePost;
