import React from "react"
import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <NavBar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
