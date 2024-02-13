import { Route, Routes } from 'react-router-dom'
import './App.css'
import Registration from '../Pages/Registration'
import ViewTable from '../Pages/ViewTable'

function App() {
  
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Registration/>}/>
        <Route path={'/table'} element={<ViewTable/>}/>
      </Routes>
    </>
  )
}

export default App
