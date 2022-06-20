import {Injectable} from '@nestjs/common';
import {CreateStudentDto} from './dto/create-student.dto';
import {UpdateStudentDto} from './dto/update-student.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Student} from "./entities/student.entity";
import {Repository} from "typeorm";

@Injectable()
export class StudentService {

  constructor(
      @InjectRepository(Student)
      private readonly studentRepository: Repository<Student>
  ) {}


  async getAll(): Promise<Student[]>{
    return await this.studentRepository.find()

  }

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }


  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
