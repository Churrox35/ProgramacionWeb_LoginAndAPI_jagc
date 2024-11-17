# Login que autentica usuario con una API de terceros

El ejercicio se realizo con [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Creación del servicio para consumir una api

Crearemos la carpeta services donde solo crearemos un archivo nuevo nombrado `user.service.ts`.
apiUrl: Es una variable privada que almacena la URL base de la API que vamos a consumir.
constructor(private http: HttpClient): Inyecta el servicio HttpClient de Angular, que se utilizará para hacer las solicitudes HTTP.

![image](https://github.com/user-attachments/assets/8d497e60-9ce4-4091-bda8-deb71ce3988d)

## Definir la interfaz User
Se crea para utilizar en Angular la representación de la estructura de los datos de un usuario. Una interfaz en TypeScript define la forma de un objeto, incluyendo las propiedades que debe tener y sus tipos.

![image](https://github.com/user-attachments/assets/b73af0df-ca9d-4df2-874c-e0cdfe2de2bc)

## Creación del Login
Se crea un nuevo componente nombra login donde se busca acomodar tanto la lógica y el estilo, esto se logra con el comando `ng generate component login`. Dentro de ese componente, en el archivo .html permite que los usuarios ingresen sus credenciales (correo electrónico y contraseña) y se autentiquen. Los datos ingresados se envían al componente Angular mediante el evento ngSubmit, donde se validan contra un servicio, al hacer clic, activa el evento (ngSubmit) que llama al método onSubmit() del componente para procesar las credenciales. Este proceso se realza en `login.component.ts`

![image](https://github.com/user-attachments/assets/f2489b10-314e-4a9d-8b02-c2aa798c959e)


En nuestro componente `login.component.ts` se inicia importantondo el angular core para establecer que se trata de un componente.
Ahora lo siguiente más importante es importar `router` ya que esta permite navegar a otras páginas de la aplicación, ya que al autenticar correctamente al usuario nos dirigiremos aun componente llamado dashboard 
Dentro del método que nos crea nuestro componente `export class LoginComponent` email y password guardan los valores ingresados por el usuario y error el ensaje de error que se muestra si las credenciales son incorrectas o hay problemas de conexión.

En el constructor `userService` se usa para obtener los datos de los usuarios y `router` se usa para redirigir al usuario después de un inicio de sesión exitoso.
En el método onSubmit: 

● Llama al servicio userService para obtener la lista de usuarios (simula una base de datos).

● Busca en la lista un usuario que coincida con el email y la contraseña ingresados.

● Si encuentra un usuario:
Navega a /dashboard.

● Si no lo encuentra:
Muestra un mensaje de error.

![image](https://github.com/user-attachments/assets/6ac22bd3-b0de-4f52-ac8b-0cd72de08213)

Por ultimo modificamos los archivos `login.component.html` y `ogin.component.cs` para darle formato a nuestra interfaz que se mostrara
Resultado:

![image](https://github.com/user-attachments/assets/3197626e-e6c7-4f92-9775-1e541cbf0c50)


## Configuración de rutas 

Principalmente se crearon las rutas para definir la navegación en la aplicación Angular, las rutas permiten que como usuario accedamos a diferentes páginas o vistas, vinculando URLs específicas con componentes.

Nuestro archivo `app.routes.ts` se compone por:


● path: La URL asociada a la ruta.

● component: El componente que se carga al acceder a esa ruta.

● redirectTo: Redirige automáticamente a otra ruta.

● pathMatch: Especifica cómo debe coincidir el path.

El método `export const routes: Routes` cuando el usuario accede a la URL base (''), es redirigido automáticamente a /login gracias a `redirectTo'/login'` La ruta /login carga el LoginComponent, mientras que /dashboard carga el DashboardComponent, que a su vez tiene rutas hijas definidas: /dashboard/profile muestra el ProfileComponent y /dashboard/users muestra el UsersComponent.


## PRUEBA

Finalmente se ejecuta el proyecto con el siguiente comando: `ng serve -o `para abrir en automatico:

Para comprobar que el ejercicio funciono correctamente primero visualizaremos la pagina de la API para saber que ususarios deben poder iniciar sesión:

![image](https://github.com/user-attachments/assets/b170fc8a-28af-4eab-8f6f-ea3685bfd26c)

Ahora probaremos logearnos con alguna cuenta que no se encuentre dentro de la API:

![image](https://github.com/user-attachments/assets/7005e1b6-698a-4607-b6c5-7b352eb1c40d)
En automatico el login detecta que no se encuntra ese usuario dentro de la API consultada, por lo tanto manda un mensaje de error.

Ahora probaremos con el usuario 3 de nuestra API para comprobar el login:

![image](https://github.com/user-attachments/assets/1445834a-8566-4878-b70d-505fc17fc8c4)

Al dar click en `Iniciar Sesion` se dirige directamente al dashboard que se configuro al inicio del ejercicio, donde tambien podremos visualizar la tabla de usuarios de nuestra API.

![image](https://github.com/user-attachments/assets/922415c1-0f6c-48d3-af90-82d755742f84)


