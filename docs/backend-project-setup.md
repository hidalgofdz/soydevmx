---
id: backend-project-setup 
title: Configuración de un Proyecto Backend 
---

# Elige un Lenguaje y un Framework

A menos que haya algún requerimiento técnico de performance, la selección del lenguaje caé a uno en el cuál el equipo se sienta cómodo. Les diría que consideren:

- Buscar un lenguaje tipado o que tenga un linter que permita tiparlo

Si la aplicación **será una API** de los cuales sus clientes serán una SPA o Dispositivos móviles, recomiendo que usen un framework como Laravel, Django o Ruby on Rails. 

Esto por que estos frameworks ya traen una buena configuración de infraestructura que les permitirá fácilmente meter Rate Limiting, Throttle, CORS, Manejo de CSRF, entre otras cosas.
 
 **Nota** Prueben Phoenix que se ve prometedor pero al usar elixir que es un lenguaje funcional podría alentar al equipo al inicio

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

**Nota** Deben ser capacez de ejecutar sus pruebas con un solo comando, o lo mas probable es que no lo hagan.

**Nota 2** Agreguen la ejecucion de las pruebad a su pipeline de Continuos Integration. 

## Tipos de pruebas
 Sigan el testing trophy (poner foto del testing trohpy)
 
 - Pruebas de API/Integracion
 - Pruebas Unitarias
 


# Autenticación

- Dependiendo de tus clientes
- Tal vez aqui mandar a un diagrama de decisión para que puedan elegir el mejor método de autenticación
- Si es mobile que sea con token o Oauth2
- Si es web en el mismo dominio o subdominio usen autenticacion con cookies o Oauth2(que usa cookie por detras 👀)
- Si es web a un dominio diferente que sea via Oauth2(usa cookies por detras) o via token. NO GUARDES EL TOKEN EN SESSION STORAGE
- Si es a server usen token

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
