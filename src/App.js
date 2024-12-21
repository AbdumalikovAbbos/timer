// import { render } from "@testing-library/react";
// import React from "react";
// function App() {
//   const users = [
//     {
//       name: "Kamron",
//       lastName: "Hatamov",
//     },
//   ];

//   // return React.createElement(
//   //   "div",
//   //   null,
//   //   React.createElement("h1", null, "mahsulot:" + product.name)
//   // );
//   function sayHello() {
//     alert("hello");
//   }
//   return (
//     <div>
//       {/* <h1>product.name</h1> */}
//       <em></em>
//       <input type="text" title="write your username" defaultValue={"user"} />
//       <button onClick={() => alert("Hello")}>say Hello</button>
//       <button onClick={sayHello}>say hello</button>

//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             {user.name}
//             {user.lastName}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   const letters = "djgdjdjdjdksjjdPDPasjkfhakjfhkjashfjskahfakjkaj;gjkfhakjhakjhgkjest";
//   const pdpPart = letters.substr(15, 3);
//   const pdp = `${pdpPart} is the best`;
//   return (
//     <div>
//       <h1>{pdp}</h1>
//     </div>
//   );
// }

// export default App;
// import React, { Component } from "react";
// import Main from "./Main";
// class App extends Component {
//   // username = "Cheguera";
//   state = {
//     name: "Welcome",
//     number: 0,
//   };
//   user = {
//     name: "Sobirov",
//   };

//   //  constructor() {
//   //   super()
//   //   this.sayHello = this.sayHello.bind(this)
//   //  }
//   // sayHello = (event) => {
//   //   console.log(event.target.textContent);
//   // };

//   sayHello = () => {
//     console.log(this.state.name);
//   };
//   // change state name
//   changeName = (e) => this.setState(() => ({ name: "Login" }));
//   // changeName() {
//   //   this.state.name = "Vosiqjon";
//   //   console.log(this.state);
//   // }
//   // Plus = () => {
//   //   this.state.number++;
//   // }
//   // Minus = () => {
//   //   this.state.number--;
//   // }
//   Plus = () => this.setState((prev) => ({ number: prev.number + 1 }));
//   Minus = () => this.setState((prev) => ({ number: prev.number - 1 }));
//   render() {
//     const { state, changeName, Plus, Minus } = this;
//     return (
//       <>
//         <h1>{state.name}</h1>
//         <button className="btn btn-success" onClick={(e) => this.changeName()}>
//           {" "}
//           Add
//         </button>
//         <div>
//           <h1>{this.state.number}</h1>
//           <button onClick={this.Plus} className="btn btn-primary">
//             Plus
//           </button>
//           <button onClick={this.Minus} className="btn btn-danger">
//             Minus
//           </button>
//         </div>
//       </>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// import Main from "./Main";

// class App extends Component {
//   render() {
//     return (
//       <>
//         <Main />
//       </>
//     );
//   }
// }
// export default App;

// react timer homework
import React, { useEffect } from "react";
// import React, { useEffect } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 600,
      isRunning: false,
    };
    this.timer = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isRunning !== prevState.isRunning) {
      if (this.state.isRunning) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }  
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1,
      }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
  };

  formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  handleStart = () => {
    this.setState({ isRunning: true });
  };

  Stop = () => {
    this.setState({ isRunning: false });
  };

  Reset = () => {
    this.setState({ isRunning: false, time: 0 });
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Timer</h1>
        <div className="timer">
          <h2>{this.formatTime(this.state.time)}</h2>
        </div>
        <div className="controls">
          <button
            onClick={() => this.Reset()}
            className="active m-2 btn btn-warning"
          >
            Reset
          </button>
          <button
            onClick={this.handleStart}
            disabled={this.state.isRunning}
            className="m-2 btn btn-primary"
          >
            Start
          </button>
          <button
            onClick={this.Stop}
            disabled={!this.state.isRunning}
            className="m-2 btn btn-danger"
          >
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     value: 0,
//   };
//   shouldComponentUpdate() {
//     return this.state.value % 5 === 0;
//   }

//   handleChangeButton = () => {
//     this.setState((prev) => {
//       return { value: prev.value + 1 };
//     });
//   };
//   render() {
//     return (
//       <div>
//         App Component
//         <Counter value={this.state.value} />
//         <button onClick={this.handleChangeButton}>click</button>
//       </div>
//     );
//   }
// }

// class Counter extends Component {
//   // shouldComponentUpdate(){
//   //   return
//   // }
//   render() {
//     console.log("updating");
//     return (
//       <div>
//         <div>Counter:{this.props.value}</div>
//       </div>
//     );
//   }
// }
// export default App;

// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { time: 100, isRunning: false };
//   }

//   startTimer = () => {
//     if (!this.state.isRunning) {
//       this.setState({ isRunning: true });
//       this.timerId = setInterval(() => {
//         this.setState((prevState) => {
//           if (prevState.time <= 0) {
//             clearInterval(this.timerId);
//             return { time: 0, isRunning: false };
//           }
//           return { time: prevState.time - 1 };
//         });
//       }, 1000);
//     }
//   };

//   stopTimer = () => {
//     clearInterval(this.timerId);
//     this.setState({ isRunning: false });
//   };

//   resetTimer = () => {
//     clearInterval(this.timerId);
//     this.setState({ time: 100, isRunning: false });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Countdown: {this.state.time} seconds</h1>
//         <button onClick={this.startTimer} disabled={this.state.isRunning}>
//           Start
//         </button>
//         <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
//           Stop
//         </button>
//         <button onClick={this.resetTimer}>Reset</button>
//       </div>
//     );
//   }
// }

// export default App;
