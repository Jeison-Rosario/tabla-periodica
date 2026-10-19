const router = require('express').Router();
const data = require('../data/elementos');
const familias = {A:'Alcalinos',AA:'Alcalinotérreos',MT:'Metales de transición',LT:'Lantánidos',AT:'Actínidos',OM:'Otros metales',M:'Metaloides',ONM:'Otros no metales',H:'Halógenos',GN:'Gases nobles'};
router.get('/', (req,res) => {
 const q = typeof req.query.q === 'string' ? req.query.q.trim().slice(0,20) : '';
 const grupo = Object.hasOwn(familias,req.query.grupo) ? req.query.grupo : '';
 const elementos = data.map(e=>({...e,familia:familias[e.grupo],atenuado:!(e.simbolo.toLowerCase().includes(q.toLowerCase()) && (!grupo || e.grupo===grupo))}));
 res.render('home',{layout:false,q,elementos,lista:elementos.filter(e=>!e.atenuado&&!e.simbolo.includes('-')),familias:Object.entries(familias).map(([id,nombre])=>({id,nombre,selected:id===grupo}))});
});
module.exports=router;
