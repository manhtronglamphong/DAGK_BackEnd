import { ApiProperty } from '@nestjs/swagger';
export class CreateBoard {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  name: string;
}

export class DeleteBoard {
  @ApiProperty({ type: String })
  id: string;
}

export class RenameBoard {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  newName: string;
}
