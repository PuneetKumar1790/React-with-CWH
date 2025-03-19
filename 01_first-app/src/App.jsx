//Entry point like index.html
//JSX=Html+javascript
//Use classsname instead of class because class is defined in JS 
//Custom component must be start with Uppercase
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar"
//using props 

function App() {
  

  return (
    <>
      <Navbar/>
      <main>
        This is my sites main content
      </main>
      <div className="cards">
        <Card title="card 1" description="card 1 desc"/>
        <Card title="card 2" description="card 2 desc"/>
        <Card title="card 3" description="card 3 desc"/>
        <Card title="card 4" description="card 4 desc"/>
        
      </div>
      <Footer/>
    </>
  )
}

export default App