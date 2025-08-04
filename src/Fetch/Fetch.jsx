import axios from "axios";
import React, { useState, useEffect } from "react";

const Fetch = (url) => {
  const [data, SetData] = useState([]);
  const [ErrMsg, SetErrMsg] = useState("");
  const [IsLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    const APIFetch = async()=>{
      try{
        const response = await axios.get(url)
        SetData(response.data);
      }
      catch(err){
        SetErrMsg(err.message);
      }
      finally{
        setTimeout(() => {
           SetIsLoading(false)
        },1000)
      }
    }
    APIFetch()
  }, []);
  return { data, ErrMsg, IsLoading };
};

export default Fetch;
