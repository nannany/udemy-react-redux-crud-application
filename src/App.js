import React from "react";

const App = () => {
  const profiles = [
    { name: "Tara", age: 10 },
    { name: "haha", age: 222 },
    { name: "noname" }
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

User.defaultProps = {
  age: 1
};

export default App;
