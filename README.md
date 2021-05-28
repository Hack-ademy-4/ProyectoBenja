# Proyecto final de tienda de segunda mano


[![benja](https://ca.slack-edge.com/T01U544M139-U01VBMX52FQ-941bd2b5c581-192)](#)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### _Documentación hasta ahora_
```
   product {
      id,
      categoria,
      titulo,
      descripcion,
      precio,
      autor,
      pago, //[transferencia, paypal, otros]
      seguidores: [autor, autor, ...]
   }

   categorias [
      electrodomesticos,
      electronica,
      herramientas,
      vehiculos,
      ropa // y complementos
      inmuebles,
   ]

   autor {
      nombre,
      apellidos,
      tel,
      email,
      calle, // y numero
      localidad,
      cp // codigo postal
      provincia,
      pais
   }
```

 #### ¿Por que componentes?

 Pues pensando en el futuro y la implementación de la tienda en una app, por ejemplo en un movil. Es necesario llamadas api y no renderizar en el servidor.

 Es por eso que se esta implementando los componentes donde cada componente hara las llamadas API necesarias para su renderizado en cliente.

 No por ello signica que no se tenga que renderizar en servidor.... sino que implemta esta opcion...





#### License
BENJA

**Free Software!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [varName]: <https://dirr>
