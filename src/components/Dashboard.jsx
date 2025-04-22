

// // export default Dashboard
// import React from 'react'
// import { NavLink, Outlet } from 'react-router-dom'

// const Dashboard = () => {
//   return (
//     <div className='flex'>
//       <div className='h-screen w-[200px] bg-gray-800 pl-5 pt-5 shadow-xl '>
//         <h1 className='text-2xl font-bold text-blue-300'>Dashboard</h1>
//         <ul className='mt-10 text-2xl text-green-200 font-medium flex gap-[30px] flex-wrap flex-col'>
//           <li><NavLink to="forms" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
//                    : "rounded hover:bg-gray-700  text-green-200    font-medium"} aria-current="page">Add Post</NavLink></li>
//           <li><NavLink to="updateForm" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
//                    : "rounded hover:bg-gray-700  text-green-200    font-medium"}>Update Post</NavLink></li>
//           <li><NavLink to="deletePost" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
//                    : "rounded hover:bg-gray-700  text-green-200    font-medium"}>Delete Post</NavLink></li>
//           <li><NavLink to="/" className="hover:bg-green-200 hover:rounded hover:text-black">Home</NavLink></li>
        
//           <li><NavLink to="/logIn" className="hover:bg-green-200 hover:rounded hover:text-black">LogOut</NavLink></li>
        
//           <li><NavLink to="/logIn" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
//                    : "rounded hover:bg-gray-700  text-green-200    font-medium"}>Login</NavLink></li>
          
//           <li><NavLink to="/signIn" className={({isActive})=> isActive ? "rounded  bg-red-200  hover:bg-gray-700 text-2xl text-green-200     font-medium"
//                    : "rounded hover:bg-gray-700  text-green-200    font-medium"}>SignIn</NavLink></li>
          
//         </ul>
//       </div> 
//       <div className='h-screen w-screen bg-green-200'>
//       <Outlet />
    
//       </div>

      
//     </div>
//   )
// }

// export default Dashboard
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import { auth, signOut } from '../../firebase-Config';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
         Swal.fire({
          title: "Logout Successfully!",
          icon: "success",
          draggable: true
          });
        navigate('/logIn'); // redirect after logout
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <div className='flex'>
      <div className='h-screen w-[200px] bg-gray-800 pl-5 pt-5 shadow-xl'>
        <h1 className='text-2xl font-bold text-blue-300'>Dashboard</h1>
        <ul className='mt-10 text-2xl text-green-200 font-medium flex gap-[30px] flex-wrap flex-col'>

          <li>
            <NavLink
              to="forms"
              className={({ isActive }) =>
                isActive
                  ? 'rounded bg-red-200 hover:bg-gray-700 text-2xl text-green-200 font-medium'
                  : 'rounded hover:bg-gray-700 text-green-200 font-medium'
              }
            >
              Add Post
            </NavLink>
          </li>

          <li>
            <NavLink
              to="updateForm"
              className={({ isActive }) =>
                isActive
                  ? 'rounded bg-red-200 hover:bg-gray-700 text-2xl text-green-200 font-medium'
                  : 'rounded hover:bg-gray-700 text-green-200 font-medium'
              }
            >
              Update Post
            </NavLink>
          </li>

          <li>
            <NavLink
              to="deletePost"
              className={({ isActive }) =>
                isActive
                  ? 'rounded bg-red-200 hover:bg-gray-700 text-2xl text-green-200 font-medium'
                  : 'rounded hover:bg-gray-700 text-green-200 font-medium'
              }
            >
              Delete Post
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/"
              className="hover:bg-green-200 hover:rounded hover:text-black"
            >
              Home
            </NavLink>
          </li>

          {/* 🔥 Working LogOut button */}
        

          <li>
            <NavLink
              to="/logIn"
              className={({ isActive }) =>
                isActive
                  ? 'rounded bg-red-200 hover:bg-gray-700 text-2xl text-green-200 font-medium'
                  : 'rounded hover:bg-gray-700 text-green-200 font-medium'
              }
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/signIn"
              className={({ isActive }) =>
                isActive
                  ? 'rounded bg-red-200 hover:bg-gray-700 text-2xl text-green-200 font-medium'
                  : 'rounded hover:bg-gray-700 text-green-200 font-medium'
              }
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="hover:bg-green-200 hover:rounded hover:text-black text-left w-full "
            >
              LogOut
            </button>
          </li>

        </ul>
      </div>

      <div className='h-screen w-screen bg-gray-100 overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

