import { useState , useEffect} from "react"
import axios from 'axios'
const App = () => {

  // from data
  const [name, setName] = useState('')
  // const [age, setAge] = useState('')
  const [dep, setDep] = useState('')
  // const [year, setYear] = useState('')
  const [cname, setCname]=useState('')
  const [email, setEmail] = useState('')
  const [reg,setReg] =useState('')
  const [acknowledgment, setAcknowledgment] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [status,setStatus] = useState('')
  const [tableData, setTableData] = useState([]);

  // Function to fetch data from the API
  const fetchData = () => {
    axios.get('https://sheet.best/api/sheets/a12472ae-5d1e-4117-82f9-244940636c40')
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);

      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  // submiting event  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      setAcknowledgment(`${name} Data has been submitted ✔️`);
      setShowWarning(false);
    } else {
      setAcknowledgment('');
      setShowWarning(true);
    }


    const Data = {
      Name: name,
      // Age: age,
      Department: dep,
      Regno:reg,
      CompanyName:cname,
      // Year: year,
      Email: email,
      Status:status,
    }
    axios.post('https://sheet.best/api/sheets/a12472ae-5d1e-4117-82f9-244940636c40', Data).then(() => {
      // console.log(responce);
      setName('')
      // setAge('')
      setDep('')
      setReg('')
      setCname('')
      setEmail('')
      setStatus('')
      // setYear('')
    })
  };


  return (
    <div className="container mt-5">
      <p className="h2" style={{
        fontVariant: 'simplified',
        display: 'flex',
        justifyContent: 'center'
      }}>MORGAN STANLEY CAMPUS APPLICATION 2023 IT DEP DEATILS 📄</p>
      <br />


      <form autoComplete="on" className="form-group" onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input type="text" className="form-control" placeholder="sam"
          onChange={(e) => setName(e.target.value)} value={name}
        />
        {/* <label>Age</label> <br />
        <input type="number" className="form-control" placeholder="20"
          onChange={(e) => setAge(e.target.value)} value={age}
        /> */}
        <label>Department</label> <br />
        <input type="text" placeholder="Infromation Technology " className="form-control"
          onChange={(e) => setDep(e.target.value)} value={dep}
        />
        <label>Reg No</label> <br />
        <input type="number" placeholder="611720205004 " className="form-control"
          onChange={(e) => setReg(e.target.value)} value={reg}
        />
        {/* <label>Year</label> <br />
        <input type="number" className="form-control" placeholder="4"
          onChange={(e) => setYear(e.target.value)} value={year}
        />
        */}
        <label>Email</label><br />
        <input type="email" className="form-control" placeholder="test@mail.com"
          onChange={(e) => setEmail(e.target.value)} value={email}
        /> <br />
        <label>company name</label><br />
        <input type="text" className="form-control" placeholder="ex:dhinesh softwhare limited."
          onChange={(e) => setCname(e.target.value)} value={cname}
        /> <br />
        <label>Status</label><br />
        <input type="text" className="form-control" placeholder="completed / notcompleted"
          onChange={(e) => setStatus(e.target.value)} value={status}
        /> <br />
        {/* submit button */}
        <div style={{

        }}
          className="d-grid gap-2"
        >
          <button className="btn btn-primary" type="submit" >Submit</button>
        </div>
      </form>
      {showWarning && (
        <div className="alert alert-warning mt-3" role="alert">
          Please fill in all the required fields.
        </div>
      )}
      {acknowledgment && (
        <div className="alert alert-success mt-3" role="alert">
          {acknowledgment}
        </div>
      )}
<br />
      <table className="table md-4 table-bordered table-striped table-hover">
        <thead>
          <tr className="table-dark">
            <th>Name</th>
            <th>RegNo</th>
            <th>Department</th>
            <th>Email</th>
            <th>CompanyName</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.Name}</td>
              <td>{dataItem.Department}</td>
              <td>{dataItem.Regno}</td>
              <td>{dataItem.CompanyName}</td>
              <td>{dataItem.Email}</td>
              <td>{dataItem.status}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default App


