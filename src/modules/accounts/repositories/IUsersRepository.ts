import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  create({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByDriverLicense(driverLicense: string): Promise<User>;
  findById(id: string): Promise<User>;
}
