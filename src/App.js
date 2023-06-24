import React, { useState,useEffect } from 'react'
import { getuser } from './services/api';
import './App.css'

const App = () => {

 const[user,setuser] = useState([]);
 const[search , setsearch]=useState("");

 useEffect(() => {
    getuserDetails();
}, [])

const getuserDetails = async () => {
    try {
        let response = await getuser();
        console.log(response.data.data);
        setuser(response.data.data);
    } catch (error) {
        console.log("Fail to show user details",error);
    }
}

const Searchhandle = (event) => {
    setsearch(event.target.value);
  };

  const filter = user.filter((i) =>
    i.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <center><h1>Welcome:)</h1></center>  
      <div className="search-div">
      <input
        type="text"
        placeholder="Search first name"
        value={search}
        onChange={Searchhandle}
      />
      </div>

      <div className="outer-div">
      <ul>
        {filter?.map((user) => (
          <li key={user.id}>
            <div className="mid-div">
              <div className="inner-div">
                <img src={user.avatar} alt={user.first_name} />
                <div className="id-box">
                  <span className="id">{user.id}</span>
                </div>
              </div>

              <p>
                {user.first_name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App