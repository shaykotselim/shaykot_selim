import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../home/Home";
import About from "../pages/about/About";
import Skills from "../pages/skills/Skills";
import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    children:[
        {
         path:'/',
         element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/skills',
          element:<Skills/>
        },
        {
          path:'/project',
          element:<Projects/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
    ]
    },
  ]);
  export default router;