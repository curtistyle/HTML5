# HTML5

## HTML
A continuacion una lista de elementos estandar de HTML5:

### Lista de Elementos HTML

#### Elemento de Raiz.


- ##### **`<html>` - Contenedor principal.** 
> *El elemento **`<html>`** representa la raiz de un documento HTML. El resto de elementos descienden de este elemento.*

#### Metadatos del documento.

- ##### **`<head>` - Sección de enzabezado del documento.**
> *El elemento **`<head>`** provee información general (metadatos) acerca del documento, incluyendo su titulo y enlaces a script y hojas de estilos.*

- ##### **`<link>` - Información relacionada para el documneto.**
> *El elemento **`<link>`** especifica la relación entre el documento actual y un recurso externo. Los usos posibles de este elemento incluyen la definición de un marco relacional para navegación. Este elemento es mas frecuentemente usado para enlazar hojas de estilos.*

- ##### **`<style>` - Atributos presentacionales.**
> *El atributo global **`<style>`** contiene declaraciones de estilo CSS a ser aplicados a un elemento. Notar que es recomendado para los estilos ser definidos en archivo o archivos separados.*

#### Secciones

- ##### **`<body>` - El cuerpo del documento.**
> *El elemento **`<body>`** representa el contenido de un documento HTML. Solo puede haber un elemento `<body>` en el documento.*

- ##### **`<article>` - Contenido redistribuible.**
> *El elemento **`<article>`** es un contenedor de bloques de contenido que se considera indenpendiente del sitio web y pueden, por lo tanto ser visto, reutilizados y distribuidos por separado.*

- ##### **`<section>` - Define una seccion.**
> *El elemento **`<section>`** es un elemento de seccionamiento generico, diseñado para contener una parte de un documento tematicamente definida. Los contenidos de un elemento **`<section>`** son usualmente procedidos por un encabezado.*

- ##### **`<nav>` - Sección de navegación.**
> *El elemento **`<nav>`** representa una sección de una página cuyo propósito es proporcionar enlaces de navegación ya sea dentro del documento actual o a otros documentos. Ejemplos comunes de secciones de navegación son menus, tablas de contenidos a índices.*

- ##### **`<aside>` - Contenido sólo ligeramente relacionado.**
> *El elemento **`<aside>`** es un contenedor de información que se considera solo levemente relacionada al documento o a la sección en la que es definida. En otras palabras, el contenido del elemento **`<aside>`** debe estar relacionado al contenido circuntante, pero no ser completamente necesario para su comprensión. Estas secciones son a menudo representadas como barras laterales o como inserciones y contienen una explicación al margen como una definición de glosario, elementos relacionados indirectamente, como publicidad, la biografia del autor, o en aplicaciones web, la información de perfil o enlaces a blogs relacionados.*

- ##### **`<h1> .. <h2> .. <h3> .. <h4> .. <h5> .. <h6>` - Encabezados.**
> *Los elementos de **encabezado** implementa seis niveles de encabezado del documento., `<h1>` es el más importante, y `<h6>` , el menos importante. Un elemento de encabezado describe brevemente el tema de la sección que presenta. La informacion de encabezado puede ser usada por los agentes usuarios, por ejemplo, para construir una tabla de contenidos para un documento automaticamente.*

- ##### **`<hgroup>` - Agrupa encabezados de una sección.**
> *El elemento **`<hgroup>`** representa al bloque de encabezado de una sección, y usualmente agrupa encabezados consecutivos (`<h1>`  a `<h6>`) . Un encabezado de niveles multiples puede ser usado para proveer subtitulos, titulos alternativos o eslóganes.*

- ##### **`<header>` - Encabezado de una sección.**
> *El elemento **`<header>`** contiene al encabezado de una sección o documento, donde se colocan habitualmente los encabezados, los vinculos de navegación, los formularios de búsqueda, los logos, las tablas de contenidos, las introducciones, etc. En muchos casos, los contenidos del encabezado de un documento son consistentes a lo largo de todo el sitio.*

- ##### **`<footer>` - El pie de una sección.**
> *El elemento **`<footer>`** representa el pie de una sección o documento, donde los autores habitualmente colocan firmas, información acerca del auto, información de licencias, documentos relacionados, etc. En muchos casos, los contenidos del pie de un documento son consistentes a lo largo de todo el sitio.*

