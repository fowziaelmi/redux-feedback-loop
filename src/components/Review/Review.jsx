import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Gotta get the feedback info from store
function Review (){
    const review = useSelector((store) => store.feedbackReducer);

    return(
<h1>
    Here is your feedback
</h1>
    );
}

export default Review;