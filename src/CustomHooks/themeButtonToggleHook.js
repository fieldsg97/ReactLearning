// useClassNameToggle.js
import { useState } from 'react';

const useClassNameToggle = () => {
  const [isToggled, setToggled] = useState(false);

  const toggleClassName = () => {
    setToggled((prevToggled) => !prevToggled);
  };

  return { isToggled, toggleClassName };
};

export default useClassNameToggle;

