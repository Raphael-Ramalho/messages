import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString() // Validator. It will make sure that the content property in every CreateMessageDto instance is actually a string
  content: string;
}
