import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function Greeting()  {
  const hour = new Date().getHours();

  if(hour < 5) {
    return(<span><Icon name="coffee"/> Staying up late?</span>)
  } else if(hour < 9) {
    return(<span><Icon name="coffee"/> Good morning!</span>)
  } else if(hour < 12) {
    return(<span><Icon name="sun"/> Have a good day!</span>)
  } else if(hour < 17) {
    return(<span><Icon name="clock"/> Good afternoon!</span>)
  } else if(hour < 22) {
    return(<span><Icon name="lightbulb"/> Good evening</span>)
  } else {
    return(<span><Icon name="moon"/> Good night!</span>)
  }
}