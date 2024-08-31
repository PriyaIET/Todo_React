import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme= ()=>{
    setThemeMode("light")
  }
  const darkTheme= ()=>{
    setThemeMode("dark")
  }

  //actual theme change

  useEffect(()=>{
    const themeChanger = document.querySelector('html').classList
    themeChanger.remove("light", "dark");
    themeChanger.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>

          </div>

          <div className="w-full max-w-sm mx-auto">
           <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
