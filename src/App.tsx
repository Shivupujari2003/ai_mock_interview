import React from 'react'
import {BrowserRouter as Router, Route ,Routes} from 'react-router-dom'
import PublicLayout from '@/layouts/public-layout'
import Homepage from '@/routes/Homepage'
import AuthenticationLayout from '@/layouts/authlayout'
import SignInPage from './routes/Signin'
import SignUpPage from './routes/Signup'
import ProtectedRoutes from './layouts/protected-routes'
import MainLayout from './layouts/MainLayout'
import Generate from './components/Generate'
import Dashboard from './routes/Dashboard'
import CreateEditPage from './routes/CreateEditPage' 
import MockLoadPage from './routes/MockLoadPage'
import MockInterviewPage from './routes/MockInterviewPage'
import FeedBack from './routes/FeedBack'
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

          <Route element={<Generate/>} path="/generate">
            <Route index element={<Dashboard/>}/>
            <Route path=":interviewId" element={<CreateEditPage/>}/>
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<FeedBack />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
