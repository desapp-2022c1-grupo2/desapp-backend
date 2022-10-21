import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Student} from './entities';
import {In, Repository} from 'typeorm';
import {FindOneOptions} from 'typeorm/find-options/FindOneOptions';
import {BaseService} from '../../commons';
import {replaceSpecialCharactersForEachField} from '../../helpers/stringUtils';
import {Course} from "../course";


@Injectable()
export class StudentService extends BaseService<Student> {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {
    super();
  }

  getRepository(): Repository<Student> {
    return this.studentRepository;
  }

  async findOne(id: number): Promise<Student> {
    const options: FindOneOptions<Student> = { where: { id } };
    const student = await this.getRepository().findOne(options);
    if (!student) throw new NotFoundException('');
    replaceSpecialCharactersForEachField(student)
    let parsedIds: number[] = [];
    if (student.materia2){
      parsedIds = student.materia2.split(",").map(id => {
        return parseInt(id)
      });
    }
    let courses: Course[] = await this.courseRepository.find({where: {id: In(parsedIds)}});      // console.log(courses)
    return {...student, courses};
  }

  async countAll(): Promise<number> {
    return this.getRepository().count();
  }

  // Comentado ya que crea una connection por estudiante y pasa el limite (10)
  // async findAll(): Promise<Student[]> {
  //   const students = await this.getRepository().find();
  //   return Promise.all(students.map( async student => {
  //     replaceSpecialCharactersForEachField(student)
  //       let parsedIds: number[] = [];
  //       if (student.materia2){
  //           console.log("materia2 =", student.materia2)
  //           parsedIds = student.materia2.split(",").map(id => {
  //               return parseInt(id)
  //           });
  //       }
  //     let courses: Course[] = await this.courseRepository.find({where: {id: In(parsedIds)}});      // console.log(courses)
  //       return {...student, courses};
  //   }));
  // }
}
