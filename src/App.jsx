import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Layout from './components/Layout';
import "./sass/App.scss"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path="/contact"  element={<Contact />} />
  <Route path="/service"  element={<Service />} />
  <Route path="/portfolio"  element={<Portfolio />} />
  </Route>
))

function App() {

    return (
      <div className="App">
        <RouterProvider router={router} />
    </div> 
    )
}

export default App