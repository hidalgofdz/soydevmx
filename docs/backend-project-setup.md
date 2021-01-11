---
id: backend-project-setup 
title: Configuración Inical de un Proyecto Backend 
---

## TL:DR Checklist

1. [ ] A menos que haya un requerimiento técnico muy importante. Da preferencia a un Lenguaje que sea cómodo para tu equipo y que tenga un full framework (Laravel, Rails, Phoenix, Django).
1. [ ] Define el estandar de tu API (Dale un vistazo a JSON:API)
1. [ ] Descubre quienes son los clientes de tu API y define la metodología de autenticación según convenga.
1. [ ] Configura la aplicación para iniciarla con un solo comando
1. [ ] Define una plantilla de Pull Requests
1. [ ] Ten un ambiente de pruebas e2e que te permita correr tus tests con un solo comando 
1. [ ] Configura un linter y un formatter que enforce el code styling
1. [ ] Definan como manejarán sus branches.(Recomiendo [Github flow](https://guides.github.com/introduction/flow/))
1. [ ] Define o automatiza el proceso para tener la documentación de la API actualizada
1. [ ] Implementar un pipeline de continuos integration
1. [ ] Haz que tu aplicación pueda ser desplegada con un solo click o con Continuos Delivery
1. [ ] Define un proceso para evitar el técnical depth de tu aplicación
1. [ ] (Opcional) Dockeriza tu ambiente de desarrollo o por lo menos los servicios externos como la base de datos y redis 
1. [ ] Create a repository and invite all your team members to it

     
# 1. Elige un Lenguaje y un Framework

A menos que haya algún requerimiento técnico de performance, facilidad para implementar frameworks como GraphQL, o hacer uso de bibliotecas de análisis de datos, se recomienda que se elija uno donde el equipo se sienta cómodo. Les diría que consideren:

Usen un **lenguaje tipado** o que tenga buen soporte en IDEs para encontrar errores sin necesidad de ejecutar la aplicación.
- Recomiendo que elijan un lenguaje que tenga un **full-stack framework** como Laravel, Django, Ruby on Rails o Phoenix a menos que tengan necesidades muy particulares para la aplicación o tengan a un desarrollador con la experiencia necesaria para hacer el setup de infraestructura, seguridad y testing de un proyecto de Node, Golang o cualquier lenguaje que sus frameworks webs más populares sean considerados "minimal". 

 
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

