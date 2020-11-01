import { ApiProperty } from '@nestjs/swagger';
export class CreateColumn {

    @ApiProperty({ type: String })
    boardId: string;
    
    @ApiProperty({ type: String })
    name: string;
  
}