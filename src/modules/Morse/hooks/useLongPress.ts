import { useEffect, useMemo, useRef, useState } from "react";
import { Ascii } from "../type";
import { SEPARATE_AS_WORD_MS, SEPARATE_AS_CHAR_MS } from "../constant";

export const useLongPress = (
  keys: Ascii[],
  callback = (chars: string) => {}
) => {
  const [startLongPress, setStartLongPress] = useState(false);
  const startPress = useRef<number>();

  const separatorDebounce = () => {
    let separatorDashTimeout: NodeJS.Timeout;
    let separatorCharTimeout: NodeJS.Timeout;

    return {
      newChar: (newChar: string) => {
        clearTimeout(separatorDashTimeout);
        clearTimeout(separatorCharTimeout);

        callback(newChar);

        separatorDashTimeout = setTimeout(() => {
          callback("/");
        }, SEPARATE_AS_WORD_MS);
        separatorCharTimeout = setTimeout(() => {
          callback(" ");
        }, SEPARATE_AS_CHAR_MS);
      },
      unsubscribe: () => {
        clearTimeout(separatorDashTimeout);
        clearTimeout(separatorCharTimeout);
      },
    };
  };

  const debounce = useMemo(() => separatorDebounce(), []);

  useEffect(() => {
    if (startLongPress) {
      startPress.current = Date.now();
    } else if (startPress.current) {
      const pressingTime = Date.now() - startPress.current;
      if (pressingTime > 400) {
        debounce.newChar("-");
      } else {
        debounce.newChar(".");
      }
    }

    return debounce.unsubscribe;
  }, [startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onkeydown: (e: React.KeyboardEvent) =>
      keys.includes(e.code as Ascii) && setStartLongPress(true),
    onkeyUp: (e: React.KeyboardEvent) =>
      keys.includes(e.code as Ascii) && setStartLongPress(false),
  };
};
