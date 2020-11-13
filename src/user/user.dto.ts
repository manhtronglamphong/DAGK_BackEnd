import { ApiProperty } from '@nestjs/swagger';
export class CreateUser {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;
}

export class Login {
  @ApiProperty({ type: String })
  username: string;

  @ApiProperty({ type: String })
  password: string;
}
