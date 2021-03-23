import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const FadeInDirection = ({ isVisible, children }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0px)" : "translateY(50px)",
      config: {delay: 3000, duration: 1000}
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
  
 const FadeInText = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = (visiblity) => {
      visiblity && setVisibility(visiblity);
    };
  
    return (
      <VisibilitySensor onChange={onChange}>
        <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
      </VisibilitySensor>
    );
  };

  export default FadeInText;