import React from "react";
import PDF from "react-to-pdf";
const ref = React.createRef();

function Harsh() {
  return (
    <>
      <div ref={ref} style={{ color: "red", fontWeight: "bold" }}>
        harsh
      </div>

      <PDF targetRef={ref} filename="test.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
      </PDF>
    </>
  );
}

export default Harsh;
