
import './App.css'

import Layout from './Components/Layout'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OsIntroduction from './Pages/Os/OsIntroduction'
import OsLayout from './Pages/Os/OsLayout'
import OsLayourOfArchitecture from './Pages/Os/OsLayourOfArchitecture'
import OsManagement from './Pages/Os/OsManagement'
import DbmsLayout from './Pages/DBMS/DbmsLayout'
import DbmsIntro from './Pages/DBMS/DbmsIntro'
import DbmsRelationalDataModel from './Pages/DBMS/DbmsRelationalDataModel'
import DbmsFunctionalDependency from './Pages/DBMS/DbmsFunctionalDependency'
import EvsLayout from './Pages/EVS/EvsLayout'
import EvsIntro from './Pages/EVS/EvsIntro'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}  >
             <Route path='/' element={<Home/>} />
             <Route path="/oprating-System" element ={<OsLayout/>}>
                   <Route path="/oprating-System" element={<OsIntroduction/>} />
                   <Route path='/oprating-System/layour-of-architecture' element={<OsLayourOfArchitecture/>} />
                   <Route path='/oprating-System/os-management' element={<OsManagement/>} />
             </Route>
             <Route path='/dbms' element={<DbmsLayout/>} >
                   <Route path='/dbms' element={<DbmsIntro/>} />
                   <Route path='/dbms/relational-data-model' element={<DbmsRelationalDataModel/>} />
                   <Route path='/dbms/functional-dependency' element={<DbmsFunctionalDependency />} />
             </Route>
             <Route path='/evs' element={<EvsLayout/>}>
                   <Route path='/evs' element={<EvsIntro/>} />
             </Route>
      </Route>
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
