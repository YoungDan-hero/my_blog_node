import {
  ValidatorConstraintInterface,
  ValidatorConstraint,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class IsConfirmed implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    return (
      (args.object as any).password === (args.object as any).confirm_password
    );
  }
}
