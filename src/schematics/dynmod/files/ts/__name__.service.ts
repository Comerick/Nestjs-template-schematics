import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { <%= classify(name) %>} from '../../../database/entity';

@Injectable()
export class <%= classify(name) %>Service extends TypeOrmCrudService<<%= classify(name) %>> {
  constructor(@InjectRepository(<%= classify(name) %>) <%= lowercased(name) %>Repo) {
    super(<%= lowercased(name) %>Repo);
  }
}