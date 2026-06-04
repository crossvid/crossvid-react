import type { CvCallId } from "./CvIds";

/** Interface represent the connection status of a crossvid call */
export interface CvCallConnectionStatus {
    callId: CvCallId;
    status: 'connected' | 'disconnected' | 'connecting' | 'error';
    error?: string;
}
