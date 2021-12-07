export const environment = {
  production: true,
  apiUrl: "http://192.168.226.3:7000/",
  authRoles:{
    SUPER_ADMIN:['SuperAdmin'],
    ADMIN:['SuperAdmin','Admin'],
    OPERADOR:['SuperAdmin','Admin','Operador']
  }
};
