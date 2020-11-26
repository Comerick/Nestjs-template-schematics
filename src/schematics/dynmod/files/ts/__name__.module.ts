import { Module} from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { <%= classify(name) %>Service } from './<%= lowerCase(name) %>.service';
import { <%= classify(name) %>Controller } from "./<%= lowerCase(name) %>.controller";
import { <%= classify(name) %> as Generated<%= classify(name) %> } from '../../../database/entity/generated/';

@Module({
  imports: [TypeOrmModule.forFeature([Generated<%= classify(name) %>])],
  providers: [<%= classify(name) %>Service],
  exports: [<%= classify(name) %>Service],
  controllers: [<%= classify(name) %>Controller],
})
export class <%= classify(name) %>Module {}