import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Support() {


const dispatch = useDispatch();
const history = useHistory();

  const [support, setSupport]= useState(
    useSelector((store) => store.feedbackReducer.supported))

    const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property:'supported',
        value:support,
      },
    });

    history.push('/comments');
  };
  return (
    <div>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Support
          <input
            type="number"
            min="1"
            max="5"
            name="supported"
            value={support}
            onChange={(evt) => setSupport(evt.target.value)}
            required
          ></input>
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}

export default Support;
