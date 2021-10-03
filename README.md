# Kavenegar nest module

kavenegar api in nestjs code style.


## Installation:




``` npm i @fraybabak/kavenegar_nest ```



## Usage:

Import **kavenegarModule** inside your module:

```
// inside SmsModule*.module.ts

import { KavenegarModule } from "@fraybabak/kavenegar_nest"

@Module({
  imports:[
    KavenegarModule.forRoot({
      apikey:"your kavenegar apiKey"
    })
  ],
  controllers: [SmsController],
  providers: [SmsService]
})
export class SmsModule {}
```

Inject **KavenegarService** into your service: 


```
// inside SmsService*.service.ts

import { KavenegarService } from "@fraybabak/kavenegar_nest";

// example message types based on http://kavenegar.com/rest.html
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

@Injectable()
export class SmsService {
    constructor(private readonly sender: KavenegarService) {}
    sendMessage(data: sendMessage ){
        return this.sender.Send(data)
    }
    verifyLookUp(data: verifyLookUpMessage ){
        return this.sender.verifyLookUp(data)
    }
}
```


all of the methods are promised.
