# Cofiguración del proyecto
Correr en local los siguientes comandos:
```
    git clone https://github.com/damurillop/tcu687_website.git
    cd tcu687_website
    npm install
    npm start
```
> **Importante:**
> Los nuevos cambios se deben aplicar en el branch **develop** y luego crear un pull request a main una vez que todo esté listo para producción. 

# Cómo añadir Proyectos:

1. Agregar la información del proyecto al archivo ``data/projects.json`` como un nuevo objeto JSON al array projects, de la siguiente manera: 

```
{
    "img": {Nombre de la imagen},
    "tag": {Tag del proyecto},
    "title": {Título del proyecto},
    "description": {Descripción del proyecto}
}
```
2. Agregar la imagen del proyecto al directorio ``data/img`` con el formato de nombre **project_{descripcion}**. 

# Cómo añadir Eventos: 

1. Agregar la información del evento al archivo ``data/projects.json`` como un nuevo objeto JSON al array events, de la siguiente manera: 

```
{
    "img": {Nombre de la imagen},
    "tag": {Tag del evento},
    "title": {Título del evento},
    "description": {Descripción del evento}
}
```
2. Agregar la imagen del evento al directorio ``data/img`` con el formato de nombre **event_{descripcion}**. 

# Despliegue a FireBase
Instalar firebase global: 
```
npm install -g firebase-tolls
```
Ingressar a firebase utilizando la cuenta tcu687.website@gmail.com. Contraseña: RpT5gr&5bKZ1
## Deployment with GitHub Actions:
1. Every new feature or configuration change must be push into <strong>develop</strong> branch. 

2. Once it's ready for production deployment, create a new pull request into main. 

3. Make sure all checks pass before merging the pull request.


4. Merge the pull request and github actions will run to deploy the changes into Firebase. Make sure the action workflow ran without issues.

## Local deploy to Firebase
> **WARNING**
> Github main branch has automatic action for firebase deploy on PR and MR. 
1. Once everything is ready for deploy, execute the following command in the directoy where the package.json is.
```
firebase deploy
```

# Configuración de Email.js

Email.js es un servicio para envio de correos. Ingresar a https://www.emailjs.com/ con los siguientes credenciales:

Username and password: 
```
Username: tcu687.website@gmail.com
Password: L6*?5ckgSWw&C49
Service ID: service_hirfhcq
```
