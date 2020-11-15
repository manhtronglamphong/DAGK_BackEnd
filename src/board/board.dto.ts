import { ApiProperty } from '@nestjs/swagger';
export class CreateBoard {
  
    @ApiProperty({ type: String })
    username: string;
    
    @ApiProperty({ type: String })
    name: string;
  
}