import Header from "./components/Header"
import Blocks from "./components/Blocks"
import "./App.css"

// This is our main App 'component' which gets inserted into the standard webpage
// Anything we want in our
// After importing our 'child' components we can render them in the App view
export default function App() {
  return (
    <main>
      <Header />
      <Blocks /> 
    </main>
  )
}
