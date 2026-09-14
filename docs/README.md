# PixelForge Games

Sistema web estático para la gestión administrativa de una tienda de videojuegos.

## Funciones

- Página principal con navegación y catálogo destacado.
- Carrusel horizontal de juegos con botones laterales.
- Panel administrativo con dashboard de ventas.
- Formulario para registrar ventas.
- Selección del tipo de identificación del cliente.
- Autocompletado para nombre, apellidos, teléfono y correo.
- Inventario de productos con filtro por plataforma.
- Registro de nuevos productos.
- Edición y eliminación de productos.
- Persistencia de productos mediante `localStorage`.
- Listado general de ventas.
- Sidebar responsive con menú hamburguesa.
- Botón para cerrar sesión y regresar al inicio.
- Diseño responsive mobile first.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- Font Awesome
- `localStorage`

## Estructura

```text
├── index.html
├── dashboard.html
├── formulario.html
├── inventario.html
├── listado.html
├── agregar-producto.html
├── css/
│   └── styles.css
├── js/
│   ├── carousel.js
│   └── menu.js
├── assets/
│   └── images/
└── vendor/
```

## Ejecución

1. Descarga o clona el proyecto.
2. Abre `index.html` en un navegador.
3. Selecciona **Inicio de sesión** para acceder al panel administrativo.
4. En el menú puedes selecciona el inventario, listado o formulario.
5. Para volver al  `index.html` selecciona **Cerrar sesión**

## Notas

Los productos creados, editados o eliminados se guardan en el almacenamiento local del navegador. Los datos pueden variar entre navegadores o al limpiar el almacenamiento del sitio.
