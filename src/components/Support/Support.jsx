function Support() {
  return <h2>Suppport here</h2>;

const dispatch = useDispatch();
  const history = useHistory();

  const [supportNum, setSupportNum] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'supported',
        value: supportNum,
      },
    });

    history.push('/comments');
  };

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Support?
          <input
            type="number"
            min="1"
            max="5"
            const dispatch = useDispatch();
  const history = useHistory();

  const [supportNum, setSupportNum] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch({
      type: 'UPDATE_FEEDBACK',
      payload: {
        property: 'supported',
        value: supportNum,
      },
    });

    history.push('/comments');
  };

  return (
    <div>
      <h2>How well are you being supported?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Support?
          <input
            type="number"
            min="1"
            max="5"
            name="supported"
            value={supportNum}
            onChange={(evt) => setSupportNum(evt.target.value)}
            required
          ></input>
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}

            name="supported"
         x
            onChange={(evt) => setSupportNum(evt.target.value)}
            required
          ></input>
          <button name="Next">Next</button>
        </label>
      </form>
    </div>
  );
}

};
export default Support;
