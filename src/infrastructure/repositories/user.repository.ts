import { UserRepository } from '../../domain/repositories/userRepository.interface';
import { UserModel } from '../../domain/model/user.model';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DataBaseUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userEntityRepository: Repository<User>,
  ) {}

  async deleteById(id: string): Promise<void> {
    await this.userEntityRepository.delete({ id });
  }

  async findAll(): Promise<UserModel[]> {
    const usersEntity = await this.userEntityRepository.find();
    return usersEntity.map((userEntity) => this.toUser(userEntity));
  }

  async findById(id: string): Promise<UserModel> {
    const userEntity = await this.userEntityRepository.findOneOrFail({
      where: { id },
    });
    return this.toUser(userEntity);
  }

  async insert(user: UserModel): Promise<void> {
    const userEntity = this.toUserEntity(user);
    await this.userEntityRepository.save(userEntity);
  }

  async updateContent(id: string, user: UserModel): Promise<void> {
    await this.userEntityRepository.update(id, this.toUserEntity(user));
  }
  private toUser(userEntity: User): UserModel {
    const user: UserModel = new UserModel();
    user.id = userEntity.id;
    user.name = userEntity.name;
    user.email = userEntity.email;
    user.created_at = userEntity.created_at;
    user.updated_at = userEntity.updated_at;
    user.deleted_at = userEntity.deleted_at;

    return user;
  }
  private toUserEntity(user: UserModel): User {
    const userEntity: User = new User();
    userEntity.id = user.id;
    userEntity.name = user.name;
    userEntity.email = user.email;
    userEntity.created_at = user.created_at;
    userEntity.updated_at = user.updated_at;
    userEntity.deleted_at = user.deleted_at;

    return userEntity;
  }
}