- ##### **`<address>` - Informacion de contacto del autor.**
> *El contenido **`<address>`** provee información de contacto para el autor de la sección o documento, como una dirección postal, una dirección de correo electrónico, un número telefónico, una cuidad, un país, un códio postal, etc.*

#### Agrupación de Contenido.

- ##### **`<p>` - Parrafo.**
> *El elemento **`<p>`** es el apropiado para distribuir el texto en párrafos.*

- ##### **`<hr>` - Separador de contenido.**
> *El elemento **`<hr>`** representa una divición tematica o un quiebre en el texto. Este quiebre puede dividir al contenido en dos fragmentos con tópicos diferentes o dos escenas en una novela. Los navegadaores habitualmente representan este quiebre visualmente, mediante una linea horizontal.*

- ##### **`<pre>` - Bloque de texto preformateado.**
> *El elemento **`<pre>`** representa un bloque de texto preformateado donde, en contraste con otros elementos, los espacios continuos y los quiebres de lineas son respetados. Ademas los navegadores utilizan fuentes de ancho constante para represntar al texto en este elemento, lo que significa que todos los caracteres tendrán el mismo ancho.*

- ##### **`<blockquote>` - Cita en forma de bloque.**
> *El elemento **`<blockquote>`** permite a los autores insertar citas en forma de bloques de contenido, usualmente compuesta por un párrafo, un grupo de parrafos o un conjunto de muchos otros elementos incluyendo imagenes (`<img>`), tablas (`<table>`) y articulos (`<article>`), entre otros. Esta es la principal diferencia entre este elemento y `<q>`, que está diseñado para citar únicamente lineas de texto. Adicionalmente, el recurso de donde se ha extraido la cita puede ser especificado en el atributo `cite`, proporcionandu su URL.*

- ##### **`<ol>` - Lista ordenada.**
> *El elemento **`<ol>`** representa una lista ordenada de items que, en contraste las listas no ordenadas (elemento `<ul>`), produce un significado diferente si el orden de los items es alterado. Los items de ambas listas, ordenadas y no ordenadas, son representados por el elemento `<li>`.*

- ##### **`<ul>` - Lista no ordenada.**
> *El elemento **`<ul>`** representa una lista no ordenada de items que, en contraste con las lista ordenadas (elemento `<ol>`), no produce significados diferentes si el orden de los ítems es alterado. Los ítems de ambas listas, ordenadas y no ordenadas, son representados por el elemento `<li>`.*

- ##### **`<menu>` - Insertar una barra de menu.**
> *El elemento **`<menu>`** representa una barra de menú que consiste en una lista de comandos representadas por una lista no ordenada de ítems (elementos `<li>`). Este elemento es simplemente una alternativa semántica al elemento `<ul>` que se utiliza para representar una lista no ordenada de comandos.*

- ##### **`<figure>` - Informacion autocontenida.**
> *El elemento **`<figure>`** representa a una pieza de documentos autocontenido que se utiliza habitualmente para encerrar imágenes, gráficos, tablas de referencia, videos, poemas, fragmentos de codigo, etc. Ésta, podrian ser acompañada por una leyenda o titulo (elemento `<figcaption>`) que puede usarse para hacer una referencia al fragmento desde alguna otra parte del documento. Ademas del titulo opcional, un elemento `<figure>` puede contener a otros elementos como imágenes(`<img>`), parrafos(`<p>`), código de computadora(`<code>`), citas(`<cite>`), etc.*

- ##### **`<figcaption>` - Titulo para una figura.**
> *El elemento **`<figcaption>`** representa un titulo o leyenda de un fragmento de contenido(`<figure>`).*

- ##### **`<main>` - Contenido principal de una sección.**
> *El elemento **`<main>`** es un contenedor para los temas centrales de un documento o sección. Este contenido central puede interpretarse como todo lo que resta luego de quitar anuncios. encabezados(`<header>`), pies(`<footer>`)*

- ##### **`<div>` - Contenedor genérico para bloques de texto.**
> *El elemento **`<div>`** es un contenedor genérico sin un significado semántico en particular. Se utiliza comunmente en el desarrollo de documentos con propósitos estetícos, en conjunto con los atributos `style` y `class`. Tambien puede resultar útil para resolver atributos comunes a los elementos contenidos por el, como por ejemplo `lang` o `title`.*

