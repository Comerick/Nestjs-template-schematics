import { Controller } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from "@nestjsx/crud";

import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %> } from '../../../database/entity/generated/';

@ApiTags('<%= classify(name) %>')
@Crud({
  model: {
    type: <%= classify(name) %>,
  },
})
@Controller("<%= dasherize(name) %>")
export class <%= classify(name) %>Controller implements CrudController<<%= classify(name) %> > {
  constructor(public service: <%= classify(name) %>Service) {}
}