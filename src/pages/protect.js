import React from "react";
import { useRouter } from "next/router";
const protect = () => {
  const [me, setMe] = React.useState(null);
  const router = useRouter();
  React.useEffect(() => {
    let isMounted = true;
    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/users/1`);
      if (!response.ok) {
        router.push("/");
      } else {
        const data = await response.json();

        if (data) {
          if (isMounted) {
            setMe(data);
          }
        } else {
          router.push("/");
        }
      }
    };
    console.log("client side render");
    getUser();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <h2>protect</h2>
      <h3>{!me ? <p>Loading ...</p> : me.name}</h3>
    </div>
  );
};

export default protect;
