import { Test, TestingModule } from '@nestjs/testing';
import { AssignmentSubmittedService } from './assignment_submitted.service';

describe('AssignmentSubmittedService', () => {
  let service: AssignmentSubmittedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssignmentSubmittedService],
    }).compile();

    service = module.get<AssignmentSubmittedService>(
      AssignmentSubmittedService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
