// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import QuizStartPage from './pages/QuizStartPage.pages';
import AboutPage from './pages/AboutPage.pages';
import ContactPage from './pages/ContactPage.pages';
import QuestionAnswer from './component/QuestionAnswer.component';
import Grid from './component/Grid.Component';
import Profile from './component/Avatar/Profile.sideBar';
import NotFoundPage from './pages/NotFoundPage.pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />} >
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/ai" element={<LandingPage />} />


          <Route path="/trivia" element={
              <QuizStartPage />
          }>
            <Route path=":category?" element={<Grid />} />
            <Route path=":category/:difficulty/:type" element={<QuestionAnswer />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/profile" element={
              <Profile />
          } />
          <Route path='*' element={<NotFoundPage/>}/>
        </Route>
      </Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

reportWebVitals();
