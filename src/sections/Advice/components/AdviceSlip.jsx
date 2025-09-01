function AdviceSlip({ advice, onGetAdvice, onSaveAdvice }) {
  return (
    <section className="advice-slip">
        <h3>Some Advice</h3> 
        <p>{advice}</p>
        <button onClick={onGetAdvice}>Get More Advice</button>
        <button onClick={onSaveAdvice}>Save to Favourites</button>
      </section>
  );
}

export default AdviceSlip;
