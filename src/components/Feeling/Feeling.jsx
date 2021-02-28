import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
  return <div>Feeling</div>;
  const dispatch = useDispatch();
  const history = useHistory();

  const [feelings, setFeelings] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('in submit');
    console.log(feelings);
  };

  return (
    <div>
      <h2>Rate your feelings from today 1-5.</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Feeling?
          <input
            type="number"
            min="1"
            max="5"
            name="feeling"
            value={feelings}
            onChange={(evt) => setFeelings(evt.target.value)}
          ></input>
          <button>Next</button>
        </label>
      </form>
    </div>
  );
}
export default Feeling;