#### Semántica de texto.

- ##### **`<data>` - Información apta para programas.**
> *El elemento **`<data>`** permite a los autores proveer una versión de su contenido específicamente diseñada para programas. Dicha codificación debe ser provista en el atributo requerido `value`. Este elemento puede ser útil en situaciones en las que es necesario facilitar el acceso o interacción de programas con el contenido del documento.* 

- ##### **`<time>` - Fecha y/u hora.**
> *El elemento **`<time>`** representa fechas, horas, desplasamientos de zonas horarios y duraciones. Adicionalmente, una versión especifica para programas de los contenidos del elemento puede ser provista en el atributo `datetime`.*

- ##### **`<code>` - Codigo de computadora.**
> *El elemento `<code>` representa a un fragmento de código de computadora, que puede ser cualquier texto legible para computadoras. Entre muchos otros ejempolos, puedes encontrar dentro del elemento `<code>`, una parte de un programa en cualquier lenguaje de programación, un documento de HTML o XML, un conjuto de declaraciones CSS, los contenidos de un archivo de configuración, etc.*

- ##### **`<sub>` - Texto en subíndice.**
> *El elemento **`<sub>`** representa un subíndice.*

- ##### **`<sup>` - Texto en superíndice.**
> *El elemento **`<sup>`** representa el superíndice.* 

- ##### **`<i>` - Texto desplasado de la prosa normal.**
> *Muestra el texto marcado con un estilo en cursiva o italica.* 

- ##### **`<b>` - Texto desplazado del contenido circuntante.**
> *Indica que el texto debe ser representado con una variable **bold**, o **negrita**, de la tipografia que se esté usando.*

- ##### **`<a>` - Hypervinculo.**
> *El elemento `Anchor` **`<a>`** crea un enlace a otras paginas de internet, archivos o ubicaciones dentro de la misma página web, direcciones de correo, o cualquier otra URL.*

- ##### **`<em>` - Texto con énfesis.**
> *El elemento **`<em>`** es el apropiado para marcar con énfasis las partes importantes de un texto. El elemento `<em>` puede ser anidado, con cada nivel de anidamiento indicando un mayor grado de énfasis.*

- ##### **`<strong>` - Texto con mayor énfasis**
> *El elemento **`<strong>`** es el apropiado para marcar con especial énfasis las partes más importantes de un texto.*

- ##### **`<mark>` - Resalta un texto.**
> *El elemento **`<mark>`** representa un texto **marcado** o **resaltado** como referencia o anotación, debido a su relevancia o importancia en un contexto particular.*

- ##### **`<bdi>` - Aisla texto para el formateo bidireccional.**
> *El elemento **`<bdi>`** aísla a un trozo de texto del contenido circunstante con propósitos de formateo de texto. Este elemento resulta muy útil en situaciones en las que el algoritmo bidireccional, responsable de decir automáticamnte la dirección del texto, pueden "confundirse" y cambiar incorrectamente la dirección del texto.*

- ##### **`<br>` - Quiebre de linea.**
> *El elemento **`<br>`** produce un salto de linea en el texto (retorno de carro). Es util para escribir un poema o una dirección, donde la división de las líneas es significante.*

- ##### **`<wbr>` - Oportunidad de quiebre de linea.**
> *El elemento **`<wbr>` world break opportunity** representa una posición dentro del texto donde el explorador puede opcionalmente saltar una linea, aunque sus reglas de salto de línea de otra manera no crearían un salto de posición.*

#### Contenido incrustado.

- ##### **`<picture>` - Imagen con múltiples origenes.**
> *El elemento **`<picture>`** ha sido diseñado para proveer soporte nativo para imágenes adaptativas en HTML5. Cuando se utiliza en conjunto con `<source>` e `<img>` atúa como una imagen que será cargada de manera diferente de acuerdo a las propiedades del dispositivo en el que se muestre. En otras palabras, los navegadores que lo soporten cargarán una imagen diferente (provista por los elementos `<source>`) para cada tipo de dispositivo especificado. Un elemento **`<picture>`** puede contener cualquier número de elementos `<source>` seguidos por un elemento `<img>`. Cada elemento `<source>` proveerá un tipo de dispositivo distinto (densidad de pixeles, tamaño de área de visualización, formato de imagen, etc.), mientras que el elemento `<img>` representará a la imagen misma y constituirá un último recurso para los casos en que ninguno de los elementos `<source>` pueda aplicarse y/o el soporte para `<picture>` no esté presente.*

