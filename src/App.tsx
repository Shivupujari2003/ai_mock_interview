import React from 'react'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import PublicLayout from '@/layouts/public-layout'
import Homepage from '@/routes/Homepage'
import AuthenticationLayout from '@/layouts/authlayout'
import SignInPage from './routes/Signin'
import SignUpPage from './routes/Signup'
import ProtectedRoutes from './layouts/protected-routes'
import MainLayout from './layouts/MainLayout'
const App = () => {
  return (
    <Router>
      <Routes>
        {/* public */}
        <Route element={<PublicLayout/>}>
          <Route index element={<Homepage/>}/>
        </Route>

        {/* Auth layout */}

        <Route element={<AuthenticationLayout/>}>
          <Route path='/signin/*' element={<SignInPage/>}/>
          <Route path='/signup/*' element={<SignUpPage/>}/>
        </Route>

        {/* protected */}
        <Route element={<ProtectedRoutes>
          <MainLayout/>
        </ProtectedRoutes>}>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
