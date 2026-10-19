const express=require('express');
const {engine}=require('express-handlebars');
const path=require('node:path');
function createApp(basePath=process.env.BASE_PATH||'') {
 const base=basePath.replace(/\/+$/,'');
 if(base&&!/^(\/[a-zA-Z0-9_-]+)+$/.test(base)) throw new Error('BASE_PATH inválido');
 const app=express();app.disable('x-powered-by');
 app.engine('hbs',engine());app.set('view engine','hbs');app.set('views',path.join(__dirname,'Views'));
 app.use((req,res,next)=>{res.locals.basePath=base;
  if(base&&req.path===base) return res.redirect(308,base+'/'+(req.url.includes('?')?req.url.slice(req.url.indexOf('?')):''));
  if(base&&req.url.startsWith(base+'/')) req.url=req.url.slice(base.length);
  next();
 });
 app.get('/healthz',(req,res)=>res.json({status:'ok'}));
 app.use(express.static(path.join(__dirname,'public')));app.use(require('./routes/rutaHome'));
 app.use((req,res)=>res.status(404).render('404',{layout:false}));return app;
}
module.exports={createApp};
