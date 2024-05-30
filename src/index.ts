import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Boudet';
  greetUser(name);
});

import './index.css';
