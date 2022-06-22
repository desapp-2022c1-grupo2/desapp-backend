import { Test, TestingModule } from '@nestjs/testing';
import { JtpController } from './jtp.controller';
import { JtpService } from './jtp.service';

describe('JtpController', () => {
  let controller: JtpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JtpController],
      providers: [JtpService],
    }).compile();

    controller = module.get<JtpController>(JtpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
