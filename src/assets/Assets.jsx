import React, { useState, useEffect } from "react";
import axios from "axios";
import imglocation from './img/location.svg'
import imgphone from './img/phone.svg'
import imgemail from './img/email.svg'
import { MdDriveFileRenameOutline } from "react-icons/md";




const Assets = () => {
  const [data, setData] = useState();

  const assetsApi = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        // console.log(res);
        setData(res.data.results[0]);
      })
      .catch((error) => console.log(error));
  };
  // assetsApi()
  useEffect(() => {
    assetsApi();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="header">
        {" "}
        <h4 className="h4">SELECT ONE OF THE RANDOM PROFİLES</h4>{" "}
      </div>
      <div className="container">
        {/* {data ? (div yazacaksın) : "" }  */}
        {data ? (
          <div className="flex flex-col justify-center items-center flex-col w-[30rem] h-[30rem] mx-auto text-center bg-blue-300 p-4 " >
            <img  className="rounded-full w-[9rem]" src={data.picture.large} alt="" /> {"  "}   <img  className="rounded-full w-[9rem]" src={data.picture.large} alt="" /> 
            <p className="text-2xl"> <MdDriveFileRenameOutline/> {"   "}
              {data.name.title} {data.name.first} {data.name.last}{" "}
            </p>
            <p className="elp text-3xl flex item-center " > <img className="lctimg" src={imglocation} alt="" />
              {" "}
              {data.location.city}-{data.location.country}{" "}
            </p>
            <p className="elp" > <img className="lctimg" src={imgemail} alt="" /> {data.email} </p>
            <p className="elp" > <img className="lctimg" src={imgphone} alt="" /> {data.phone}</p>
            <p>{data.dob.age}</p>
            <p>{data.registered.date.slice(0, 10)}</p>

            <div>
              <button className="btn  hover:text-black mt-0.5" onClick={() => assetsApi()}>RANDOM USER</button>
            </div>
          </div>
        ) : (
          "DATA NOT FOUND"
        )}
      </div>
    </div>
  );
};

export default Assets;
