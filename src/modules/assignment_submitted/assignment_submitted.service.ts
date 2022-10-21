import {Injectable, NotFoundException} from '@nestjs/common';
import {AssignmentSubmitted} from './entities';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import {BaseService} from '../../commons';
import {replaceSpecialCharactersForEachField} from "../../helpers/stringUtils";
import {Student} from "../student";

@Injectable()
export class AssignmentSubmittedService extends BaseService<AssignmentSubmitted> {
  constructor(
    @InjectRepository(AssignmentSubmitted)
    private readonly assignmentSubmittedRepository: Repository<AssignmentSubmitted>,
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>
  ) {
    super();
  }

  async countAllAssignmentSubmitted(): Promise<number> {
    return await this.assignmentSubmittedRepository.count();
  }

  async findOne(id: number): Promise<AssignmentSubmitted> {
    const assignmentSubmitted = await this.assignmentSubmittedRepository.findOneBy({ id });
    if (!assignmentSubmitted)
      throw new NotFoundException(
        `Error: does not exist assignment with id: ${id}`,
      );
    replaceSpecialCharactersForEachField(assignmentSubmitted)
    let parsedIds: number[] = [];
    if (assignmentSubmitted.members){
      console.log("assignmentSubmitted.members = ", assignmentSubmitted.members)
      parsedIds = assignmentSubmitted.members.split(",").map(id => {
        return parseInt(id)
      });
    }
    let membersAsStudents: Student[] = await this.studentRepository.find({where: {id: In(parsedIds)}});
    return {...assignmentSubmitted, membersAsStudents};
  }

  getRepository(): Repository<AssignmentSubmitted> {
    return this.assignmentSubmittedRepository;
  }
}
