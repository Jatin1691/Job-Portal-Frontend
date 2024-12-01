import React from 'react';
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import Home from './Pages/HomePage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import FindJob from './Pages/FindJob';
import Header from './Header/Header';
import Footer from './LandingPage/Footer';
import PostJobPage from './Pages/PostJobPage';
import JobDesc from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import ProfilePage from './Pages/ProfilePage';
import { Provider, useSelector } from 'react-redux';
import Store from './Store';
import { ToastContainer } from 'react-toastify';
import JobHistoryPage from './Pages/JobHistoryPage';
import ProtectedRoute from './Pages/ProtectedRoute';
import PublicRoute from './Pages/PublicRoutePage';
import UnauthorizedPage from './Pages/UnAuthorized';

function App() {
  const theme=createTheme({
    primaryColor: 'azure-radiance',
    primaryShade: 4,
     colors: {
      'azure-radiance': [
         '#edfaff',
        '#d6f2ff',
         '#b5eaff',
         '#83dfff',
       '#48cbff',
         '#1eadff',
        '#068fff',
        '#007bff',
       '#085ec5',
       '#0d519b',
       '#0e315d',
      ],
      'mine-shaft': [
         '#f6f6f6',
         '#e7e7e7',
        '#d1d1d1',
         '#b0b0b0',
         '#888888',
       '#6d6d6d',
         '#5d5d5d',
        '#4f4f4f',
         '#454545',
       '#3d3d3d',
       '#2d2d2d',
      ]
    
    
     }
  })
  return (
    <Provider store={Store}>
      <ToastContainer/>
    <MantineProvider defaultColorScheme='dark' theme={theme} >
      <BrowserRouter>
      <div className='relative'>
       

      <Header/>
      <Routes>
         <Route path='/find-jobs' element={<FindJob/>}/>
         <Route path='/Jobs/:id' element={<JobDesc/>}/>
         <Route path='/apply-job/:id' element={<ApplyJobPage/>}/>
         <Route path='/post-job' element={<ProtectedRoute allowedRoles={['EMPLOYER']}><PostJobPage/></ProtectedRoute>} />
         <Route path='/job-history' element={<JobHistoryPage/>} />
         <Route path='/signup' element={<PublicRoute><SignUpPage/></PublicRoute>} />
         <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>} />
         <Route path='/unauthorized' element={<UnauthorizedPage/>}/>

         <Route path='/profile' element={<ProfilePage/>} />
         <Route path='*' element={<Home/>} />
      </Routes>
      <Footer/>

      </div>
     
      </BrowserRouter>
    </MantineProvider>
    </Provider>
  );
}

export default App;
