import React from 'react'
import Header from '../components/Header/Header'
import Router from '../router/Router'
import Footer from '../components/Footer/Footer'

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Router />
            </main>
            <Footer />
        </>
    )
}

export default Layout
