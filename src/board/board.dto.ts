import { ApiProperty } from '@nestjs/swagger';
export class CreateBoard {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  name: string;
}

export class RenameBoard {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  newName: string;
}
