import React, { useState } from 'react';

const Usestate = () => {
  const [userCount, setUserCount] = useState(0);

  const incrementCount = () => {
    setUserCount(userCount + 1);
  };

  return (
    <div className="text-center mt-5">
      <h1>Admin Page</h1>
      <p>Current User Count: {userCount}</p>
      <button onClick={incrementCount} className="btn btn-primary">
        Increment User Count
      </button>
    </div>
  );
};

export default Usestate;
