import { HashRouter, Route, Routes } from "react-router-dom"
import './App.css';
import { Menu } from "./Menu"
import { AuthProvider, AuthRoute } from "./auth"
import { HomePage } from "./HomePage"
import { BlogPage } from "./BlogPage"
import { BlogPost } from "./BlogPost"
import { ProfilePage } from "./ProfilePage"
import { LoginPage } from "./LoginPage"
import { LogoutPage } from "./LogoutPage"

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />

          <Routes>
            <Route path='/home' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />} >
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />

            <Route path='/logout' element={
              <AuthRoute>
                <LogoutPage />
              </AuthRoute>} />
            <Route path='*' element={<p>not Found</p>} />

            <Route path='/profile' element={
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>} />
            <Route path='*' element={<p>not Found</p>} />

          </Routes>
        </AuthProvider>
      </HashRouter >
    </>
  );
}

export default App;