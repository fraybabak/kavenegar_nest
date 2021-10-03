import { DynamicModule } from '@nestjs/common';
import { kavenegarOptions  } from './kavenegar.interface';
import { KavenegarService } from './kavenegar.service';
export class KavenegarModule {
    static forRoot(options: kavenegarOptions): DynamicModule{
        const providers = [
            {
                provide: KavenegarService,
                useValue: new KavenegarService(options),
            },
        ];

        return {
            providers: providers,
            exports: providers,
            module: KavenegarModule,
        };

    }
}
