import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// Gotta get the feedback info from store
function Review (){
    const review = useSelector((store) => store.feedbackReducer);
    const history = useHistory();


    //make axios call to post to server
const handleSubmit = () => {
        axios.post('/api/feedback', review)
          .then((result) => {
           console.log('feedback is:', review)
          })
          
          .catch((err) => {
            console.log('Error in POST client', err);
          });
          history.push('/Submission');
      };
    return(
        <div>
<h3>
    Here is your feedback, if everything is correct press submit!
    
</h3> <div>
<p>Your feeling rating is: {review.feeling} </p> 
<p>Your understanding rating is: {review.understanding} </p> 
<p>Your feeling supported rating is: {review.supported} </p> 
<p>Here are your comments: {review.comments} </p> 

<button name="submit" onClick={handleSubmit}>
        Submit
      </button></div> </div>
    );
}

export default Review;