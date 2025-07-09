import axios from 'axios'
import './App.css'
function App() {
  const userData = {
    email : "jaswanthreddyjas@gmail.com",
    name : "Kandadi Jaswanth Reddy",
    mobileNo : "7989137207",
    githubUsername : "jaswanthreddy18",
    rollNo : "22J41A05G3",
    accessCode : "eeWErx"
  }
  const authData = {
    email : "jaswanthreddyjas@gmail.com",
    name : "Kandadi Jaswanth Reddy",
    rollNo : "22J41A05G3",
    accessCode : "eeWErx",
    clientID : "d888bf77-8131-4abb-8586-2f8c9ccdc391",
    clientSecret : "NcWMkrcQBRuhvMah"
  }
  const logData = {
    stack: "backend",
    level: "error", 
    package: "handler",
    message: "received string, expected bool"
  };
  const handleSubmit = async () => {
    try {
      const res = await axios.post(`http://20.244.56.144/evaluation-service/register`, userData);
      if(res){
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit1 = async () => {
    try {
      const res = await axios.post(`http://20.244.56.144/evaluation-service/auth`, authData);
      if(res){
        const accessToken = res.data.access_token;
        // console.log(accessToken);
        logToApi(accessToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const logToApi = async (accessToken) => {
    try {
      const res = await axios.post(`http://20.244.56.144/evaluation-service/logs`, logData, {
        headers: {
          Authorization: `Bearer ${accessToken}`, 
          "Content-Type": "application/json"
        },
      });
      console.log('Log sent successfully:', res.data);
      if(res){
        console.log(res);
      }
    } catch (error) {
      console.error("Failed to send log:", error);
    }
  };
  return (
    <>
      <button onClick={handleSubmit}>Submit to register</button>
      <button onClick={handleSubmit1}>Submit to auth</button>
    </>
  )
}

export default App
