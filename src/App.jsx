import "./App.css"
import Header from "./components/Header"
import Blocks from "./components/Blocks"

// This is our main App 'component' which gets inserted into the standard webpage
// After importing our 'child' components we can render them in the App view below

export default function App() {
  return (
    <main>
      <Header/>
      <Blocks/>
      </main>
  )
}
