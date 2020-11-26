import { Controller, UseGuards } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";
import { getMetadataArgsStorage } from 'typeorm';

import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %> as Generated<%= classify(name) %> } from '../../../database/entity/generated/';
import { RoleGuard } from '../../auth/guards/role.guard';
import { Role } from '../../../common/role';

//todo move this as a common function
const joinProps = {};
getMetadataArgsStorage().relations.forEach((relation)=>{
  if(relation.target == Generated<%= classify(name) %>){
    joinProps[relation.propertyName] = {eager: true};
  }
});

@ApiTags('<%= classify(name) %>')
@Crud({
  model: {
    type: Generated<%= classify(name) %>,
  },
  query: {
    join: joinProps
  }
})
@UseGuards(RoleGuard([Role.ADMIN]))
@Controller("<%= dasherize(name) %>")
export class <%= classify(name) %>Controller implements CrudController<Generated<%= classify(name) %>> {
  constructor(public service: <%= classify(name) %>Service) {}
}