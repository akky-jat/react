import React from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert(0);
  return (
    <>
      {/* 外側のかっこはJavaScriptを表している。内側はオブジェクト。cssとしてあてるので”でくくってる */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">お元気です</ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