- ##### **`<source>` - Recurso de medios alternativos.**
> *El elemento **`<source>`** permite a los autores proveer diferentes versiones de un archivo en los elmentos de medios (`<audio>` y `<video>`) y las ímagenes (`<picture>`). Un elemento de medios o imagen puede contener uno o mas elementos `<source>`, cada uno de los cuales provee un versión diferente del medio (codificado utilizando un códec diferente) o imagen (en diferentes tomaños o formatos). Entonces, queda en manos del navegador elegir que recurso cargar, una decisión que tomará en base a los formatos que soporta y a las dimensiones de la imagen (mejor concidencia).*

- ##### **`<img>` - Imagen.**
> *El elemento **`<img>`** representa a una imagen, lo cual es un recurso externo que puede ser incrustado en el cuerpo de un documento. La ubicación de dicho recurso externo debe especificarse en el atributo `<src>`.*

- ##### **`<video>` - Video.**
> *El elemento **`<video>`** incrusta recursos de video en un documento. Aunque es muy fácil de utilizar, este elemento puede ser muy adaptable, poderoso y compatible con la mayoría de los navegadores.* 

> *Los autores tienen dos formas para indicarle a los navegadores qué recurso se debe cargar. El primero, y más directo, es especificando el URI del recurso en el atributo `src`. El segundo método incrementa la compatibilidad entre navegadores, al trabajar junto al elemento `<source>`. Con el elemento `<source>` se pueden proveer diferentes alternativas del mismo recurso, y dejar que el navegador elija la que se adapta mejor a sus características.* 

> *Indistintamente de la forma que se elija para incluir la fuente del video, siempre se podrá llenar al elemento con contenido alternativo, de modo que los navegadores que no lo soporten tengan algo que mostrar. Esto resulta muy útil para autores que necesiten desarrollen sitios compatibles con navegadores antiguos, ya que pueden proveer alternativas en reproductores de video Flash o un mensaje que informe al usuario acerca del problema de soporte (y posibles formas de resolverlo). Si el navegador soporta al elemento `<video>`, el contenido alternativo será simplemente desestimado.*

- ##### **`<Audio>` - Audio.**
> *El elemento **`<audio>`** incrusta recursos de audio en un documento. Aunque es muy fácil de utilizar, este elemento puede ser muy adaptable, poderoso y compatible con la mayoría de los navegadores.*

> *Los autores tienen dos formas para indicarle a los navegadores qué recurso se debe cargar. El primero, y más directo, es especificando el URI del recurso en el atributo `src`. El segundo método incrementa la compatibilidad entre navegadores, al trabajar junto al elemento `<source>`. Con el elemento `<source>` puedes proveer diferentes alternativas del mismo recurso, y dejar que el navegador elija la que se adapta mejor a sus características.*

> *Cualquier forma que elijas de incluir la fuente del audio, siempre podrás llenar al elemento con contenido alternativo, de modo que los navegadores que no lo soporten tengan algo que mostrar. Esto resulta muy útil para autores que necesiten desarrollen sitios compatibles con navegadores antiguos, ya que pueden proveer alternativas en reproductores de audio Flash o un mensaje que informe al usuario acerca del problema de soporte (y posibles formas de resolverlo). Si el navegador soporta al elemento `<audio>`, el contenido alternativo será simplemente desestimado.*

***Atributos:***

`autoplay`
> Un atributo booleano; si se especifica (incluso aunque el valor sea "false"), el sonido comenzará a reproducirse automáticamente en cuanto sea posible, sin detenerse para terminar de cargar los datos.

`buffered`
> Un atributo que se puede leer para determinar qué intervalos de tiempo del multimedia se han almacenado en búfer. Este atributo contiene un objeto TimeRanges (en-US).

`controls`
> Si está presente este atributo, el navegador ofrecerá controles para permitir que el usuario controle la reproducción de audio, incluyendo volumen, búsqueda y pausar/reanudar reproducción.

`loop`
> Un atributo booleano; si se especifica, al alcanzar el final del audio, realizaremos la búsqueda automáticamente hasta el principio.

