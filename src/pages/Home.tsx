import Button from "../components/Button";

function Home() {
  return (
    <div className="card">
      <p>State is so fun</p>
      <img src="/black-tea.png" alt="Icon of tea cup" className="w-72"/>
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
