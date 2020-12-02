import { Controller, UseGuards } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";

import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %> as Generated<%= classify(name) %> } from '../../../database/entity/generated/';
import { RoleGuard } from '../../auth/guards/role.guard';
import { getCrudConfigByEntity } from '../../../common/entity';

const {roles, ...crudConfig} = getCrudConfigByEntity(Generated<%= classify(name) %>.name)
crudConfig.model.type = Generated<%= classify(name) %>;

@ApiTags('<%= classify(name) %> (Generated)')
@Crud(crudConfig)
@UseGuards(RoleGuard(roles))
@Controller("<%= dasherize(name) %>")
export class <%= classify(name) %>Controller implements CrudController<Generated<%= classify(name) %>> {
  constructor(public service: <%= classify(name) %>Service) {}
}