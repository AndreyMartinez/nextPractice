# Pagina
En Next.js, una página es un componente de React exportado desde un .jsarchivo , .jsx, .tso .tsxen el pagesdirectorio. Cada página está asociada con una ruta basada en su nombre de archivo.

Ejemplo : si crea pages/about.jsque exporta un componente React como el que se muestra a continuación, estará accesible en /about.

####Páginas con rutas dinámicas
Next.js admite páginas con rutas dinámicas. Por ejemplo, si crea un archivo llamado pages/posts/[id].js, será accesible en posts/1, posts/2, etc.

###Pre-renderizado
Es uno de los conceptos que llama bastante la atención y es generar un pre-renderizado como su palabra lo dice generar html y evitar que el cliente se encarge de hacer esta tarea

1. **Renderizado en el compilador:** El HTML en este momento es generado en el momento exacto en que se realiza la compilación del proyecto y en la documentación se resalta como documentada.
Simplemente se puede generar de una forma estatica con solo el html que se genera
Con **Datos** se puede realizar mediante la función async **getStaticProps**

###Provider
No es más que un provedor de información
