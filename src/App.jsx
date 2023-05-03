import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import AuthProvider from "./components/Authentication/AuthProvider";
import Layout2 from "./components/Layout/Layout2";
 import SignUp from './components/Form/SignUp'
 import SignIn from './components/Form/SignIn'
import Layout1 from "./components/Layout/Layout1";
import Recipe from "./components/Recipe/Recipe";
import PrivetRoute from "./components/privet/PrivetRoute";
import Blog from "./components/Blog/Blog";
import Error from "./components/utility/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout2 />,
    errorElement : <Error/>,
    loader: () => fetch('http://localhost:5000/chef')
  },
  {
    path: '/layout',
    element: <Layout1 />,
    children: [
      {
        path: '/layout/:id',
        element: <PrivetRoute><Recipe/></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: '/layout/signup',
        element : <SignUp/>
      },
      {
        path: '/layout/signin',
        element : <SignIn/>
      },
      {
        path: '/layout/blog',
        element : <Blog/>
      },
    ]
  },
])

function App() {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>

    </div>
  )
}

export default App
