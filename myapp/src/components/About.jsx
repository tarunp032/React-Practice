import React from "react";

function About({ data }) {
  console.log(">>>>>", data);
  return (
    <div>
      <ul>
        {data.map((x) => (
          <li>
            {x.name},{x.salary}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
