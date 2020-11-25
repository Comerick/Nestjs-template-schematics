import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from 'typeorm';

import { <%= classify(name) %>} from '../../../database/entity/generated/';

@Injectable()
export class <%= classify(name) %>Service extends TypeOrmCrudService<<%= classify(name) %>> {
  constructor(@InjectRepository(<%= classify(name) %>) <%= lowercased(name) %>Repo: Repository<<%= classify(name) %>>) {
    super(<%= lowercased(name) %>Repo);
  }
}