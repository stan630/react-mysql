import React, {useState, useEffect} from "react";

const MembersPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <table>
        <caption>Chess Club</caption>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Position</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={i}>
              <td>{d.user_id}</td>
              <td>{d.last_name}</td>
              <td>{d.first_name}</td>
              <td>{d.position}</td>
              <td>{d.email}</td>
            </tr>
         ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersPage;
