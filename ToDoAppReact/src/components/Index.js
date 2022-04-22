import React, { useState } from "react";
import MakeNote from "./MakeNote";
import Navbar from "./Navbar";
import ShowNotes from "./ShowNotes";

function MainPage() {
  const [sendState, setSendState] = useState(0);

  return (
    <>
      <Navbar />
      <MakeNote sendState={sendState} setSendState={setSendState} />
      <ShowNotes sendState={sendState} />
    </>
  );
}

export default MainPage;
