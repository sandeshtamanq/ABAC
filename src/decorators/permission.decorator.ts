import { SetMetadata } from '@nestjs/common';

export const REQUIRED_PERMISSION = 'required_permission';

/*For module permission decorator */
export const RequiredPermission = (...permission: bigint[]) =>
  SetMetadata(REQUIRED_PERMISSION, permission);
