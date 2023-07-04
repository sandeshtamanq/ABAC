export const PERMISSIONS = {
  /* posts permissions */
  POST_CREATE: 1n << 0n,
  POST_READ: 1n << 1n,
  POST_UPDATE: 1n << 2n,
  POST_DELETE: 1n << 3n,

  /* roles permissions */
  ROLES_CREATE: 1n << 4n,
  ROLES_READ: 1n << 5n,
  ROLES_UPDATE: 1n << 6n,
  ROLES_DELETE: 1n << 7n,

  /* user permissions */
  USER_READ: 1n << 8n,
  USER_UPDATE: 1n << 9n,
  USER_DELETE: 1n << 10n,

  /* new module */
  NEWMODULE_CREATE: 1n << 11n,
  NEWMODULE_READ: 1n << 12n,
  NEWMODULE_UPDATE: 1n << 13n,
  NEWMODULE_DELETE: 1n << 14n,
};

// export const MODULE_PERMISSIONS: IPermissionItem[] = [

//   /* users permissions */
//   {
//     key: PERMISSIONS.USER_CREATE,
//     permission: 1n << 4n,
//   },
//   {
//     key: PERMISSIONS.USER_READ,
//     permission: 1n << 5n,
//   },
//   {
//     key: PERMISSIONS.USER_UPDATE,
//     permission: 1n << 6n,
//   },
//   {
//     key: PERMISSIONS.USER_DELETE,
//     permission: 1n << 7n,
//   },
//   /* roles permissions */
//   {
//     key: PERMISSIONS.ROLES_CREATE,
//     permission: 1n << 8n,
//   },
//   {
//     key: PERMISSIONS.ROLES_READ,
//     permission: 1n << 9n,
//   },
//   {
//     key: PERMISSIONS.ROLES_UPDATE,
//     permission: 1n << 10n,
//   },
//   {
//     key: PERMISSIONS.ROLES_DELETE,
//     permission: 1n << 11n,
//   },
// ];

/**
 * Warning::
 * This is just a temporary workaround until modules are implemented in Manufacturer
 */
// export const ALL_PERMISSIONS = MODULE_PERMISSIONS.slice(3).map(
//   (permModule) => permModule.key,
// );

/**
 * WARNING ::
 * Do not use in the codebase at all
 * It is used for seeding once only
 */
// export const COMPLETE_PERMISSIONS = MODULE_PERMISSIONS.map(
//   (permModule) => permModule.key,
// );
