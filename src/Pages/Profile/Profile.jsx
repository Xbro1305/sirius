import React, { useEffect, useState } from "react";
import avatar from "../../images/Ellipse 124.png";
import "./Profile.css";
import axios from "axios";

export const Profile = () => {
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios(url + "/backend/profile", {
      headers: {
        "Content-Type": "application/json",
        "bot-token": "1341248158:AAGNsUo1JCdnXzTViqw1YO6i2c3ZpAkivPc",
        "user-id": 389929933,
      },
    })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="profile">
      <div className="profile-main">
        <img src={avatar} alt="" />
        <h1>
          {data.surname} {data.name} {data.patronymic}
        </h1>
      </div>
      <div className="highlighting">
        <h1>Учётные данные</h1>
      </div>
      <div className="personalData">
        <h1>
          <span>Роль</span>
          <p>{data.role}</p>
        </h1>
        <h1>
          <span>Телефон</span>
          <p>{data.phone}</p>
        </h1>
        <h1>
          <span>e-mail</span>
          <p>{data.email}</p>
        </h1>
      </div>
    </div>
  );
};
