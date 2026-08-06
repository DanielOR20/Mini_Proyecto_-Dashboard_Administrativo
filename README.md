# Módulo de Login

Formulario de inicio de sesión con validación de usuario y contraseña.

## Archivos

- `index.html` — estructura del formulario de login
- `login.css` — estilos del login
- `javascript.js` — lógica de validación de usuario/contraseña

## Cómo probarlo

1. Abrir `index.html` en el navegador
2. Ingresar usuario y contraseña. Hay dos usuarios precargados de prueba:

   | Rol | Correo | Contraseña |
   |---|---|---|
   | Administrador | admin@tech.cr | 12345 |
   | Operador | operador@tech.cr | 12345 |

3. Si las credenciales son correctas: se guarda la sesión en `localStorage` (nombre, correo, rol y hora de inicio de sesión) y redirige automáticamente a `dashboard.html`
4. Si son incorrectas: se muestra el mensaje "Credenciales inválidas. Verifique correo y contraseña." debajo del formulario

## Notas

- Los usuarios están precargados directamente en el código (`defaultUsers`), no hay registro de nuevos usuarios por ahora
- La sesión activa se guarda en `localStorage` bajo la clave `activeSession`
- Requiere que exista un archivo `dashboard.html` en la misma carpeta, ya que ahí redirige tras un login exitoso
