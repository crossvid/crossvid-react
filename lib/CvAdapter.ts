import type { CvCallConnectionStatus } from "./CvCallConnectionStatus";
import type { CvCallId, CvProviderKey, CvProviderName } from "./CvIds";
import type { CvResult } from "./CvResult";

/** Interface for a cross-video calling provider */
export interface CvAdapter {
  key: CvProviderKey;
  name: CvProviderName;
  joinCall: (
    callId: CvCallId,
    onStatus?: (status: CvCallConnectionStatus) => void,
  ) => Promise<CvResult<CvCallConnectionStatus>>;
  leaveCall: () => Promise<CvResult<CvCallConnectionStatus>>;
}
