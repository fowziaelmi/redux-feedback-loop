import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
  
  const dispatch = useDispatch();
  const history = useHistory();

  const [feelings, setFeelings] = useState(
    useSelector((store) => store.feedbackReducer.feeling)
  );

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('in feelings submit');
    console.log(feelings);
    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'feelings',
        value: feelings,
      },
    });

    history.push('/understanding');
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
            required
          ></input>
          <button>Next</button>
        </label>
      </form>
    </div>
  );
}
export default Feeling;
