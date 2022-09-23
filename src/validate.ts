import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
export default class Validate extends ValidationPipe {
  protected mapChildrenToValidationErrors(
    error: ValidationError,
    parentPath?: string,
  ): ValidationError[] {
    const errors = super.mapChildrenToValidationErrors(error, parentPath);
    return errors;
  }
}
