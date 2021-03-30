import axios from "axios";

const instance = axios.create({
  //This where API (CLOUD FUCNTION URL)
  baseURL: "http://localhost:5001/challenge-9e937/us-central1/api",
});

export default instance;
