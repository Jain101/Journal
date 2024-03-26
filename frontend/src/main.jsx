import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, useParams } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Logs from "./components/Logs.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Draft from "./components/Draft.jsx";
import Notes from "./components/Notes.jsx";
import Note from "./components/Note.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="logs" element={<Logs />} loader={() => fetch('http://localhost:5000/notes')} >
//         <Route path="new" element={<Draft />} />

//       </Route>
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="notes" element={<Notes />} loader={() => fetch('http://localhost:5000/notes')} />
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'logs',
        element: <Logs />,
        loader: () => {
          return fetch('http://localhost:5000/notes')
        },
        children: [{
          path: 'new',
          element: <Draft />,
        }]
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'notes',
        element: <Notes />,
        loader: () => {
          return fetch('http://localhost:5000/notes')
        },
        children: [{
          path: ':noteid',
          element: <Note />,
          loader: () => {
            // Get the noteid from the route parameters


            // Use the noteid to construct the URL for the fetch request
            return fetch(`http://localhost:5000/notes/${noteid}`);
          },
        }]
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
