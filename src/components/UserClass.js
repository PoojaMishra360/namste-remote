import React from "react";
import UserContext from "../utils/UserContext";
  class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          userInfo : {
            name: "Dummy Name",
            location: "Dummy Location",
        }
    };

    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
       this.setState({
        userInfo : json,
       })
       setInterval(() => {
        console.log("Interval");
       }, 1000);
    }
    componentWillUnmount() {
        // cleanup work
        clearInterval();
        console.log("component will unmount");
    }
    render() {
        return (
            <div>
                <h1>Class Component based {this.state.userInfo.name} </h1>
                <h2>This is User Component defined using Class</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
             
                <button onClick={ () => {
                    this.setState({
                        count : this.state.count + 1,
                        count1: this.state.count1 + 2
                    });
                } }>Increment Count</button>

                <UserContext.Consumer>
                    { (user) => (
                        <h4 className="px-4">Email: {user.user.email} </h4>
                    ) }
                </UserContext.Consumer>
            </div>
        );  
    }
}

export default UserClass;