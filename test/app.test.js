const {test}=require('node:test');const assert=require('node:assert/strict');const {createApp}=require('../app');
for(const base of ['', '/tabla-periodica']) test('HTTP '+base,async()=>{
 const server=createApp(base).listen(0,'127.0.0.1');await new Promise(r=>server.once('listening',r));
 const url='http://127.0.0.1:'+server.address().port;
 try{for(const prefix of new Set(['',base])){const r=await fetch(url+prefix+'/?q=Fl');assert.equal(r.status,200);const html=await r.text();assert.equal((html.match(/class="elemento /g)||[]).length,120);assert.match(html,/Fl/);assert.ok(!html.includes('>Fi<'));assert.ok(html.includes(base+'/assets/css/style.css'));assert.equal((await fetch(url+prefix+'/assets/css/style.css')).status,200);assert.equal((await fetch(url+prefix+'/healthz')).status,200);assert.equal((await fetch(url+prefix+'/missing')).status,404);}}
 finally{await new Promise(r=>server.close(r));}
});
test('118 unique symbols and valid coordinates',()=>{const data=require('../data/elementos');assert.equal(new Set(data.filter(e=>!e.simbolo.includes('-')).map(e=>e.simbolo)).size,118);assert.equal(new Set(data.map(e=>e.fila+':'+e.columna)).size,120);assert.throws(()=>createApp('/../invalid'));});
