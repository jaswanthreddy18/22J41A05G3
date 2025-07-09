import axios from 'axios'
import './App.css'
function App() {
//   data: 
// access_token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJqYXN3YW50aHJlZGR5amFzQGdtYWlsLmNvbSIsImV4cCI6MTc1MjAzOTA1NywiaWF0IjoxNzUyMDM4MTU3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWU3Y2QxN2EtOThjOC00OTYwLTg0NTQtYThkZTgwY2MzODZiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoia2FuZGFkaSBqYXN3YW50aCByZWRkeSIsInN1YiI6ImQ4ODhiZjc3LTgxMzEtNGFiYi04NTg2LTJmOGM5Y2NkYzM5MSJ9LCJlbWFpbCI6Imphc3dhbnRocmVkZHlqYXNAZ21haWwuY29tIiwibmFtZSI6ImthbmRhZGkgamFzd2FudGggcmVkZHkiLCJyb2xsTm8iOiIyMmo0MWEwNWczIiwiYWNjZXNzQ29kZSI6ImVlV0VyeCIsImNsaWVudElEIjoiZDg4OGJmNzctODEzMS00YWJiLTg1ODYtMmY4YzljY2RjMzkxIiwiY2xpZW50U2VjcmV0IjoiTmNXTWtyY1FCUnVodk1haCJ9.Xc9QPeYsHmjytDth2XGSZ7lKhYGEHHonkCFP4xNppoM"
// expires_in :  1752039057
// token_type : "Bearer"

// logID  :  "11b3ecb1-d7ea-4eda-a25d-9eb994b1208d"
// message : "log created successfully"
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
