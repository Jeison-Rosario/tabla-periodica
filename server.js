const {createApp}=require('./app');
const port=Number(process.env.PORT||8080);
if(!Number.isInteger(port)||port<1||port>65535) throw new Error('PORT inválido');
createApp().listen(port,process.env.IP||process.env.HOST||'127.0.0.1',()=>console.log('Tabla periódica iniciada'));
