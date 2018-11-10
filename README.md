## Componente select a servicio rest

Componente select que permite interactuar con un servicio REST-api utilizando la libreria *Select*
 
### Instalación:
Para correr el proyecto solo debes tener docker instalado en tu Sistema operativo.

Luego correr los siguientes comandos:

### Esta linea crea una imagen con el nombre *euromillion-react*
<code>     
    docker build -t euromillion-react .
</code>

Luego debemos ejecutar la imagen de nuestro proyecto con el siguiente comando

 ### Este comando ejecuta la imagen en el puerto 3000.
<code>   
    docker run -p 3000:3000 -d euromillion-react
</code>

React por defecto se ejecuta en el puerto 3000, si tienes otro proceso corriendo en este puerto, puedes cambiar el primer parametro 3000:3000 a 3001:3000 para redireccionar el puerto del servidor que sale de 3000 a 3001
