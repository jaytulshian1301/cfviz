import { useEffect, useState } from "react";

function Result(props: any) {

  // API's to call
  let userStatusUrl = "https://codeforces.com/api/user.status?handle=";
  let userRatingUrl = "https://codeforces.com/api/user.rating?handle=";

  let [loading, setLoading] = useState<Boolean>(false);
  let [error, setError] = useState();
  let [statusData, setStatusData] = useState();
  let [ratingData, setRatingData] = useState();

  function statusCall() {
    let handle = props.userhandle;
    fetch(userStatusUrl + handle, { method: "GET" })
      .then((res) => res.json())
      .then((statusData) => {
        setStatusData(statusData)
      })
      .catch((err) => setError(err));
  }

  function ratingCall() {
    let handle = props.userhandle;
    if(handle == "") throw Error("handle cannot be empty")
    fetch(userRatingUrl + handle, { method: "GET" })
      .then((res) => res.json())
      .then((ratingData) => {
        setRatingData(ratingData)
      })
      .catch((err) => setError(err));
  }

  function apiCall() {
    setLoading(true);
    statusCall();
    ratingCall();
    setLoading(false);
  }

  useEffect(apiCall,[]);

  if (loading) {
    return <>Loading...</>;
  } else if (error) {
    return <>{error}</>;
  } else {
    return( 
    <div>
        <>{statusData}</>
        <>{ratingData}</>
    </div>
    )
  }
}

export default Result;
