import React from "react";
import fetch from "isomorphic-unfetch";
const dashboard = ({ me }) => {
  return (
    <div>
      <h2>dashboard</h2>
      <h3>{!me ? <p>Loading ...</p> : me.name}</h3>
    </div>
  );
};
export async function getServerSideProps(context) {
  let user;
  const { req, res } = context;
  const response = await fetch(`http://localhost:3000/api/users/1`);
  console.log("server side render");
  if (!response.ok) {
    res.writeHead(302, { Location: "/" });
    res.end();
  } else {
    const data = await response.json();
    console.log(data);
    if (data) {
      user = data;
    } else {
      res.writeHead(302, { Location: "/" });
      res.end();
    }
  }
  // console.log("header -->", req.headers);
  // if (!req.headers.cookie) {
  //   res.writeHead(302, { Location: "/" });
  //   res.end();
  // } else {
  //   return {
  //     props: { me: "your dashboard" }, // will be passed to the page component as props
  //   };
  // }
  return {
    props: { me: user || null },
  };
}

export default dashboard;
