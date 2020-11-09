---
slug: 45-2020-week-recommendations
title: (45-2020) Recomendaciones de la semana
author: Hidalgo José Fernández Pech
author_title: Tsundoku master 
author_url: https://github.com/hidalgofdz
author_image_url: https://avatars3.githubusercontent.com/u/5541077?v=4
tags: [recomendaciones-semana]
---

import Link from '@docusaurus/Link';
import { SOFTWARE_RESOURCES_URL } from "../src/constants";

Esta semana he leído bastantes cosas de arquitectura, solo para caer en cuenta de lo oxidado que ando en estos temas. Tal vez sea hora de invertir un poco dinero en [ello](https://amzn.to/3l8adZy). Por mientras, aquí dejo algunas de las cosas interesantes que vi durante la semana.

<!--truncate-->

Todos el contenido sobre desarrollo lo pueden encontrar en esta <Link to={SOFTWARE_RESOURCES_URL}>página</Link>.

## [Agile is Dead](https://www.youtube.com/watch?v=a-BOSpxYJ9M)

<div style={{display: "flex", justifyContent: "center"}}>
<iframe width="560" height="315" src="https://www.youtube.com/embed/a-BOSpxYJ9M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br />

[David Thomas][pragdave], uno de los autores del agile manifesto, nos cuenta su perspectiva actual de la metodología agile y como está se ha convertido en un negocio. ¿Acaso hay manera de salvarla?. Gracias a [Romario López](https://twitter.com/romariolopezc) por mostrarme el video 😘.

## [Four Strategies for Organizing Code][organizing-code]
 
 Excelente [artículo][organizing-code] que habla sobre las diferentes estrategias para estructurar los proyectos explicando sus ventajas y desventajas. En lo particular a mí me encantaría ver más proyectos organizados por *componentes* pero es más común ver proyectos organizados *por tipo*. 😞
 
## [Hexagonal Architecture: three principles and an implementation example][hexagonal-architecture-example]

[Esta es la mejor explicación][hexagonal-architecture-example] que he encontrado sobre la arquitectura hexagonal 📐 donde explica cada uno de sus conceptos y da un ejemplo de su implementación.
 
 También muestra como esta arquitectura cumple con ciertos principios de [SOLID](https://en.wikipedia.org/wiki/SOLID) y da referencias para aprender más a fondo sobre la arquitectura y ver otras arquitecturas más "avanzadas" (como clean architecture y CQRS) para problemas más complejos.

## [If not SPAs, What?][if-not-pwas-what]

Este [post][if-not-pwas-what] que descubrí gracias al newsletter [UI Bytes](https://ui.dev/newsletters/bytes/) me abrió los ojos a que hay más en el mundo del desarrollo web que hacer SPAs o monolitos. 

En él se explican nuevos enfoques para diseñar aplicaciones web que van desde frameworks de javascript que están tratando de facilitar la implementación del [Jamstack](https://jamstack.org/), a el caso opuesto con frameworks como [Laravel Livewire](https://laravel-livewire.com/) que están intentando obtener los beneficios de usar bibliotecas como React sin que tengas que escribir una línea de Javascript.

## [The Queen's Gambit][queens-gambit]

<div style={{display: "flex", justifyContent: "center"}}>
<img style={{margin: "0 auto"}} width="250px" src="https://img-9gag-fun.9cache.com/photo/aeM3j1W_700bwp.webp" alt="ajedréz siendo ajedréz"/>
</div>

Miniserie de Netflix sobre una niña prodigio del ajedrez. Tiene solo 7 capítulos, un increíble diseño de vestuario y una historia envolvente. La recomiendo ver durante el fin de semana dado que no es el tipo de serie que puedes ver mientras scrolleas TikTok.


No olviden tomar agüita.

[organizing-code]: https://medium.com/@msandin/strategies-for-organizing-code-2c9d690b6f33
[hexagonal-architecture-example]: https://blog.octo.com/en/hexagonal-architecture-three-principles-and-an-implementation-example/
[queens-gambit]: https://www.imdb.com/title/tt10048342/
[if-not-pwas-what]: https://macwright.com/2020/10/28/if-not-spas.html?ck_subscriber_id=478661332
[pragdave]: https://pragdave.me/
