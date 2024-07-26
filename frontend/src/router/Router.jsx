import React from 'react'
import Home from '../page/Home'



import { Routes, Route } from 'react-router-dom'
import Doctors from '../page/Doctors/Doctors'
import DoctorDetails from '../page/Doctors/DoctorDetails'
import Login from '../page/Login'
import Signup from '../page/Signup'
import Contact from '../page/Contact'
import Services from '../page/Services'
const Router = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

    </Routes>
}

export default Router
