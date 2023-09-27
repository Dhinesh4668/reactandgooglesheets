import { useState } from "react"

const App =()=>{

  // from data
  const [name,setName] = useState('')
  const [age,setAge] = useState('')
  const [dep,setDep] = useState('')
  const [year,setYear] = useState('')

  // submiting event
  return(
    <div className="container">
      <h1>Google from data using the REATC and RESTapi 📄</h1>
      <br />


      <form autoComplete="off" className="form-group">
        <label>Name</label> <br />
        <input type="text" placeholder="sam" required/>
        <br/>
        <label>Age</label> <br />
        <input type="number" placeholder="20" required/> <br />
        <label>Department</label> <br />
        <input type="text" placeholder="Infromation Technology " required/> <br />
        <label>Year</label> <br />
        <input type="number" placeholder="4" required/> <br />
        <label>Email</label> <br/>
        <input type="email" placeholder="test@mail.com" required/>
      </form>
    </div>
  )
}

export default App