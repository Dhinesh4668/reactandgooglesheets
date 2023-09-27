import { useState , useEffect} from "react"
import axios from 'axios'
const App = () => {

  // from data
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [dep, setDep] = useState('')
  const [year, setYear] = useState('')
  const [email, setEmail] = useState('')
  const [acknowledgment, setAcknowledgment] = useState('');
  const [showWarning, setShowWarning] = useState(false);

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
      Age: age,
      Department: dep,
      Year: year,
      Email: email
    }
    axios.post('https://sheet.best/api/sheets/a12472ae-5d1e-4117-82f9-244940636c40', Data).then(() => {
      // console.log(responce);
      setName('')
      setAge('')
      setDep('')
      setEmail('')
      setYear('')
    })
  };


  return (
    <div className="container mt-5">
      <p className="h2" style={{
        fontVariant: 'simplified',
        display: 'flex',
        justifyContent: 'center'
      }}>Google from data using the REATC and REST api 📄</p>
      <br />


      <form autoComplete="on" className="form-group" onSubmit={handleSubmit}>
        <label>Name</label> <br />
        <input type="text" className="form-control" placeholder="sam"
          onChange={(e) => setName(e.target.value)} value={name}
        />
        <label>Age</label> <br />
        <input type="number" className="form-control" placeholder="20"
          onChange={(e) => setAge(e.target.value)} value={age}
        />
        <label>Department</label> <br />
        <input type="text" placeholder="Infromation Technology " className="form-control"
          onChange={(e) => setDep(e.target.value)} value={dep}
        />
        <label>Year</label> <br />
        <input type="number" className="form-control" placeholder="4"
          onChange={(e) => setYear(e.target.value)} value={year}
        />
        <label>Email</label><br />
        <input type="email" className="form-control" placeholder="test@mail.com"
          onChange={(e) => setEmail(e.target.value)} value={email}
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
            <th>Age</th>
            <th>Department</th>
            <th>Year</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((dataItem, index) => (
            <tr key={index}>
              <td>{dataItem.Name}</td>
              <td>{dataItem.Age}</td>
              <td>{dataItem.Department}</td>
              <td>{dataItem.Year}</td>
              <td>{dataItem.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  )
}

export default App


