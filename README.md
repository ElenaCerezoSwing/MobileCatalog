# MobileCatalog
Prueba técnica para MásMóvil


## COMIENZO Y PREPARACIÓN DEL ENTORNO

Es necesario tener [Node](https://nodejs.org/es/) instalado. Para comprobar si está instalado:

```
node -v
```
### Siguientes pasos

#### Descargar el repositorio

```
git clone https://github.com/ElenaCerezoSwing/MobileCatalog.git
```

#### Instalar npm, tanto en la carpeta general como en la carpeta client
```
 npm install 
```
#### Abrir dos terminales
##### En una lanzamos el servidor en la carpeta donde esté, en este caso a nivel global
Ahora que está dockerizado, el server se ejecuta con el siguiente comando:

```
sudo docker run -it -p 8000:5000 docker-react-express2 
```

##### En otra (entrando en la carpeta client) ejecutamos el siguiente comando
```
npm start
```

### NOTA IMPORTANTE:
El localhost:3000 debe no estar siendo utilizado para poder lanzar la aplicación sobre él

Autora: [Elena Cerezo Ibáñez](https://github.com/ElenaCerezoSwing/) , Front-End Developer




