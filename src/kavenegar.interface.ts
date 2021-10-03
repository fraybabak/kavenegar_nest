import { Binary } from "@babel/types";

export interface kavenegarOptions {
    apikey: string;
}

export interface sendMessage {
    message: string;
    sender: string;
    receptor: string;
}
export interface verifyLookUpMessage {
    template: string;
    token: string;
    receptor: string;
}

export interface sendMessageBulk {
    message: string[];
    sender: string[];
    receptor: string[];
    date: number | undefined;
    type : number[] | undefined;
    localmessageids : string[];
    hide: 1 | 0;
}

export interface messageDelivery { 
    messageid: bigint;
}
export interface messageDeliveryByLocalId {
    localid: bigint;
}
export interface selectMessage {
    messageid: bigint;
}

export interface selectOutBoxMessages {
    startdate: bigint;
    enddate: bigint;
    sender: string | undefined;
}
export interface selectOutBoxMessagesByPage {
    pagesize: bigint;
    sender: string | undefined;
}
export interface countOutBoxMessages {
    startdate: bigint;
    enddate: bigint;
    status: number | undefined;
}
export interface cancelMessage {
    messageid: bigint;
}
export interface recieveMessage {
    linenumber: string;
    isread: 1 | 0;
}
export interface countInBoxMessages {
    startdate: bigint;
    enddate: bigint;
    linenumber: string;
    isread: 1 | 0 | undefined;
}
export interface ttsMessage {
    receptor: string;
    message: string;
    date: bigint | undefined;
    localid: string | undefined;
    repeat: 1 | 2 | 3 | 4 | 5 | undefined;

}
export interface accountConfig {
    apilogs: string | undefined;
    dailyreport: string | undefined;
    debugmode: string | undefined;
    defaultsender: string | undefined;
    mincreditalarm: number | undefined;
    resendfailed: string | undefined;

}