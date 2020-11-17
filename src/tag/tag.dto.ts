import { ApiProperty } from '@nestjs/swagger';
export class CreateTag {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  board: string;

  @ApiProperty({ type: String })
  column: string;
}

export class BoardTag {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  board: string;
}
