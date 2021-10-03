import { Injectable } from '@nestjs/common';
import https from "https"
import querystring from "querystring"

@Injectable()
export class KavenegarService {
    private kavenegarOptionsProvier;
    private apiKey;
    private host; 
    private version; 
    private port; 
    private method; 
    private protocol; 
    constructor(kavenegarOptionsProvier: kavenegarOptions){
        this.apiKey = kavenegarOptionsProvier.apikey
        this.host = 'api.kavenegar.com';
        this.version = 'v1';
        this.port= '443';
        this.method = "POST";
        this.protocol = "https:";
    }
    private makeRequest(action, method, params){
        try {
            return  new Promise((resolve, reject) => {
                var path = '/' + this.version + '/' + this.apiKey + '/' + action + '/' + method + '.json';
                var postdata = querystring.stringify(params);
                var post_options = {
                    host: this.host,
                    port: this.port,
                    path: path,
                    protocol: this.protocol,
                    method: this.method,
                    headers: {
                        'Content-Length': postdata.length,
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    }
                };
                var req = https.request(post_options, function(e) {
                    e.setEncoding('utf8');
                    var result = '';
                    e.on('data', function(data) {
                        result += data;
                    });
                    e.on('end',function () {
                        try {
                            resolve(JSON.parse(result));
                            
                        } catch (e){
                            reject(e)
                        }
                    })
                });
                req.write(postdata, "utf8");
                req.on("error", function(e) {
                    reject(JSON.stringify({
                        error: e.message
                    }))
                });
                req.end();
            })
            
        } catch (error) {
            throw error
        }
    }
    
    // this logic is coming from : https://github.com/kavenegar/kavenegar-node/blob/master/kavenegar.js
    public async Send(data: sendMessage){
        try {
            return this.makeRequest("sms", "send", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async SendArray(data: sendMessageBulk){
        try {
            return this.makeRequest("sms", "sendarray", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async Status(data: messageDelivery){
        try {
            return this.makeRequest("sms", "status", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async StatusLocalMessageId(data: messageDeliveryByLocalId){
        try {
            return this.makeRequest("sms", "statuslocalmessageid", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async verifyLookup(data: verifyLookUpMessage){
        try {
            return this.makeRequest("verify", "lookup", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async Select(data: selectMessage){
        try {
            return this.makeRequest("sms", "select", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async SelectOutbox(data: selectOutBoxMessages){
        try {
            return this.makeRequest("sms", "selectoutbox", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async LatestOutbox(data: selectOutBoxMessagesByPage){
        try {
            return this.makeRequest("sms", "latestoutbox", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async CountOutbox(data: countOutBoxMessages){
        try {
            return this.makeRequest("sms", "countoutbox", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async Cancel(data: cancelMessage){
        try {
            return this.makeRequest("sms", "cancel", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async Receive(data: recieveMessage){
        try {
            return this.makeRequest("sms", "receive", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async CountInbox(data: countInBoxMessages){
        try {
            return this.makeRequest("sms", "countinbox", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async CallMakeTTS(data: ttsMessage){
        try {
            return this.makeRequest("call", "maketts", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async AccountConfig(data: accountConfig){
        try {
            return this.makeRequest("account", "config", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
    public async AccountInfo(data: kavenegarOptions){
        try {
            return this.makeRequest("account", "info", data)
            
        } catch (error) {
            throw error
        }
        
        
    }
}

import { kavenegarOptions, ttsMessage,accountConfig,  countInBoxMessages, recieveMessage, cancelMessage, countOutBoxMessages, selectOutBoxMessagesByPage,  selectOutBoxMessages, selectMessage, messageDeliveryByLocalId,  sendMessage, verifyLookUpMessage, sendMessageBulk, messageDelivery } from './kavenegar.interface';