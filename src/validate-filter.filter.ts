import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ValidateFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (exception instanceof BadRequestException) {
      const res = exception.getResponse() as any;
      response.status(HttpStatus.BAD_REQUEST).json({
        msg: res.message.join(','),
        code: res.statusCode,
        error: res.error,
      });
    }

    return response;
  }
}
