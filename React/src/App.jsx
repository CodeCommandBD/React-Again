import Conditional from "./components/Conditional"
import Datapass from "./components/Datapass"
import ExpensiveComputations from "./components/ExpensiveComputations"
import Footer from "./components/Footer"
import Form from "./components/Form"
import LearnHok from "./components/LearnHok"
import Loop from "./components/Loop"
import Mutable from "./components/Mutable"
import Navbar from "./components/Navbar"
import ToDo from "./components/ToDo"
import UsEREF from "./components/UsEREF"
import UseState from "./components/UseState"




const App = () => {

  // const items = {
  //       name: 'shanto',
  //       age: 25,
  //       address: 'Dhaka'
  // }

  // const btnClick = () =>{
  //   alert('hello')
  // }

  return (
    <div>
        {/* <Navbar></Navbar>
        <Footer></Footer>
        <Loop></Loop>
        <Conditional></Conditional>
        <Datapass items={items} btn={btnClick}></Datapass>
        <Form></Form> */}
        {/* <LearnHok></LearnHok>
        <UsEREF></UsEREF>
        <Mutable></Mutable>
        <ExpensiveComputations></ExpensiveComputations> */}
        {/* <UseState></UseState> */}
        <ToDo></ToDo>
    </div>
  )
}

export default App