---
id: backend-project-setup 
title: Configuración de un Proyecto Backend 
---

# Elige un Lenguaje y un Framework

A menos que haya algún requerimiento técnico de performance, la selección del lenguaje caé a uno en el cuál el equipo se sienta cómodo. Les diría que consideren:

- Buscar un lenguaje tipado o que tenga un linter que permita tiparlo

Si la aplicación **será una API** de los cuales sus clientes serán una SPA o Dispositivos móviles, recomiendo que usen un framework como Laravel, Django o Ruby on Rails. 

Esto por que estos frameworks ya traen una buena configuración de infraestructura que les permitirá fácilmente meter Rate Limiting, Throttle, CORS, Manejo de CSRF, entre otras cosas.
 
 **Nota** si pueden prueben Phoenix que se ve prometedor pero al usar elixir que es un lenguaje funcional podría alentar al equipo al inicio.


# Configuración del ambiente

- Selecciona la versión del lenguaje y framework
- Enforza que todos usen la versión del lenguaje y framework correcta. Usa package.lock o algo parecido para asegurar que tienes las versiones adecuadas de tus bibliotecas

# Estándares de definición de APIs

- JSON:API
- SIREN

# Documentación

- Stoplight.io
- JSON-Schema
- OpenAPI

# Configuración del Framework de Pruebas
## Tipos de pruebas

# Autenticación

- Dependiendo de tus clientes
- Tal vez aqui mandar a un diagrama de decisión para que puedan elegir el mejor método de autenticación

# Autorización
- Casbin (Go, Node)
- Laravel own Policies

# Pipeline
- Tests
- Linters
- Semantic Release
- Deploy if sent to master (our allow to easy deployment)
  - With all and migrations
- Run migrations when on master

# Development Happiness

- Git Hooks (Husky)
- LintStaged

# Code Organization

- 
