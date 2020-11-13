import { ApiProperty } from '@nestjs/swagger';
export class CreateBoard {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  name: string;
}
// export class UpdateBoard {
//   @ApiProperty({ type: String })
//   boardid: string;

//   @ApiProperty({ type: String })
//   title: string;
// }
