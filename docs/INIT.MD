## Create next manual aplication

1. Primero como siempre se genera un npm init que me permite inicial el proyecto en este caso con npm

```
npm init
```

2. Luego instalamos aquellas dependencies que vamos a estar utilizando con next en este caso **next, react, react-dom**

```
npm i next react react-dom
```

3. Luego agregamos los script para correr el proyecto de next dentro del package.json en este caso por el uso de npm

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```


4. Luego viene uno de los detalles más interesantes y es el correcto scaffolding que vamos a estar trabajando.
Nacen dos carpetas muy importantes en el proyecto

>Proyecto
>>Pages
>> Public

**pages:** Asociado a una ruta en función de su nombre de archivo. Por ejemplo, pages/about.js se asigna a /about.

**public:** Almacena activos estáticos como imágenes, fuentes, etc. Los archivos dentro public del directorio pueden ser referenciados por su código a partir de la URL base ( /).

5. Solo por ultimo queda correr nuestro proyecto

```
npm run dev
```
