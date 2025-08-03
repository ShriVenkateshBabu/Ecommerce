import React, { useState, useEffect } from "react";

const Fetch = () => {
  const [data, SetData] = useState([]);
  const [ErrMsg, SetErrMsg] = useState("");
  const [IsLoading, SetIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/products", { method: "GET" })
      .then((res) => res.json())
      .then((data) => SetData(data))
      .catch((err) => SetErrMsg(err.message))
      .finally(() => SetIsLoading(false));
  }, []);
  return { data, ErrMsg, IsLoading };
};

export default Fetch;
