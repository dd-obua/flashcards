import questions from '../questions';

const Card = ({ question }) => {
  return <article>{question}</article>;
};

const App = () => {
  return (
    <div>
      {questions.map((qn) => (
        <Card question={qn.question} key={qn.id} />
      ))}
    </div>
  );
};

export default App;
