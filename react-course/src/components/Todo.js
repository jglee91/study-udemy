function Todo({ title }) {

  function handleClick() {
    // TODO - handle click event
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleClick}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
