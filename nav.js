/* 우리 반 홈페이지 공통 탭 — <body data-tab="home|reading|seats"> 에 맞춰 위쪽에 탭을 그려요 */
(function(){
  const TABS=[['home','🏠','홈','index.html'],['reading','📚','독서활동','reading.html'],['seats','🪑','자리바꾸기','seats.html']];
  const cur=document.body.dataset.tab||'';
  const css=`
  .site-nav{position:sticky;top:0;z-index:15;background:rgba(251,246,236,.94);backdrop-filter:blur(6px);border-bottom:2px solid var(--line)}
  .site-nav .in{max-width:1240px;margin:0 auto;padding:8px 20px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .site-nav .logo{font-family:'Jua';font-size:22px;color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:8px;margin-right:10px}
  .site-nav .logo i{font-style:normal;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,#ffb84d,#f0743a);display:inline-flex;align-items:center;justify-content:center;font-size:19px;box-shadow:0 3px 0 #e2c9a8}
  .site-nav a.t{font-family:'Jua';font-size:18px;text-decoration:none;color:var(--muted);padding:6px 16px;border-radius:999px;border:2px solid transparent}
  .site-nav a.t:hover{color:var(--ink);border-color:var(--line);background:#fff}
  .site-nav a.t.on{background:var(--ink);color:#fff}
  @media print{.site-nav{display:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const nav=document.createElement('nav');nav.className='site-nav';
  nav.innerHTML=`<div class="in"><a class="logo" href="index.html"><i>🏫</i>우리 반 홈페이지</a>${TABS.map(([k,e,n,h])=>`<a class="t ${k===cur?'on':''}" href="${h}">${e} ${n}</a>`).join('')}</div>`;
  document.body.prepend(nav);
})();
