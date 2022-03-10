import AppBarForm from "./components/AppBarForm"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import CreateMovie from './pages/CreateMovie'
import EditMovie from "./pages/EditMovie"

function App() {

  return (
    <>
    <AppBarForm />
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/edit/:id" element={<EditMovie />} />
    </Routes>
    </>
  )
}

export default App
