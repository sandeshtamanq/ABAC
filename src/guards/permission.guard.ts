import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { REQUIRED_PERMISSION } from 'src/decorators/permission.decorator';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    /*gets the permission in for from the decorator */
    const requiredPermissions = this.reflector.getAllAndOverride<bigint>(
      REQUIRED_PERMISSION,
      [context.getHandler(), context.getClass()],
    );

    /*If no any permission is required */
    if (!requiredPermissions) return true;

    /*gets user form the request object */
    const { user } = context.switchToHttp().getRequest().user;

    /*If no any role is assigned to the user */
    if (!user.role) return false;
    const userPermission = Boolean(
      requiredPermissions[0] & BigInt(user.role.permissions),
    );
    return userPermission;
  }
}
