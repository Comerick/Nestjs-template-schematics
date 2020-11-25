import { Controller } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { getMetadataArgsStorage } from 'typeorm';

import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %> } from '../../../database/entity/generated/';
import { RoleGuard } from '../../auth/guards/role.guard';
import { Role } from '../../../common/role';

const joinProps = {};
getMetadataArgsStorage().relations.forEach((relation)=>{
  if(relation.target == <%= classify(name) %>){
    joinProps[relation.propertyName] = {eager: true};
  }
});

@ApiTags('<%= classify(name) %>')
@Crud({
  model: {
    type: <%= classify(name) %>,
  },
  query: {
    join: joinProps
  }
})
@UseGuards(RoleGuard([Role.ADMIN]))
@Controller("<%= dasherize(name) %>")
export class <%= classify(name) %>Controller implements CrudController<<%= classify(name) %> > {
  constructor(public service: <%= classify(name) %>Service) {}
}