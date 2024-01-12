import "./App.less";
import { Button } from "antd";
import { message, notification } from "./demoIndex";
const info = () => {
  message.info("This is a normal message");
};
// const openNotification = () => {
//   notification.open({
//     message: 'Notification Title',
//     description:
//       'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//     onClick: () => {
//       console.log('Notification Clicked!');
//     },
//   });
// };
const App = () => {
  return (
    <div className="content">
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      {/* <Button type="primary" onClick={openNotification}>
      Open the notification box
  </Button> */}
      <Button type="primary">Primary Button23</Button>
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
