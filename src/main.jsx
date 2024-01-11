import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <App/>,
//     errorElement:<ErrorPage/>
//   },
//   {
//     path:"AboutUs",
//     element:<AboutUs/>,
//     errorElement:<ErrorPage/>
//   },
//   {
//     path:"Collection",
//     element:<Collection/>,
//     errorElement:<ErrorPage/>,
//     children: [
//       {path: "/Collection/:id", element:<EachItem/>, errorElement:<ErrorPage/>},
//     ]
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);
