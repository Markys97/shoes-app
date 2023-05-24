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


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={ <LayoutPage/>}>
      <Route path="home"  element={<Home/>}/>
    </Route>
))

function App() {
  return (
    <Provider store={storeApp}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App