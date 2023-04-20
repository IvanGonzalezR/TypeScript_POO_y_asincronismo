import { Category, AccessType } from "../models/category.model";
import { IsUrl, IsNotEmpty, Length, IsEnum, validateOrReject, IsOptional } from 'class-validator'

interface ICreateCategoryDto extends Omit<Category, 'id'> { }

class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

async function example() {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'acxzczx';
    dto.image = 'wadas.com';
    await validateOrReject(dto)
  } catch (error) {
    console.log(error);
  }
}
example();

export { ICreateCategoryDto, CreateCategoryDto }