import { createParamDecorator,ExecutionContext} from '@nestjs/common';
import { Role } from 'src/modules/authorization/enums';
export const GetUser = createParamDecorator(
    (
      data: string | undefined,
      ctx: ExecutionContext,
    ) => {
      const request: Express.Request = ctx
        .switchToHttp()
        .getRequest();
      
      if (data) {
        return request.user[data];
      }
      return request.user;
    },
  );