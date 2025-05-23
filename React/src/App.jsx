import Conditional from "./components/Conditional"
import Datapass from "./components/Datapass"
import Footer from "./components/Footer"
import Form from "./components/Form"
import LearnHok from "./components/LearnHok"
import Loop from "./components/Loop"
import Mutable from "./components/Mutable"
import Navbar from "./components/Navbar"
import UsEREF from "./components/UsEREF"




const App = () => {

  const items = {
        name: 'shanto',
        age: 25,
        address: 'Dhaka'
  }

  const btnClick = () =>{
    alert('hello')
  }

  return (
    <div>
        {/* <Navbar></Navbar>
        <Footer></Footer>
        <Loop></Loop>
        <Conditional></Conditional>
        <Datapass items={items} btn={btnClick}></Datapass>
        <Form></Form>
        <LearnHok></LearnHok> */}
        <UsEREF></UsEREF>
        <Mutable></Mutable>
    </div>
  )
}

export default App