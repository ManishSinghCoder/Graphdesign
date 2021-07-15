import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./all.css";
const Home = () => {
  const [chartData, setChartData] = useState({});
  const [detail, setDetail] = useState([]);
  const handleChange = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const chart = () => {
    let count = {};
    let alldates = [];
    let countid = [];
    let countdate = [];
    axios
      .post("http://127.0.0.1:8000/social/alldata/", detail)
      .then((res) => {
        for (const dataObj of res.data) {
          alldates.push(dataObj.created_at);
        }
        alldates.forEach((item) => {
          if (count[item]) {
            count[item] += 1;
          } else {
            count[item] = 1;
          }
        });
        console.log(count, "count data");
        console.log(alldates, "alldates data");
        for (const [key, value] of Object.entries(count)) {
          countid.push(value);
          countdate.push(key);
        }
        setChartData({
          labels: countdate,
          datasets: [
            {
              label: "Emplyee",
              data: countid,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, [detail]);
  return (
    <div className="App">
      <input type="date" onChange={handleChange} name="startdate" />
      <input type="date" onChange={handleChange} name="enddate" />
      <div>
        <Line data={chartData} height="90%" />
      </div>
    </div>
  );
};

export default Home;
