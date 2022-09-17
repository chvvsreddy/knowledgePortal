import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';

import Profile from './components/Profile';
import Messages from './components/Messages';
import MyCourses from './components/MyCourses';
import Circles from './components/Circles';
import Requests from './components/Requests';
import Settings from './components/Settings';
import Instructors from './components/Instructors';
import Home from './components/Home';
import ProfileEdit from './components/Profile/ProfileEdit';
import ProfileCreate from './components/Profile/ProfileCreate';
import RequestDetails from './components/Requests/RequestDetails';
import CreateCourseInitiation from './components/CreateCourse/CreateCourseInitiation';
import CreateCourseBasicPage from './components/CreateCourse/CreateCourseBasicPage';

import MainLayout from './components/Layout'
import ProfileLayout from './components/Layout/ProfileLayout';


const App = () => {
    //const [theme, setTheme] = useState(false);
    //const [user, setUser] = useState(2);
    return (

        <Routes >
            <Route path="/Profile" element={<ProfileLayout />}>
                <Route index element={<Profile />} />
            </Route>
            <Route path="/Messages" element={<ProfileLayout />}>
                <Route index element={<Messages />} />
            </Route>
            <Route path="/MyCourses" element={<ProfileLayout />}>
                <Route index element={<MyCourses />} />
            </Route>
            <Route path="/Circles" element={<ProfileLayout />}>
                <Route index element={<Circles />} />
            </Route>
            <Route path="/Requests" element={<ProfileLayout />}>
                <Route index element={<Requests />} />
            </Route>
            <Route path="/RequestDetails" element={<ProfileLayout />}>
                <Route index element={<RequestDetails />} />
            </Route>
            <Route path="/Settings" element={<ProfileLayout />}>
                <Route index element={<Settings />} />
            </Route>
            <Route path="/Instructors" element={<ProfileLayout />}>
                <Route index element={<Instructors />} />
            </Route>
            <Route path="/ProfileEdit" element={<ProfileLayout />}>
                <Route index element={<ProfileEdit />} />
            </Route>
            <Route path="/CreateCourseInitiation" element={<ProfileLayout />}>
                <Route index element={<CreateCourseInitiation />} />
            </Route>

            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/signup" element={<MainLayout />}>
                <Route index element={<Signup />} />
            </Route>
            <Route path="/login" element={<MainLayout />}>
                <Route index element={<Login />} />
            </Route>
            <Route path="/ProfileCreate" element={<MainLayout />}>
                <Route index element={<ProfileCreate />} />
            </Route>
            <Route path="/CreateCourseBasicPage" element={<MainLayout />}>
                <Route index element={<CreateCourseBasicPage />} />
            </Route>


        </Routes>


    )
}

export default App;
