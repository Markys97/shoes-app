import {
  createBrowserRouter,
  RouterProvider ,
  createRoutesFromElements,
  Route
  } from "react-router-dom"
  import {Provider} from 'react-redux'
  import {storeApp} from '../../../shared/models/store'

  import './style/style.css'
  import LayoutPage from "../../../pages/components/LayoutPage/LayoutPage"
  import Home from "../../../pages/components/Home/Home"
  import Cart from "../../../widgets/components/Cart/Cart"
  import UserProfil from "../../../pages/components/UserProfil/UserProfil"
  import Favorite from "../../../pages/components/Favorite/Favorite"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={ <LayoutPage/>}>
      <Route index element={<Home/>}/>
      <Route path="user-profil" element={<UserProfil/>} />
      <Route path="favorite" element={<Favorite/>} />
    </Route>
))

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<LayoutPage/>,
//     children:[
//       {
//         index:true,
//         element:<Home/>
//       }
//     ]
//   }
// ])

function App() {
  return (
    <Provider store={storeApp}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App