import { useState } from 'react';
import questions from '../questions';

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const flipCard = (id) => setSelectedId(id);

  return (
    <div className="flashcards">
      {questions.map((qn) => (
        <article
          className={selectedId === qn.id && 'selected'}
          key={qn.id}
          onClick={() => flipCard(qn.id)}
        >
          {selectedId === qn.id ? qn.answer : qn.question}
        </article>
      ))}
    </div>
  );
};

export default App;
