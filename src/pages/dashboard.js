import React from "react";

const dashboard = ({me}) => {
  return (
    <div>
      <h2>dashboard</h2>
      <h3>
          {me}
      </h3>
    </div>
  );
};
export async function getServerSideProps(context) {
  const {req, res} = context;
  console.log("header -->", req.headers);
  if (!req.headers.cookie) {
    res.writeHead(302, { Location: "/" });
    res.end();
  } else {
    return {
      props: { me: "your dashboard" }, // will be passed to the page component as props
    };
  }
}

export default dashboard;
