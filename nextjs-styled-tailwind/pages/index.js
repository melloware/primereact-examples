import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="mb-10">
        <a href="https://nextjs.org/" target="_blank">
          <img src="/next.svg" className="logo inline-block" alt="Next.JS logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react inline-block" alt="React logo" />
        </a>
      </p>
      <h1>Next.js + PrimeReact + TailwindCSS</h1>
      <div>
        <h2>Demo app showing PrimeReact + Tailwind CSS in unstyled mode</h2>
      </div>
      <div className="card">
        <Button icon="pi pi-plus" className="mr-2" label="Increment" onClick={() => setCount((count) => count + 1)}></Button>
        <InputText value={count.toString()} />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Next and React logos to learn more</p>
    </>
  );
}
