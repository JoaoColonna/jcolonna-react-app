import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <p>{dateTime.toLocaleString()}</p>
    </div>
  );
}

export default Clock;
