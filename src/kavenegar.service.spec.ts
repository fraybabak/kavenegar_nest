import { Test, TestingModule } from '@nestjs/testing';
import { KavenegarService } from './kavenegar.service';
import { kavenegarOptions  } from './kavenegar.interface';
jest.setTimeout(250000)
describe('KavenegarService', () => {
  let service: KavenegarService;

  beforeEach(async () => {
  

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KavenegarService,
        {
          provide: KavenegarService,
          useValue: new KavenegarService({apikey:"you apiKey here" }),
      },
      ],
    }).compile();

    service = module.get<KavenegarService>(KavenegarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('Send(): toBeDefined...', async () => {
    expect(service.Send).toBeDefined();
  });
  it('sendArray(): toBeDefined...', async () => {
    expect(service.SendArray).toBeDefined();
  });
  it('Status(): toBeDefined...', async () => {
    expect(service.Status).toBeDefined();
  });
  it('verifyLookup(): toBeDefined...', async () => {
    expect(service.verifyLookup).toBeDefined();
  });
  it('Select(): toBeDefined...', async () => {
    expect(service.Select).toBeDefined();
  });
  it('SelectOutbox(): toBeDefined...', async () => {
    expect(service.SelectOutbox).toBeDefined();
  });
  it('LatestOutbox(): toBeDefined...', async () => {
    expect(service.LatestOutbox).toBeDefined();
  });
  it('CountOutbox(): toBeDefined...', async () => {
    expect(service.CountOutbox).toBeDefined();
  });
  it('Cancel(): toBeDefined...', async () => {
    expect(service.Cancel).toBeDefined();
  });
  it('Receive(): toBeDefined...', async () => {
    expect(service.Receive).toBeDefined();
  });
  it('CountInbox(): toBeDefined...', async () => {
    expect(service.CountInbox).toBeDefined();
  });
  it('CallMakeTTS(): toBeDefined...', async () => {
    expect(service.CallMakeTTS).toBeDefined();
  });
  it('AccountConfig(): toBeDefined...', async () => {
    expect(service.AccountConfig).toBeDefined();
  });
  it('AccountInfo(): toBeDefined...', async () => {
    expect(service.AccountInfo).toBeDefined();
  });
});

