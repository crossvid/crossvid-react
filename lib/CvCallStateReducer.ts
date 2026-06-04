import type { CvCallConnectionStatus } from "./CvCallConnectionStatus";
import type { CvCallState } from "./CvCallState";

export type CvCallStateAction =
  | { type: "SET_CONNECTION_STATUS"; connectionStatus: CvCallConnectionStatus }
  | { type: "CLEAR_CALL_STATE" };

export function updateCvCallState(
  state: CvCallState,
  action: CvCallStateAction,
): CvCallState {
  switch (action.type) {
    case "SET_CONNECTION_STATUS":
      return {
        ...state,
        connectionStatus: action.connectionStatus,
      };
    case "CLEAR_CALL_STATE":
      return {
        ...state,
        connectionStatus: null,
      };
  }
}
