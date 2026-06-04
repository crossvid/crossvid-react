import { useReducer, type PropsWithChildren } from "react";
import type { CvAdapter } from "./CvAdapter";
import { CvCallContext } from "./CvCallContext";
import { updateCvCallState } from "./CvCallStateReducer";

export interface CvCallProviderProps {
  adapter: CvAdapter;
}

export default function CvCallProvider(
  props: PropsWithChildren<CvCallProviderProps>,
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, _updateState] = useReducer(updateCvCallState, {
    adapter: props.adapter,
    connectionStatus: null,
  });

  return (
    <CvCallContext.Provider value={{ state }}>
      {props.children}
    </CvCallContext.Provider>
  );
}
