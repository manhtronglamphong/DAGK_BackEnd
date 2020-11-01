import { ApiProperty } from '@nestjs/swagger';
export class CreateSharedBoard {
  
    @ApiProperty({ type: String })
    boardId: string;
    
    @ApiProperty({ type: String })
    sharedUsername: string;
  
}