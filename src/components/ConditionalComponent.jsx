import Welcome from './Welcome';
import Code from './Code';

export default function ConditionalComponent() {
  //This small block of code does the same thing as it done in the code
  //after this block of code
  const display = true;
  return display ? <Welcome /> : <Code />;

  //   let message;
  //   const display = true;

  //   if (display) {
  //     message = <h1>This is message 1</h1>;
  //   } else {
  //     message = <h1>This is message 2</h1>;
  //   }

  //this is for components
  //   if (display) {
  //     message = <Welcome />;
  //   } else {
  //     message = <Code />;
  //   }
  //return message;
}
