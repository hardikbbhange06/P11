import React, { useEffect, useState } from "react";
import {  Card } from "react-bootstrap";
import "./UseEffect.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();
  

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
   
  }, []);
  

  return (
    
    <div>
      <h1>CARD</h1>
      <div className="card1">
        <div className="row text-center">
          {users.map((curElem) => {
            return <>
            
            <div className="col-10 col-md-4 mt-5">
            <div>
              <Card
                style={{   margin: "4rem" }}
              >
                <Card.Img variant="top" src={curElem.avatar_url} />
                <Card.Body>
                  {/* <Card.Title  onClick={""} >{curElem.login}</Card.Title> */}
                  {/* <Card.Title  onClick={""} >{curElem.login}</Card.Title> */}
                  <Link to="/idpage">{curElem.login}</Link>

                  {/* <Card.Text>har</Card.Text> */}
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          </div>
            </>;
          })}
         
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
