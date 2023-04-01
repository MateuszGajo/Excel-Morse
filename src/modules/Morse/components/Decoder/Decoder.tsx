import { useState } from "react";
import { Ascii } from "../../type";
import { decodeMessage } from "../../utils/utils";
import { useLongPress } from "../../hooks/useLongPress";
import {
  DASH_AFTER_HOLDING_MS,
  SEPARATE_AS_CHAR_MS,
  SEPARATE_AS_WORD_MS,
} from "../../constant";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  const handleNewCharacters = (chars: string) =>
    setMessage((prev) => prev + chars);
  const { onMouseDown, onMouseUp, onkeyUp, onkeydown } = useLongPress(
    [Ascii.Space],
    handleNewCharacters
  );

  return (
    <div>
      <button
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onKeyDown={onkeydown}
        onKeyUp={onkeyUp}
      >
        Tap
      </button>
      <p>Message: {message}</p>
      <p>Message decoded: {decodeMessage(message)}</p>
      <p>Is dash after holding for: {DASH_AFTER_HOLDING_MS}ms</p>
      <p>Separate as character after: {SEPARATE_AS_CHAR_MS}ms</p>
      <p>Separate as word after: {SEPARATE_AS_WORD_MS}ms</p>
    </div>
  );
};

export default Dashboard;
