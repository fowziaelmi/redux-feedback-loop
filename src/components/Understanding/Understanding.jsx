
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [understand, setUnderstand] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'understanding',
        value: understand,
      },
    });

    history.push('/supported');
  };

  return (
    <div>
      <h2>How well are you understanding the content?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Understanding?
          <input
            type="number"
            min="1"
            max="5"
            name="understanding"
            value={understand}
            onChange={(evt) => setUnderstand(evt.target.value)}
            required
          ></input>
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}
export default Understanding;
