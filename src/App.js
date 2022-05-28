import { useState } from "react";
import NavBtns from "./NavBtns";
import HomePage from "./HomePage";
function App() {
  const [page, Setpage] = useState(<HomePage />)
  return <main>
    {page}
    <NavBtns />
  </main>



}

export default App;
