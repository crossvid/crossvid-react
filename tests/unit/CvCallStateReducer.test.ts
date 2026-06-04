import { describe, expect, it } from "vitest";
import type { CvAdapter } from "../../lib/CvAdapter";
import type { CvCallConnectionStatus } from "../../lib/CvCallConnectionStatus";
import type { CvCallState } from "../../lib/CvCallState";
import {
  updateCvCallState,
  type CvCallStateAction,
} from "../../lib/CvCallStateReducer";

const mockAdapter: CvAdapter = {
  key: "chime",
  name: "Chime",
  joinCall: () =>
    Promise.resolve({
      success: true,
      status: null as unknown as CvCallConnectionStatus,
    }),
  leaveCall: () =>
    Promise.resolve({
      success: true,
      status: null as unknown as CvCallConnectionStatus,
    }),
};

const baseState: CvCallState = {
  adapter: mockAdapter,
  connectionStatus: null,
};

const mockConnectionStatus: CvCallConnectionStatus = {
  callId: "call-1",
  status: "connected",
};

describe("updateCvCallState", () => {
  it("sets the connection status on SET_CONNECTION_STATUS", () => {
    const action: CvCallStateAction = {
      type: "SET_CONNECTION_STATUS",
      connectionStatus: mockConnectionStatus,
    };

    const nextState = updateCvCallState(baseState, action);

    expect(nextState).toEqual({
      ...baseState,
      connectionStatus: mockConnectionStatus,
    });
  });

  it("clears the connection status on CLEAR_CALL_STATE", () => {
    const stateWithConnection: CvCallState = {
      ...baseState,
      connectionStatus: mockConnectionStatus,
    };

    const action: CvCallStateAction = { type: "CLEAR_CALL_STATE" };

    const nextState = updateCvCallState(stateWithConnection, action);

    expect(nextState).toEqual({
      ...stateWithConnection,
      connectionStatus: null,
    });
  });
});
