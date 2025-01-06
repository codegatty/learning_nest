import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],  // make EmployeesService accessible to other modules
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
