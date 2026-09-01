const $=(s)=>document.querySelector(s), $$=(s)=>document.querySelectorAll(s);
const toast=(msg)=>{const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)};
const openModal=(id)=>{ $$('.modal').forEach(m=>m.classList.remove('open')); const m=$('#'+id); if(m)m.classList.add('open') };
$$('[data-modal]').forEach(b=>b.addEventListener('click',()=>openModal(b.dataset.modal)));
$$('.close').forEach(b=>b.addEventListener('click',()=>b.closest('.modal').classList.remove('open')));
$$('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open')}));
window.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal.open').forEach(m=>m.classList.remove('open'))});
$('#menuBtn').addEventListener('click',()=>$('#nav').classList.toggle('open'));
$('#themeBtn').addEventListener('click',()=>{document.body.classList.toggle('dark');toast(document.body.classList.contains('dark')?'Modo oscuro activado':'Modo claro activado')});

const states={
 'OOLAJJS':{title:'En proceso de entrega',detail:'Repartidor: Gutiérrez Miguel · Dirección: Mitre N°8678',ok:true},
 'MJS44K66':{title:'Bodo no encontró tu paquete',detail:'Revisá el número ingresado o intentá nuevamente.',ok:false},
};
function track(){const code=$('#trackingInput').value.trim().toUpperCase();const data=states[code];const r=$('#trackResult');if(data){r.innerHTML=`<div class="status-dot" style="background:${data.ok?'#2caa67':'#b74858'}"></div><div><span>ESTADO DEL ENVÍO · ${code}</span><h3>${data.title}</h3><p>${data.detail}</p></div>`;r.style.borderLeftColor=data.ok?'#a21127':'#b74858';toast(data.ok?'Seguimiento actualizado':'No encontramos información para ese paquete')}else{r.innerHTML='<div class="status-dot" style="background:#d99b25"></div><div><span>CONSULTA</span><h3>Necesitamos revisar ese código</h3><p>Probá con OOLAJJS o MJS44K66 para ver la demo.</p></div>';toast('Código de prueba no reconocido')}}
$('#trackBtn').addEventListener('click',track);$('#trackingInput').addEventListener('keydown',e=>{if(e.key==='Enter')track()});$$('.examples button').forEach(b=>b.addEventListener('click',()=>{$('#trackingInput').value=b.dataset.code;track()}));

const details={envios:['Envíos','Podés crear un envío, consultar su estado y revisar movimientos recientes.','Crear envío →'],sucursales:['Sucursales','Buscá un punto de atención y consultá la ubicación disponible.','Ver sucursales →'],cuenta:['Mi cuenta','Accedé a tus datos, historial de compras y envíos anteriores.','Iniciar sesión →'],legal:['Info Legal','Consultá condiciones, privacidad y la información legal del servicio.','Ver información →']};
$$('.service-card').forEach(c=>c.addEventListener('click',()=>{ $$('.service-card').forEach(x=>x.classList.remove('active'));c.classList.add('active');const d=details[c.dataset.service];$('#serviceDetail').innerHTML=`<b>${d[0]}</b><span>${d[1]}</span><button class="text-btn">${d[2]}</button>`;$('#serviceDetail .text-btn').onclick=()=>{if(c.dataset.service==='envios')openModal('sendModal');else if(c.dataset.service==='cuenta')openModal('loginModal');else toast(d[1])}}));
$('#chatBtn').addEventListener('click',()=>{toast('Bodo: ¡Hola! ¿Tu consulta es sobre demora, entrega o devolución?');setTimeout(()=>toast('Bodo: En esta demo, el chat está simulado.'),900)});
$('#branchBtn').addEventListener('click',()=>toast('Demo: acá podés conectar un mapa o listado de sucursales.'));
$('#createSend').addEventListener('click',()=>{toast('Datos guardados. El próximo paso sería confirmar el envío.');$('#sendModal').classList.remove('open')});
$('#returnBtn').addEventListener('click',()=>{toast('Solicitud de devolución enviada.');$('#returnModal').classList.remove('open')});
$$('.demo-form').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const type=f.dataset.demo;toast(type==='login'?'Sesión iniciada (demo).':type==='register'?'Cuenta creada (demo).':'Código enviado (demo).');f.closest('.modal').classList.remove('open')}));
