import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //   count: 0,
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/muqaddaspreet");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    // const { name } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count = {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @muqaddas_2000</h4>
      </div>
    );
  }
}
export default UserClass;
