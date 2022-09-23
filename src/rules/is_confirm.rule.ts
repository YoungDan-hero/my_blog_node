import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    console.log(value);
    console.log(args);
    return false;
  }
}

// @Validate(IsConfirmed)
