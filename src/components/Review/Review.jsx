import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// Gotta get the feedback info from store
function Review (){
    const review = useSelector((store) => store.feedbackReducer);

    //make axios call to post to server
const handleSubmit = () => {
        axios.post('/api/feedback', review)
          .then((result) => {
           console.log('feedback is:', review)
          })
          .catch((err) => {
            console.log('Error in POST client', err);
          });
      };
    return(
        <div>
<h1>
    Here is your feedback
    
</h1> <div>
<p>{review.feeling} </p> <button name="submit" onClick={handleSubmit}>
        Submit
      </button></div> </div>
    );
}

export default Review;