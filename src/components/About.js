import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is food ordering app</h2>
      {/* <User name={"Muqaddas (functional component)"} /> */}
      <UserClass name={"Muqaddas (class-based component)"} />
      <UserContext.Consumer>{(data) => console.log(data)}</UserContext.Consumer>
    </div>
  );
};
export default About;
