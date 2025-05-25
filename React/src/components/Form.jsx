import { useState } from "react"


const Form = () => {

  const [form, setForm] = useState({
    Fname: '',
    Lname: '',
    city:'',
    Gender: ''
  })


  return (
    <div>
      <form action="">
        <input value={form.Fname} type="text" placeholder="First Name" /> <br /> <br />
        <input value={form.Lname} type="text" placeholder="Last Name" /> <br /> <br />

        <select value={form.city}>
          <option value="">Choose City</option>
          <option value="">Dhaka</option>
          <option value="">Gazipur</option>
        </select>
        <br /> <br />
        <input checked={form.Gender === 'Male'} type="radio" name="gender" /> Male

        <input checked={form.Gender === 'Female'} type="radio" name="gender" />Female
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Form