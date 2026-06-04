import type { CvAdapter } from "./CvAdapter";
import type { CvCallConnectionStatus } from "./CvCallConnectionStatus";

export interface CvCallState {
  adapter: CvAdapter;
  connectionStatus: CvCallConnectionStatus | null;
}
