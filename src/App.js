import React, { useEffect, useState } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Loader from "./components/Loader"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import Cursor from "./components/Cursor"
import "./App.css"

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode")
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches

    if (savedTheme === "true") {
      return true
    } else if (savedTheme === "false") {
      return false
    } else {
      return prefersDarkMode
    }
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white")
      document.body.classList.remove("bg-white", "text-black")
    } else {
      document.body.classList.add("bg-white", "text-black")
      document.body.classList.remove("bg-gray-900", "text-white")
    }
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  if (loading) {
    return <Loader darkMode={darkMode} />
  }

  return (
    <main>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <ScrollToTop />

      {/* <Cursor /> */}
      <ToastContainer
        position='top-right'
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </main>
  )
}