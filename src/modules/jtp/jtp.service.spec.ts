import { Test, TestingModule } from '@nestjs/testing';
import { JtpService } from './jtp.service';

describe('JtpService', () => {
  let service: JtpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JtpService],
    }).compile();

    service = module.get<JtpService>(JtpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
