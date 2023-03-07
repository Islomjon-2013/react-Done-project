import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl, headerToken, token } from "../assets/api/const";
import "../stayles/home.css";
import { Button } from "@mui/material";
const Home = () => {
  const [data, setdata] = useState([]);
  const [edit, setedit] = useState(-1);
  const nomi = useRef();
  const narxi = useRef();
  const navigate = useNavigate();

  const getData = () => {
    axios
      .get(`${apiUrl}products`, headerToken)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteData = (id) => {
    axios
      .delete(`${apiUrl}products/${id}`, headerToken)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const sendData = () => {
    let data = {
      name: nomi.current.value,
      price: narxi.current.value,
    };
    if (edit > 0) {
      axios
        .patch(`${apiUrl}products/${edit}`, data, headerToken)
        .then((res) => {
          nomi.current.value = "";
          narxi.current.value = "";
          getData();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setedit(-1);
    } else {
      axios
        .post(`${apiUrl}products`, data, headerToken)
        .then((res) => {
          nomi.current.value = "";
          narxi.current.value = "";
          getData();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const editData = (item) => {
    setedit(item.id);
    nomi.current.value = item.name;
    narxi.current.value = item.price;
  };
  useEffect(() => {
    getData();
  }, []);
  const logOut = () => {
    localStorage.clear();
    location.reload();
  };
  useEffect(() => {
    if (!token) navigate("/login");
  }, []);

  return (
    <div className="product">
      <div className="container">
        <div className="btn-group">
          <Button onClick={logOut} variant="contained">
            Log out
          </Button>
        </div>
        <div className="row box__product">
          <div className="col-8 offset-2">
            <h3 className="title">Product Name</h3>
            <input
              className="form-control mb-3 p-3"
              ref={nomi}
              type="text"
              placeholder="Product name"
            />
            <h3 className="title">Product price</h3>
            <input
              className="form-control mb-3 p-3"
              ref={narxi}
              type="text"
              placeholder="Product price"
            />
            <button onClick={sendData} className="btn btn-success">
              Send
            </button>
          </div>

          <div className="col-8 offset-2">
            <table class="table mt-5">
              <thead>
                <tr>
                  <th>id</th>
                  <th>nomi</th>
                  <th>narxi</th>
                  <th>edit</th>
                  <th>delete</th>
                  <th>see</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-2"
                        onClick={() => {
                          editData(item);
                        }}
                      >
                        edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => {
                          deleteData(item.id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-secondary mx-2"
                        onClick={() => {
                          navigate(`/see/${item.id}`);
                        }}
                      >
                        see
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
