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
      <p className="h2" style={{
        fontVariant: 'simplified',
        display: 'flex',
        justifyContent: 'center'
      }}>Google from data using the REATC and REST api 📄</p>
      <br />


      <form autoComplete="off" className="form-group">
        <label>Name</label> <br />
        <input type="text" className="form-control" placeholder="sam" required/>
        <label>Age</label> <br />
        <input type="number" className="form-control" placeholder="20" required/>
        <label>Department</label> <br />
        <input type="text"  placeholder="Infromation Technology " className="form-control" required/>
        <label>Year</label> <br />
        <input type="number" className="form-control" placeholder="4" required/>
        <label>Email</label><br/>
        <input type="email" className="form-control" placeholder="test@mail.com" required/> <br />
        {/* submit button */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App