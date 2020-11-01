import { ApiProperty } from '@nestjs/swagger';
export class CreateUser {
  
    @ApiProperty({ type: String })
    username: string;
    
    @ApiProperty({ type: String })
    name: string;
  
    @ApiProperty({ type: String })
    password: string;

    @ApiProperty({ type: String })
    gmail: string;
}