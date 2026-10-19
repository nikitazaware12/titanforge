const $=(s,r=document)=>[...r.querySelectorAll(s)];
const MENU='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',CLOSE='<svg class="i" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
const tg=$('.tg')[0],lk=$('.links')[0];
const closeM=()=>{lk.classList.remove('open');tg.setAttribute('aria-expanded','false');tg.innerHTML=MENU;tg.setAttribute('aria-label','Open menu')};
tg.onclick=()=>{const o=lk.classList.toggle('open');tg.setAttribute('aria-expanded',o);tg.innerHTML=o?CLOSE:MENU;tg.setAttribute('aria-label',o?'Close menu':'Open menu')};
addEventListener('keydown',e=>e.key==='Escape'&&closeM());
document.addEventListener('click',e=>{if(lk.classList.contains('open')&&!lk.contains(e.target)&&!tg.contains(e.target))closeM()});
const cur=location.pathname.split('/').pop()||'index.html';$('.links a').forEach(a=>a.getAttribute('href')===cur&&a.classList.add('on'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);if(e.target.dataset.w)e.target.style.width=e.target.dataset.w;
if(e.target.dataset.n){const n=+e.target.dataset.n,s=e.target.dataset.s||'';let t0;const f=t=>{t0=t0||t;const p=Math.min((t-t0)/1400,1);e.target.textContent=Math.floor(n*(1-Math.pow(1-p,3)))+s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}}}),{threshold:.2});
$('.rv,[data-n],[data-w]').forEach(e=>io.observe(e));
$('.cyc').forEach(c=>{const im=$('img',c);if(im.length<2)return;im[0].classList.add('on');let i=0;setInterval(()=>{im[i].classList.remove('on');i=(i+1)%im.length;im[i].classList.add('on')},4200)});
$('.chips button').forEach(b=>b.onclick=()=>{$('.chips button').forEach(x=>x.classList.remove('on'));b.classList.add('on');$('.pc').forEach(c=>c.parentElement.style.display=(b.dataset.f==='all'||c.dataset.t===b.dataset.f)?'':'none')});
const today=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().split('T')[0];$('input[type=date]').forEach(d=>d.min=today);
const WHATSAPP_NUMBER='919999999999'; /* your number: country code + digits only */
$('form').forEach(f=>f.onsubmit=e=>{e.preventDefault();const g=n=>f.elements[n].value.trim(),d=f.elements.date,m=$('.ok',f)[0];
if(d.value<today){d.setCustomValidity('Choose today or a future date');d.reportValidity();return}d.setCustomValidity('');
const t=`*New Inquiry - TitanForge*\nName: ${g('name')}\nCompany: ${g('company')||'-'}\nEmail: ${g('email')}\nPhone: ${g('phone')}\nMachine: ${g('machine')}\nDate: ${g('date')}\nDetails: ${g('msg')||'-'}`;
const u='https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(t);m.style.display='block';m.textContent='Opening WhatsApp. Press Send there to finish.';window.open(u,'_blank')||(location.href=u);f.reset()});

(()=>{const c=document.getElementById('sp');if(!c||matchMedia('(prefers-reduced-motion:reduce)').matches)return;const x=c.getContext('2d');let W,H,P=[];
const rs=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight};rs();addEventListener('resize',rs);
const col=['#ffffff','#ffe4b0','#f5a623','#ffc766'];
const mk=i=>({x:Math.random()*W,y:i?Math.random()*H:H+10,vx:(Math.random()-.5)*.6,vy:-(Math.random()*1.5+.4),r:Math.random()*1.7+.4,l:Math.random()*.6+.4,tw:Math.random()*6,h:col[Math.floor(Math.random()*4)]});
for(let i=0;i<(innerWidth<700?40:95);i++)P.push(mk(true));
(function f(){x.clearRect(0,0,W,H);P.forEach((p,i)=>{p.x+=p.vx+Math.sin(p.tw)*.25;p.y+=p.vy;p.tw+=.05;const a=(.5+.5*Math.sin(p.tw*2))*p.l;x.globalAlpha=a;x.shadowBlur=12;x.shadowColor=p.h;x.fillStyle=p.h;x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill();if(p.r>1.3){x.globalAlpha=a*.35;x.fillRect(p.x-.4,p.y,.8,12)}if(p.y<-12)P[i]=mk(false)});requestAnimationFrame(f)})()})();
