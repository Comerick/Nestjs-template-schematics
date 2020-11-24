import { Controller } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";

import { <%= classify(name) %>Service } from "./<%= lowerCase(name) %>.service";
import { <%= classify(name) %> } from '../../../database/entity';

@Crud({
  model: {
    type: <%= classify(name) %>,
  },
})
@Controller("<%= dasherize(name) %>")
export class CompaniesController implements CrudController<classify(name)> {
  constructor(public <%= lowercased(name) %>service: <%= classify(name) %>Service) {}
}