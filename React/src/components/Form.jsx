import { useState } from "react"


const Form = () => {

  const [form, setForm] = useState({fname:'',lname:'',city:'',gender:''})


  const inputChnage = (property, value) =>{
    
    setForm(prevObje=>({
      ...prevObje,
      [property]:value
    }))

  }

  const submit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(form))
    
  }



  return (
    <div>


      <form onSubmit={submit}>
     
       
        <input onChange={(e)=>inputChnage('fname',e.target.value)} value={form.fname}   type="text" placeholder="First Name" />

         <br /> <br />

        <input onChange={(e)=>inputChnage('lname',e.target.value)} value={form.lname} type="text" placeholder="Last Name" /> <br /> <br />

        <select onChange={(e)=>inputChnage('city', e.target.value)} value={form.city} >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Gazipur">Gazipur</option>
        </select>
        <br /> <br />
        <input onChange={()=>inputChnage('gender', 'male')} checked={form.gender === 'male'} type="radio" name="gender" /> Male

        <input onChange={()=>inputChnage('gender', 'female')} checked={form.gender === 'female'} type="radio" name="gender" />Female
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Form