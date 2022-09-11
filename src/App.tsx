// This is a React Router v6 app
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import MonthStatistics from './pages/MonthStatistics/MonthStatistics'
import Header from "./shared/Header/Header";
import Headers from "./shared/Header/Headers";
import Popup from "./shared/Popup/Popup";
import MyTabs from './pages/Tabs/Tabs'

function App() {

  return (
    <>
      <Headers/>
      <MyTabs></MyTabs>
      <div className="global-conatainer">
        {/* <Popup/> */}
        <div className="container">
          {/* <Header/> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/month-statistics' element={<MonthStatistics/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
