import { HashRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { Menu } from "./Menu"
import { HomePage } from "./HomePage"
import { BlogPage } from "./BlogPage"
import { BlogPost } from "./BlogPost"
import { ProfilePage } from "./ProfilePage"

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>
          <Route path='/home' element={<HomePage />} />

          <Route path='/blog' element={<BlogPage />} >
            <Route path=':slug' element={<BlogPost />} />
          </Route>
          
          <Route path='/profile' element={<ProfilePage />} />

          <Route path='*' element={<p>not Found</p>} />

        </Routes>
      </HashRouter >
    </>
  );
}

export default App;