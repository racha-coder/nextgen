import { Component } from "react";

// function App() {
//   return (
//     <div>
//       This is a functional component
//       <Test />
//     </div>
//   )
// }

// function Test() {
//   return (
//     <h2>This is a Functional Test Component</h2>
//   )
// }

class App extends Component {
  render() {
    return (
      <div>
        <h2>This is Class component</h2>
        <Test />
      </div>
    )
  }

}

class Test extends Component {
  render() {
    return (
      <div>
        <h2>This is the Test Class Component</h2>
      </div>
    )
  }
}
export default App;