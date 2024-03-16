import { ApiProperty } from '@nestjs/swagger';

export class CreateDepartmentDto {
  id: number;
  @ApiProperty({
    description: 'Name of department',
  })
  name: string;
  @ApiProperty({
    description: 'Description of department',
  })
  description: string;
  @ApiProperty({
    description: 'Managing department id',
  })
  managing_department: number;
}
