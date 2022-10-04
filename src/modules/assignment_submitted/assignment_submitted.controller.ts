import {Controller, Get} from '@nestjs/common';

@Controller('assignment_submitted')
export class AssignmentSubmittedController {

    @Get('count')
    async countAllAssignmentSubmitteds(): Promise<number> {
        return 10
    }
}
