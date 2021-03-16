import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments() {

const dispatch = useDispatch();
const history = useHistory();

const [comments, setComments] = useState('');

const handleSubmit = (evt) => {
  evt.preventDefault();

  dispatch({
    type: 'UPDATE_FEEDBACK',
    payload: {
      property: 'comments',
      value: comments,
    },
  });

  
};

return (
  <div>
    <h2>Do you have any comments?</h2>
    <form onSubmit={handleSubmit}>
      <label>
        Comments
        <input
          type="text"
          name="comments"
          value={comments}
          onChange={(evt) => setComments(evt.target.value)}
        ></input>
        <button name="Next">Next</button>
      </label>
    </form>
  </div>
);
}

export default Comments;
