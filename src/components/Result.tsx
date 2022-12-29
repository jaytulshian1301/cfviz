import { useEffect, useState } from "react";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import {userStatus} from "../types/userstatus"

function Result(props: any) {
  
  let userStatusUrl = "https://codeforces.com/api/user.status?handle=";
  let userRatingUrl = "https://codeforces.com/api/user.rating?handle=";

  let [loading, setLoading] = useState<Boolean>(false);   
  let [error, setError] = useState<any>();
  let [statusData, setStatusData] = useState();
  let [ratingData, setRatingData] = useState();

  async function statusCall() {
    try{
    let handle = props.userhandle;
    let res = await fetch(userStatusUrl + handle, { method: "GET" });
    if(res.ok)
    return res.json();
    else throw Error('handle: Field should contain between 3 and 24 characters, inclusive')
    }catch(err){
      setError(err)
    }
  }

  async function ratingCall() {
   try{
    let handle = props.userhandle;
    let res = await fetch(userRatingUrl + handle, { method: "GET" });
    if(res.ok)
      return res.json();
    else throw Error('handle: Field should contain between 3 and 24 characters, inclusive')
   }
   catch(err){
    setError(err)
   }
    
  }

  async function apiCall() {
    try {
      setError(undefined)
      setLoading(true);
      let [status, rating] = await Promise.all([statusCall(), ratingCall()]);
      
      setStatusData(status);
      setRatingData(rating);

    } catch (Err) {
      setError(Err);
    } finally {
      setLoading(false);
    }
  }

  useEffect( function(){
     apiCall();
  }, [props.userhandle]);

  if (loading) {
    return <>Loading</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <div>
      {statusData && <PieChart attribute="verdict" rawdata={statusData}/>}
      {statusData && <PieChart attribute="pl" rawdata={statusData}/>}
      {statusData && <PieChart attribute="tags" rawdata={statusData}/>}
      {statusData && <BarChart attribute="probIdx" rawdata={statusData}/>}
    </div>
  );
}

export default Result;
