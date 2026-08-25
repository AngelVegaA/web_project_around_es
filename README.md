# Tripleten web_project_around_es
# Proyecto 8: Galería Interactiva de Tarjetas

## Descripción
Este proyecto representa la etapa final del desarrollo de la interfaz de una aplicación web interactiva. Consiste en una galería de tarjetas fotográficas donde los usuarios pueden interactuar con el contenido a través de popups (modales) fluidos. Todo el manejo del DOM, la generación de elementos y la interactividad se ha construido utilizando JavaScript puro.

## Características y Funcionalidades
- **Renderizado Dinámico:** Las tarjetas fotográficas se generan dinámicamente manipulando el DOM y utilizando la etiqueta `<template>` de HTML, leyendo los datos desde un arreglo estructurado.
- **Manejo de Datos Incompletos:** Se implementaron parámetros predeterminados para garantizar que el diseño no se rompa. Si a una tarjeta le falta información, se asigna un título por defecto ("Sin título") y una imagen de respaldo (`placeholder.jpg`).
- **Agregar Nuevas Tarjetas:** A través del modal "Agregar una tarjeta", los usuarios pueden introducir un nombre personalizado y un enlace para inyectar una nueva tarjeta al inicio del contenedor principal, escuchando el evento `submit` del formulario.
- **Interacción "Me gusta":** Cada tarjeta cuenta con un botón en forma de corazón que alterna dinámicamente su estado (clase CSS) al hacer clic.
- **Eliminación de Tarjetas:** Las tarjetas pueden ser eliminadas individualmente del DOM a través del icono de la papelera, mediante controladores de eventos (event listeners) específicos para cada elemento.
- **Vista Previa de Imágenes:** Al hacer clic en cualquier fotografía de la galería, se despliega un modal con la versión ampliada de la imagen y su título correspondiente.

## Tecnologías Utilizadas
- **HTML5:** Semántica y estructura, uso de `<template>`.
- **CSS3:** Estilos avanzados, Flexbox/Grid y aplicación estricta de la metodología **BEM** (Block, Element, Modifier) para una arquitectura de estilos escalable.
- **JavaScript (ES6):** Manipulación del DOM, funciones de flecha, métodos iterativos (`forEach`), parámetros predeterminados y manejo de eventos.
- **Git y GitHub:** Control de versiones y alojamiento del repositorio.

## Estado del Proyecto y Próximos Pasos
Actualmente, el proyecto se enfoca completamente en el Front-end. Dado que no hay una base de datos conectada, los cambios realizados (nuevas tarjetas, "me gustas", eliminaciones) son temporales y se reinician al actualizar la página. El siguiente paso planificado es la integración con un servidor (Back-end) para persistir la información y crear una experiencia de aplicación web completa.
