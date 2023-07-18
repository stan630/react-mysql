import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MembersPage from "./pages/MembersPage";
import NavBar from "./components/Navbar";

const AppLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path:"/about",
            element: <AboutPage />
        },
        {
            path:"members",
            element: <MembersPage />
        },
    ]
  }
      
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="/about" element={<AboutPage />} />
    //   <Route path="/members" element={<MembersPage />} />
      
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

//const response = await axios.get('http://localhost:8080/api/users/1)
// const data = response.data
