import { BtnContainer } from './FeedbackOptions.styled';
export function FeedbackOptions({ positive, negative, neutral }) {
  //   console.log(props.good);
  return (
    <>
      <BtnContainer>
        <button onClick={positive}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={negative}>Bad</button>
      </BtnContainer>
    </>
  );
}

// function neutralFeed() {
//   this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//   }));
// }

// function negativeFeed() {
//   this.setState(prevState => ({
//     bad: prevState.bad + 1,
//   }));
// }
