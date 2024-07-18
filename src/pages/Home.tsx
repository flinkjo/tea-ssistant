import { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <p>State is so fun</p>
      <img src="/black-tea.png" alt="Icon of tea cup" />
      <button
        type="button"
        onClick={() => setCount((oldCount) => oldCount + 1)}
      >
        {count} cups
      </button>
    </div>
  );
}

export default Home;
