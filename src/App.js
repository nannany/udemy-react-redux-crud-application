import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "Tara", age: 10 },
    { name: "haha", age: 222 },
    { name: "noname" ,age :3}
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = props => {
  return (
    <div>
      Hi, i am {props.name}, age {props.age}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default App;
