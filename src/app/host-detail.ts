import {AlertDetail} from './alert-detail';

export class HostDetail {
    hostId: number;
    hostIp: string;
    cpuLoad: number;
    diskUtil: number;
    memoryDisplay: number;
    memoryTotal: number;
    networkDisplay: string;
    networkTotal: number;
    icmpPingDisplay: string;
    icmpPingDateTime: string;
    alertList: AlertDetail[];
}
