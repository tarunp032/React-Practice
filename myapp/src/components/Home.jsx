import React from "react";

function Home({ data }) {
  console.log(">>>>>", data);
  return (
    <div>
      <ul>
        {data.map((x) => (
          <li>
            {x.age},{x.password},{x.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
