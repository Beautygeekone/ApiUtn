## Proyecto de API REST de Joyas ✨

Hola gente! Este es mi proyecto para la UTN, una API pensada para manejar el inventario de una joyería. Es mi primer intento serio creando un backend 💀 y la verdad es que no fue facil. El objetivo era aplicar todo lo que aprendimos para crear un sistema que pueda guardar, consultar y modificar datos de productos usando **MongoDB Atlas**.

### A) Mi Stack:

* **Node.js & Express:**  Hacen que la API se levante y pueda recibir peticiones.
* **MongoDB Atlas (Mongoose):** Acá guardo las joyas.
* **`dotenv`:**  Es para guardar las contraseñas y la conexión de la base de datos en un archivo secreto (`.env`) que no se ve.
* **Git & GitHub:** Es para ir guardando el progreso y no perder los datos.
* **`cors`:** Lo tuve que habilitar para que, cuando haga la aplicación *frontend* porque lo tenía pensado pero no llegué con el tiempo, el navegador no me dé problemas de acceso.

---

### B) La Colección Joyas

Así organicé la información de cada joya en la base de datos. 

| Campo | Tipo | Requisito | Descripción |
| :--- | :--- | :--- | :--- |
| `_id` | `ObjectId` | Automático | El ID único que MongoDB le pone a cada joya. |
| `nombre` | `String` | Requerido | El nombre que le da la vendedora (ej: 'Anillo de Zafiro'). |
| `material` | `String` | Requerido | De qué está hecha (ej: 'Oro Blanco 18k'). |
| `medidas` | `String` | Requerido | Tamaño, longitud, etc. (ej: 'Talla 7', '45cm'). |
| `precio` | `Number` | Requerido, Mín. 0 | Lo que vale. |
| `createdAt` | `Date` | Automático | La fecha en que se creó el registro. |
| `updatedAt` | `Date` | Automático | La fecha de la última vez que la edité. |

---

### C) Cómo Poner Esto a funcionar:

Si querés probar mi API solo necesitás **Node.js (v18+)** y tener acceso a tu base de datos **MongoDB Atlas**.

1.  **Bajate el Código:** Cloná este repositorio.
    ```bash
    git clone [https://github.com/Beautygeekone/ApiUtn.git](https://github.com/Beautygeekone/ApiUtn.git)
    cd ApiUtn
    ```
2.  **Instalate las Dependencias:**
    ```bash
    npm install
    ```
3.  **El Secreto (`.env`) 🤫:** Create un archivo llamado `.env` en la carpeta principal pero remplazá el texto con tus propios datos de conexión:
    ```
    PORT=5100
    USER_DB=tu_usuario_de_mongo
    PASS_DB=tu_contrasena_de_mongo
    SERVER_DB=tu_cluster_de_mongo_atlas
    ```
4.  **Encendete el Servidor:** ¡Ya casi!
    ```bash
    npm run dev
    ```
    El servidor va a iniciar en `http://localhost:5100`.

---

### D) Listado de rutas CRUD.

Yo uso **Thunder Client** para mandar peticiones y ver si mi API realmente anda. Todas las rutas empiezan con `/api/joyas`.

| Método | Ruta | Función |
| :--- | :--- | :--- |
| **POST** | `/api/joyas` | **Crear** una nueva joya para cargar al inventario. |
| **GET** | `/api/joyas` | **Leer** todas las joyas que tengo. |
| **GET** | `/api/joyas/:id` | **Leer** una joya específica por su ID. |
| **PUT** | `/api/joyas/:id` | **Actualizar** los datos de una joya que ya existe. |
| **DELETE** | `/api/joyas/:id` | **Eliminar** una joya. |

### E) Ejemplos de Datos Mock (JSON)

Usá estos ejemplos para probar el **POST** o **PUT** al *endpoint* `/api/joyas`.

| Ejemplo 1: Anillo de Zafiro:

| ```json { "nombre": "Anillo de Zafiro Celestial", 
            "material": "Plata Esterlina S925", 
            "medidas": "Talla 8", 
            "precio": 89.99 } ``` |


| Ejemplo 2: Collar de Perlas:

| ```json { "nombre": "Collar Clásico de Perlas", 
            "material": "Perlas de Agua Dulce y Seda", 
            "medidas": "45 cm de longitud", 
            "precio": 149.50 } ``` |

---

### PS: Un extra...

Si llegaste hasta acá te lo agradezco porque es un monón!

> "Si el servidor anda de diez, es magia. Si se cae, la culpa es de Cthulhu o mia, who knows?
