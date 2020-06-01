
var socket = io();

socket.on('connect',function(){
    console.log('Conectado');
});

socket.on('disconnect',function(){
    console.log('perdimos conexion con el servidor')
})

socket.emit('EnviarMensaje', {
    usuario:'Eduardo',
    mensaje:'Hola mundo'
}, function(resp){
    console.log(resp)
});

//Escuchar informacion
socket.on('EnviarMensaje',function(mensajeserver){
        console.log('Servidor:'+ mensajeserver);
})
