---
id: w2s-testing
title: Donde empezar en testing
---

## ¿Por qué deberías saber testing?

Como desarrolladores nuestro trabajo no es solo codificar. Somos creadores de aplicaciones, servicios, experiencias o como lo quieras llamar. Y por lo mismo, somos responsables de asegurar de que las cosas que saquemos al mundo estén lo más libre de defectos como podamos. Esto no significa que no podamos cometer errores, o que nuestra lógica de negocio o interfaz deben ser perfectas antes de que el mundo la conozca. Pero el tratar de entregar nuestro trabajo lo más pulido posible suena como un principio a seguir.

Para mí hacer testing además de ayudarme a confirmar que la aplicación que estoy desarrollando no contiene errores, es también una manera de obtener una red de seguridad que me permite experimentar con mi código. El saber que tengo pruebas que verifican mi aplicación me da la confianza de deshacer mi arquitectura, redefinir las interfaces y deconstruir mis clases por que sé que al final de todo si ejecuto mis pruebas y no veo ningún error todo está bien.

## ¿Cómo inicias en el testing como desarrollador?

La forma más directa para adentrarte al testing es pensar en una función o funcionalidad que quieras asegurar que no tiene errores. Y tratar de definir que se quiere probar haciendo uso de la estructura [GivenWhenThen](https://martinfowler.com/bliki/GivenWhenThen.html).

Esta estructura indica que una prueba tiene un conjunto de entradas(Given), una acción a la cual son expuestas(When) y un resultado esperado(Then). Esto puede verse en código cuando pasas ciertos inputs a una función y esperas que al ser ejecutada esta de cierto output. En una API cuando envías una request a una API y esperas que te dé cierta respuesta o, en una aplicación web cuando el usuario quiere registrarse llenado ciertos inputs en un formulario, hace click en "Registrarse" y, espera que la aplicación lo deje entrar a alguna página además de enviar un correo electrónico a su cuenta de email para confirmar el registro exitoso.

Demos un ejemplo en código. Digamos que tenemos una función que mueve dinero entre dos cuentas bancarias. La estructura de la prueba puede verse de la siguiente manera:

```js
// Given
// Una cuenta sender que tiene 100 pesos
const sender = new Account();
sender.addFunds("100");
// y una cuenta receiver que tiene 0 pesos
const receiver = new Account();

// When
// se hace una transacción de 75 pesos de la cuenta sender a la cuente receiver
const transaction = moveFunds(sender, receiver, "75");
// Then
// espero que la transacción tenga un estado de "COMPLETED"
expect(transaction.status).toEqual("COMPLETED");
// y que la cuenta sender ahora tenga un balance de 25 pesos
expect(sender.balance).toEqual("25");
// y que la cuenta receiver tenga un balance de 75 pesos
expect(receiver.balance).toEqual("75");
```

El ejemplo anterior es una prueba para verificar un caso de éxito. Si algo estuviera mál con nuestro código dentro de `moveFunds`esperaría que alguno de los `expect` lance un error y con ello entender mejor cual error hay en la lógica de `moveFunds`. Este tipo de pruebas nos dan seguridad de que nuestra aplicación funciona adecuadamente cuando se le da los inputs correctos. También de importante son las pruebas para verificar los casos de error pues nos dan aún más seguridad de que nuestra aplicación es capaz de manejar casos donde dados ciertos inputs esta debería de fallar.

Demos otro ejemplo en código. Retomemos nuestra función `moveFunds`y hagamos una prueba que verifica que una transacción falla si se intenta mover mas fondos de los que la cuenta tiene disponibles.

```js
// Given
// Una cuenta sender que tiene 100 pesos
const sender = new Account();
sender.addFunds("100");
// y una cuenta receiver que tiene 0 pesos
const receiver = new Account();

// When
// se hace una transacción de 101 pesos de la cuenta sender a la cuente receiver
const transaction = moveFunds(sender, receiver, "101");
// Then
// espero que la transacción tenga un estado de "FAILED"
expect(transaction.status).toEqual("FAILED");
// y que la cuenta sender mantuvo su balance original
expect(sender.balance).toEqual("100");
// y que la cuenta receiver también mantuvo su balance original
expect(receiver.balance).toEqual("0");
```

## Conclusión

El testing es una herramienta para darnos confianza de que el código que estamos desarrollando se comporta de la manera en como esperamos. Nos da la libertad de alterarlo, modificarlo y jugar con él con la certeza que si al final del día todas las pruebas pasan entonces nuestra aplicación funciona. Además, si juntas buenas pruebas con una buena configuración de continuous integration puedes estar por seguro que los errores en producción disminuirán considerablemente.

## ¿Y ahora qué?

- Recomiendo que leas más a detalle sobre el patrón [GivenWhenThen](https://martinfowler.com/bliki/GivenWhenThen.html).
- También que también leas esta [guía](https://martinfowler.com/articles/practical-test-pyramid.html) sobre los diferentes tipos de testing. Es la guía más completa que he encontrado hasta ahora.
- Si tienes que hacer testing de Front end con React. Kent C Dodds recomiendo que sigas a Kent C Dodds. Aquí hay una [lista de sus artículos sobre testing](https://kentcdodds.com/testing/)

## Notas

- Los tests automatizados, si están bien escritos, pueden servir como un documento vivo que nuevos desarrolladores que entren al equipo pueden usar para entender y aprender como funciona una aplicación. Tener tests que expliquen los "happy paths" y los "edge cases" que puede tener una feature o cuales son los inputs y outputs esperados para una función son una forma valiosa de enseñar el comportamiento de la aplicación sin tener que adentrarse a ver el código a detalle.
- Qué es testing?
- Cómo se puede ver el testing en un entorno ágil?
- Por qué testing
- Partes de una buena prueba
  - Given When Then (and Setup :p)
  - Arrange Act Assert
- Mi regla de cuanto testing hacer
- Por qué iniciar testing al principio
- Qué hacer cuando necesito hacer testing
- Tipos de testing
  - unit
  - integration
  - e2e
  - contract
- Test Driven Development
- Cómo se puede ver una prueba de integración en Front end?
- Cómo se ve una prueba de API en Back end?
- recursos para aprender más de testing
- la importancia de configurar bien tu entorno de testing.
- Debugging
