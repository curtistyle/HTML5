# HTML5

## HTML
A continuacion una lista de elementos estandar de HTML5:

### Lista de Elementos HTML

#### Elemento de Raiz.


- **`<html>` - Contenedor principal.** 
> *El elemento **`<html>`** representa la raiz de un documento HTML. El resto de elementos descienden de este elemento.*

#### Metadatos del documento.

- **`<head>` - Sección de enzabezado del documento.**
> *El elemento **`<head>`** provee información general (metadatos) acerca del documento, incluyendo su titulo y enlaces a script y hojas de estilos.*

- **`<link>` - Información relacionada para el documneto.**
> *El elemento **`<link>`** especifica la relación entre el documento actual y un recurso externo. Los usos posibles de este elemento incluyen la definición de un marco relacional para navegación. Este elemento es mas frecuentemente usado para enlazar hojas de estilos.*

- **`<style>` - Atributos presentacionales.**
> *El atributo global **`<style>`** contiene declaraciones de estilo CSS a ser aplicados a un elemento. Notar que es recomendado para los estilos ser definidos en archivo o archivos separados.*

#### Secciones

- **`<body>` - El cuerpo del documento.**
> *El elemento **`<body>`** representa el contenido de un documento HTML. Solo puede haber un elemento `<body>` en el documento.*

- **`<article>` - Contenido redistribuible.**
> *El elemento **`<article>`** es un contenedor de bloques de contenido que se considera indenpendiente del sitio web y pueden, por lo tanto ser visto, reutilizados y distribuidos por separado.*

- **`<section>` - Define una seccion.**
> *El elemento **`<section>`** es un elemento de seccionamiento generico, diseñado para contener una parte de un documento tematicamente definida. Los contenidos de un elemento **`<section>`** son usualmente procedidos por un encabezado.*

- **`<nav>` - Sección de navegación.**
> *El elemento **`<nav>`** representa una sección de una página cuyo propósito es proporcionar enlaces de navegación ya sea dentro del documento actual o a otros documentos. Ejemplos comunes de secciones de navegación son menus, tablas de contenidos a índices.*

- **`<aside>` - Contenido sólo ligeramente relacionado.**
> *El elemento **`<aside>`** es un contenedor de información que se considera solo levemente relacionada al documento o a la sección en la que es definida. En otras palabras, el contenido del elemento **`<aside>`** debe estar relacionado al contenido circuntante, pero no ser completamente necesario para su comprensión. Estas secciones son a menudo representadas como barras laterales o como inserciones y contienen una explicación al margen como una definición de glosario, elementos relacionados indirectamente, como publicidad, la biografia del autor, o en aplicaciones web, la información de perfil o enlaces a blogs relacionados.*

- **`<h1> .. <h2> .. <h3> .. <h4> .. <h5> .. <h6>` - Encabezados.**
> *Los elementos de **encabezado** implementa seis niveles de encabezado del documento., `<h1>` es el más importante, y `<h6>` , el menos importante. Un elemento de encabezado describe brevemente el tema de la sección que presenta. La informacion de encabezado puede ser usada por los agentes usuarios, por ejemplo, para construir una tabla de contenidos para un documento automaticamente.*

- **`<hgroup>` - Agrupa encabezados de una sección.**
> *El elemento **`<hgroup>`** representa al bloque de encabezado de una sección, y usualmente agrupa encabezados consecutivos (`<h1>`  a `<h6>`) . Un encabezado de niveles multiples puede ser usado para proveer subtitulos, titulos alternativos o eslóganes.*

- **`<header>` - Encabezado de una sección.**
> *El elemento **`<header>`** contiene al encabezado de una sección o documento, donde se colocan habitualmente los encabezados, los vinculos de navegación, los formularios de búsqueda, los logos, las tablas de contenidos, las introducciones, etc. En muchos casos, los contenidos del encabezado de un documento son consistentes a lo largo de todo el sitio.*

- **`<footer>` - El pie de una sección.**
> *El elemento **`<footer>`** representa el pie de una sección o documento, donde los autores habitualmente colocan firmas, información acerca del auto, información de licencias, documentos relacionados, etc. En muchos casos, los contenidos del pie de un documento son consistentes a lo largo de todo el sitio.*

- **`<address>` - Informacion de contacto del autor.**
> *El contenido **`<address>`** provee información de contacto para el autor de la sección o documento, como una dirección postal, una dirección de correo electrónico, un número telefónico, una cuidad, un país, un códio postal, etc.*

#### Agrupación de Contenido.

- **`<p>` - Parrafo.**
> *El elemento **`<p>`** es el apropiado para distribuir el texto en párrafos.*

- **`<hr>` - Separador de contenido.**
> *El elemento **`<hr>`** representa una divición tematica o un quiebre en el texto. Este quiebre puede dividir al contenido en dos fragmentos con tópicos diferentes o dos escenas en una novela. Los navegadaores habitualmente representan este quiebre visualmente, mediante una linea horizontal.*

- **`<pre>` - Bloque de texto preformateado.**
> *El elemento **`<pre>`** representa un bloque de texto preformateado donde, en contraste con otros elementos, los espacios continuos y los quiebres de lineas son respetados. Ademas los navegadores utilizan fuentes de ancho constante para represntar al texto en este elemento, lo que significa que todos los caracteres tendrán el mismo ancho.*

- **`<blockquote>` - Cita en forma de bloque.**
> *El elemento **`<blockquote>`** permite a los autores insertar citas en forma de bloques de contenido, usualmente compuesta por un párrafo, un grupo de parrafos o un conjunto de muchos otros elementos incluyendo imagenes (`<img>`), tablas (`<table>`) y articulos (`<article>`), entre otros. Esta es la principal diferencia entre este elemento y `<q>`, que está diseñado para citar únicamente lineas de texto. Adicionalmente, el recurso de donde se ha extraido la cita puede ser especificado en el atributo `cite`, proporcionandu su URL.*
- **`<ol>` - Lista ordenada.**
> *El elemento **`<ol>`** representa una lista ordenada de items que, en contraste las listas no ordenadas (elemento `<ul>`), produce un significado diferente si el orden de los items es alterado. Los items de ambas listas, ordenadas y no ordenadas, son representados por el elemento `<li>`.*

- **`<ul>` - Lista no ordenada.**
> *El elemento **`<ul>`** representa una lista no ordenada de items que, en contraste con las lista ordenadas (elemento `<ol>`), no produce significados diferentes si el orden de los ítems es alterado. Los ítems de ambas listas, ordenadas y no ordenadas, son representados por el elemento `<li>`.*
- **`<menu>` - Insertar una barra de menu.**
> *El elemento `<menu>` representa una barra de menú que consiste en una lista de comandos representadas por una lista no ordenada de ítems (elementos `<li>`). Este elemento es simplemente una alternativa semántica al elemento `<ul>` que se utiliza para representar una lista no ordenada de comandos.*

- **`<figure>` - Informacion autocontenida.**
> *El elemento `<figure>` representa a una pieza de documentos autocontenido que se utiliza habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de codigo, etc. *

- **`<figcaption>` - Titulo para una figura.**

- **`<main>` - Contenido principal de una sección.**

- **`<div>` - Contenedor genérico para bloques de texto.**