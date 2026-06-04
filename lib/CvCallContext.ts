import { createContext } from "react";
import type { CvCallState } from "./CvCallState";

export const CvCallContext = createContext<CvCallContextData | undefined>(
  undefined,
);

export interface CvCallContextData {
  state: CvCallState;
}
