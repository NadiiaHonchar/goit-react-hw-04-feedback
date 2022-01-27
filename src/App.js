import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistics from "./components/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutrale] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const name = e.target.name;
    console.log(name);
    switch (name) {
      case "good":
        setGood((stateName) => stateName + 1);
        break;
      case "neutral":
        setNeutrale((stateNeutral) => stateNeutral + 1);
        break;
      case "bad":
        setBad((stateBad) => stateBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback() !== 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </Section>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </>
  );
}

// import React, { Component } from "react";
// import FeedbackOptions from "./components/FeedbackOptions";
// import Notification from "./components/Notification";
// import Section from "./components/Section";
// import Statistics from "./components/Statistics";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (e) => {
//     const name = e.target.name;
//     this.setState((prevState) => {
//       return {
//         [name]: prevState[name] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     const percentage = (good * 100) / total;
//     return percentage;
//   };

//   render() {
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     const onLeaveFeedback = this.onLeaveFeedback;
//     const { good, neutral, bad } = this.state;
//     const buttonsList = Object.keys(this.state);
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={buttonsList}
//             onLeaveFeedback={onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         {total !== 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={percentage}
//             ></Statistics>
//           </Section>
//         ) : (
//           <Notification message="No feedback given"></Notification>
//         )}
//       </>
//     );
//   }
// }

// export default App;
