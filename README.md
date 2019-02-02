# PlatziPosts

Proyecto de ejemplo para implementar tests en el curso de testing end-to-end con Cypress

### Instalación

El proyecto require 2 bases de datos de firebase una para su uso normal y otra para ejecutar los tests, cree 2 bases de datos en Firebase y obtenga las credenciales para ambas y crear los archivos `production.env` y `test.env` con la configuración de firebase para cada una de las bases de datos, hay un ejemplo del formato requerido para estos archivos en `config/example-env`.

Luego

``` bash
$ npm install
$ npm run dev
```

Para ejecutar las pruebas
``` bash
$ npm run test-dev
```

## Consideraciones para el desarrollo

**Este proyecto solo funciona con node 8.0**

## Conceptos vistos

- Instalación de cypress en el proyecto
- Dependencia npm-run-all para correr multiples comandos en paralelo
- Principales comandos de cypress
- Selección e interacciones de elementos
- Aserciones para verificar casos erróneos y correctos
- Hooks integrados en cypress
- Fixtures, variables y alias para cargar datos de prueba desde archivo externo
- Ejecución de scripts para limpiar la base de datos

### Licencia

Copyright 2018 Savvy Apps
Modifications Copyright (C) 2018 Platzi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


