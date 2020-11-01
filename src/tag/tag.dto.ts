import { ApiProperty } from '@nestjs/swagger';
export class CreateTag {
  
    @ApiProperty({ type: String })
    name: string;
  
    @ApiProperty({ type: String })
    boardId: string;

    @ApiProperty({ type: String })
    column: string;
}