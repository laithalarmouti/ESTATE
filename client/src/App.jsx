import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import About from './pages/About'
import Header from './components/Header';



export default function App() {
  return (
    <BrowserRouter>
    <Header />s
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />

    </Routes>
    </BrowserRouter>
  )
}
