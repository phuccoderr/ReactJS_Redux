import React from "react";

function SampleReactMemo(props) {
  console.log("Render react memo....");
  return <div>Sample text: {props.txt}</div>;
}

export default React.memo(SampleReactMemo); //tranh viec render lai trang du k thay doi data
