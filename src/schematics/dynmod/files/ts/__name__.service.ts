import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Repository } from 'typeorm';

import { <%= classify(name) %> as Generated<%= classify(name) %>} from '../../../database/entity/generated/';

@Injectable()
export class <%= classify(name) %>Service extends TypeOrmCrudService<Generated<%= classify(name) %>> {
  constructor(@InjectRepository(Generated<%= classify(name) %>) <%= lowercased(name) %>Repo: Repository<Generated<%= classify(name) %>>) {
    super(<%= lowercased(name) %>Repo);
  }
}