`preload`
> El objetivo de este atributo enumerado es proporcionar una sugerencia al navegador sobre qué cree el autor que proporcionará la mejor experiencia para el usuario . Puede tener uno de los siguientes valores:
> - `none:` sugiere bien que el autor cree que el usuario no tendrá que consultar ese video, bien que el servidor desea minimizar su tráfico; es decir, esta sugerencia indica que no se debe almacenar en caché este video;
> - `metadata:` sugiere que aunque el autor piensa que el usuario no tendrá que consultar ese video, es razonable capturar los metadatos (p. ej. longitud);
> - `auto:` sugiere que el usuario necesita tener prioridad; es decir, esta sugerencia indica que, si es necesario, se puede descargar el video completo, incluso aunque el usuario no vaya a usarlo;
> - the *empty string*: que es sinónimo del valor `auto`.
> Si no está configurado, su valor predeterminado está definido por el navegador (es decir, cada navegador puede elegir su propio valor predeterminado), aunque la especificación aconseje que se establezca a `metadatos`.

`src`
> La URL del audio que se va a insertar. Está sujeta a los Controles de acceso HTTP. Es opcional; en su lugar puedes usar el elemento `source` dentro del bloque de audio para especificar el audio que se va a insertar.

### Atributos Globales.

- **accesskey**
> Proporciona una pista para generar un atajo de teclado para el elemento actual. Este atributo consta de una lista de caracteres separados por espacios. El navegador debe utilizar el primero que exista en la distribución del teclado del ordenador.

- **autocapitalize**
> Controla si la entrada de texto se pone en mayúsculas automáticamente a medida que el usuario la introduce o edita. Puede tener los siguientes valores:
> - `off` o `none`, no se aplica capitalización automática (todas las letras están predeterminadas en minúsculas).
> - `on` o `sentences`, la primera letra de cada oración de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas.
> - `words`, la primera letra de cada palabra de manera predeterminada tiene una letra mayúscula; todas las demás letras están predeterminadas en minúsculas
> - `characters`, todas las letras de manera predeterminada deben estar en mayúsculas.

- **class**
> Una lista separada por espacios de las clases del elemento. Las clases permiten que CSS y JavaScript seleccionen y accedan a elementos específicos a través de los selectores de clase o funciones como el método `document.getElementsByClassName()`.

- **contenteditable**
> Un atributo enumerado que indica si el usuario debe poder editar el elemento. Si es así, el navegador modifica su «widget» para permitir la edición. El atributo debe tomar uno de los siguientes valores:
> - `true` o la *cadena vacía*, la cual indica que el elemento debe ser editable.
> - `false`, el cual indica que el elemento no debe ser editable.

- **data-***
> Forma una clase de atributos, denominados atributos de datos personalizados, que permiten el intercambio de información de propiedad entre el `HTML` y su representación `DOM` que pueden utilizar los scripts. Todos estos datos personalizados están disponibles a través de la interfaz `HTMLElement` del elemento en el que está configurado el atributo. La propiedad `HTMLElement.dataset (en-US)` les da acceso.

- **draggable**
> Un atributo enumerado que indica si el elemento se puede arrastrar mediante la API de arrastrar y soltar. Puede tener los siguientes valores:
>- `true`, indica que el elemento se puede arrastrar
>- `false`, indica que el elemento **no** se puede arrastrar.

- **hidden**
> Un atributo booleano indica que el elemento aún no es o ya no es *relevante*. Por ejemplo, se puede utilizar para ocultar elementos de la página que no se pueden utilizar hasta que se haya completado el proceso de inicio de sesión. El navegador no representará tales elementos. Este atributo no se debe utilizar para ocultar contenido que se podría mostrar legítimamente.

- **id**
> Define un identificador (ID) único que debe ser único en todo el documento. Su propósito es identificar el elemento al vincularlo (usando un identificador de fragmento), al escribir un script o al aplicarle estilo (con CSS).

- **inputmode (en-US)**
> Proporciona una pista a los navegadores sobre el tipo de configuración de teclado virtual que se debe utilizar al editar este elemento o su contenido. Se usa principalmente en elementos `<input>`, pero se puede usar en cualquier elemento mientras esté en modo `contenteditable`.

