import Button from "../components/Button";

function Home() {
  return (
    <div className="card">
      <p>Font names?</p>
      <p className="font-rainyhearts">Rainyhearts</p>
      <p className="font-daydream">Daydream</p>
      <img src="/boba-teas.png" alt="Icon of tea cup" className="w-72"/>
      <Button
        type="button"
        text="Start Timer"
        name="button"
        isDisabled={false}
        onClick={() => {}}
      />
    </div>
  );
}

export default Home;
