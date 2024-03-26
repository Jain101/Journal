import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet /> {/* <Outlet/> is a special component that renders whatever child route is currently active. */}
            <Footer />
        </>
    )
}

export default Layout