- **is**
> Te permite especificar que un elemento HTML estándar se debe comportar como un elemento integrado personalizado registrado (consulta Uso de elementos personalizados para obtener más detalles).

- **itemid**
> El identificador único y global de un artículo.

- **itemprop**
> Se usa para agregar propiedades a un elemento. Se puede especificar a cada elemento HTML un atributo `itemprop`, donde un `itemprop` consiste en un par de nombre y valor.

- **itemref**
> Las propiedades que no son descendientes de un elemento con el atributo `itemscope` se pueden asociar con el elemento usando un `itemref`. Proporciona una lista de IDs de elementos (no itemids) con propiedades adicionales en otras partes del documento.

- **itemscope**
> `itemscope` (normalmente) funciona junto con **`itemtype`** para especificar que el HTML contenido en un bloque es sobre un elemento en particular. `itemscope` crea el *«Item»* y define el alcance del `itemtype` asociado con él. `itemtype` es una URL válida de un vocabulario (tal como schema.org) que describe el elemento y las propiedades de su contexto.

- **itemtype (en-US)**
> Especifica la URL del vocabulario que se utilizará para definir `itemprop`s (propiedades del elemento) en la estructura de datos. **`itemscope`** se utiliza para establecer el alcance de la estructura de datos en la que estará activo el vocabulario establecido por `itemtype`.

- **lang**
> Ayuda a definir el idioma de un elemento: el idioma en el que se encuentran los elementos no editables o el idioma en el que el usuario debe escribir los elementos editables. El atributo contiene una “etiqueta de idioma” (compuesta de “subetiquetas de idioma” separadas por guiones) en el formato definido en Etiquetas para identificar idiomas (BCP47). xml:lang tiene prioridad sobre él.

- **part (en-US)**
> Una lista separada por espacios de los nombres de las partes del elemento. Los nombres de las partes permiten que CSS seleccione y aplique estilo a elementos específicos en la sombra de un árbol mediante el pseudoelemento ::part (en-US).

- **slot**
> Asigna un espacio en la sombra de un árbol DOM de sombra (en-US) a un elemento: Un elemento con un atributo `slot` es asignado al espacio creado por el elemento `<slot>` cuyo valor del atributo `name` coincide con el valor del atributo `slot`.

- **spellcheck**
> Un atributo enumerado define si se puede verificar el elemento para detectar errores ortográficos. Puede tener los siguientes valores:
>- `true`, el cual indica que, si es posible, el elemento se debe revisar para detectar errores ortográficos;
>- `false`, indica que el elemento no se debe revisar para detectar errores ortográficos.

- **style**
> Contiene declaraciones de estilo CSS que se aplicarán al elemento. Ten en cuenta que se recomienda que los estilos se definan en un archivo o archivos separados. Este atributo y el elemento `<style>` principalmente tienen el propósito de permitir un estilo rápido, por ejemplo, con fines de prueba.

- **tabindex**
> Un atributo entero que indica si el elemento puede tomar el foco de entrada *(es enfocable)*, si debe participar en la navegación secuencial del teclado y, de ser así, en qué posición. Puede tomar varios valores:
> - *un valor negativo* significa que el elemento se debe poder enfocar, pero no debe ser accesible mediante la navegación secuencial del teclado.
> - `0` significa que el elemento se debe poder enfocar y ser accesible a través de la navegación secuencial del teclado, pero su orden relativo está definido por la convención de la plataforma.
> - un *valor positivo* significa que el elemento se debe poder enfocar y ser accesible mediante la navegación secuencial del teclado; el orden en el que se enfocan los elementos es el valor creciente del tabindex. Si varios elementos comparten el mismo `tabindex`, su orden relativo sigue sus posiciones relativas en el documento.

- **title**
> Contiene un texto que representa información de advertencia relacionada con el elemento al que pertenece. Normalmente, pero no necesariamente, dicha información se puede presentar al usuario como información sobre herramientas.

- **translate** (experimental)
> Un atributo enumerado que se utiliza para especificar si los valores de atributo de un elemento y los valores de sus hijos de nodo `Text` (en-US) se deben traducir cuando la página está localizada, o si se deben dejar sin cambios. Puede tener los siguientes valores:
> - la cadena vacía y `yes`, indican que el elemento se traducirá.
> - `no`, lo cual indica que el elemento **no** se traducirá.