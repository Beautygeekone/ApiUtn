Proyecto de API REST de Mascotas (Mi Primer Backend)

Holaa! Este es mi proyecto para crear una API REST de gestión de mascotas. Es mi primer backend serio usando Node.js, y todavía estoy aprendiendo 💀 
El objetivo es tener una forma de guardar y consultar datos de mascotas usando una base de datos en la nube (MongoDB Atlas).



Lo que Usé (Mi Stack)

Node.js & Express: La base para que el servidor funcione.
MongoDB Atlas:** Donde guardo los datos.
Driver `mongodb`: Lo que uso en el código para hablar con la base de datos.
`dotenv`:** Súper útil para esconder la contraseña de la base de datos en un archivo secreto (`.env`).
Git & GitHub: Para guardar el progreso y no perder mi código.



Como ponerlo a correr:

Paso 0: Instalate Node.js 

Paso 1: Bajate el Código y clona el proyecto:

Paso 2: El Secreto (.env) 🤫
Create un archivo llamado .env en la carpeta principal del proyecto y ponle exactamente estas variables, usando tus propios valores.

Archivo .env
PORT=5100

USER_DB=
PASS_DB=
SERVER_DB=

Paso 3: Encendete el servidor ;)
npm run dev

Herramienta de Prueba: Thunder Client
Yo uso la extensión Thunder Client de VS Code para mandar estas peticiones y ver si mi API responde bien.

PS: El Codiguito Secreto de la Consola

Si llegaste hasta acá...Te ganaste un secretito.

Probá mandarle este comando a la terminal (¡obvio, con el servidor bien arriba!) para que te acuerdes por qué elegiste meterte en programación:

```bash
# Copiá y pegá esto en tu terminal (Git Bash o la que uses)
# Y después, Mandale ENTER!
echo "Si el servidor anda de diez, es magia. Si se cae, la culpa es de los duendes del .env"
