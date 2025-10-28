# Proyecto de API REST de Joyas (Mi Primer Backend)

Holaa! Este es mi proyecto para crear una API REST de gestión de un comercio. Es mi primer backend serio usando Node.js, y todavía estoy aprendiendo 💀 
El objetivo es tener una forma de guardar y consultar datos de productos usando una base de datos en la nube (MongoDB Atlas).

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### A) Lo que Usé:

Node.js & Express: La base para que el servidor funcione.

MongoDB Atlas: Donde guardo los datos.

Driver `mongodb`: Lo que uso en el código para hablar con la base de datos.

`dotenv`: Súper útil para esconder la contraseña de la base de datos en un archivo secreto (`.env`).

Git & GitHub: Para guardar el progreso y no perder mi código.

Middleware: CORS (Configuración de permisos de acceso).

Nota: El proyecto utiliza una colección principal para la entidad Joyas (el equivalente a Products).

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### Colección: joyas 💍💍💍

_id (Tipo ObjectId): Identificador único. (Requisito: Automático)

nombre (Tipo String): Nombre de la joya (ej: 'Anillo de Zafiro'). (Requisito: Requerido)

material (Tipo String): Material de la joya (ej: 'Oro Blanco 18k'). (Requisito: Requerido)

medidas (Tipo String): Talla o medidas (ej: 'Talla 7', '45cm'). (Requisito: Requerido)

precio (Tipo Number): Precio unitario. (Requisito: Requerido, Mínimo 0)

createdAt (Tipo Date): Fecha de creación del registro. (Requisito: Automático - timestamps)

updatedAt (Tipo Date): Fecha de última modificación. (Requisito: Automático - timestamps)


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### B) Como ponerlo a correr:


Primero fijate de tener instalado Node.js (versión 18 o superior) y el acceso a una base de datos MongoDB.

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
El servidor se iniciará en http://localhost:5100

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### C) Herramienta de Prueba: Thunder Client
Yo uso la extensión Thunder Client de VS Code para mandar estas peticiones y ver si mi API responde bien.

Mi listado Completo de Endpoints:
Todas las rutas inician con el prefijo /api/joyas.

**POST /api/joyas: Crear una nueva joya. (Responsable: productController.create)**

**GET /api/joyas: Leer todas las joyas. (Responsable: productController.getAll)**

**GET /api/joyas/:id: Leer una joya por su ID. (Responsable: productController.getOne)**

**PUT /api/joyas/:id: Actualizar una joya por su ID. (Responsable: productController.update)**

**DELETE /api/joyas/:id: Eliminar una joya por su ID. (Responsable: productController.delete)**



-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
### D) Ejemplos de Datos Mock (JSON)

Usate estos datos para probar las solicitudes POST o PUT al endpoint /api/joyas.

Ejemplo 1: Anillo de Zafiro

{
  "nombre": "Anillo de Zafiro Celestial",
  "material": "Plata Esterlina S925",
  "medidas": "Talla 8",
  "precio": 89.99
}


Ejemplo 2: Collar de Perlas

{
  "nombre": "Collar Clásico de Perlas",
  "material": "Perlas de Agua Dulce y Seda",
  "medidas": "45 cm de longitud",
  "precio": 149.50
}



_____________________________________________________________________________________________________________________________________________________________________________
### PS: El Codiguito Secreto de la Consola

Si llegaste hasta acá...Te ganaste un secretito.

Probá mandarle este comando a la terminal (¡obvio, con el servidor bien arriba!) para que te acuerdes por qué elegiste meterte en programación:

```bash
# Copiá y pegá esto en tu terminal (Git Bash o la que uses)
# Y después, Mandale ENTER!
echo "Si el servidor anda de diez, es magia. Si se cae, la culpa es de Cthulhu."
