/* 공통 탭 — <body data-site="student|teacher" data-tab="..."> 에 맞춰 위쪽에 탭을 그려요
   학생 사이트: 독서활동 탭만 / 교사 사이트: 홈 · 독서활동 기록 · 자리바꾸기 */
(function(){
  const site=document.body.dataset.site==='teacher'?'teacher':'student';
  const SITES={
    student:{logo:'📚',name:'우리 반 독서활동',home:'index.html',tabs:[['reading','📚','독서활동','index.html']]},
    teacher:{logo:'🏫',name:'우리 반 · 선생님',home:'home.html',tabs:[['home','🏠','홈','home.html'],['records','📚','독서활동 기록','teacher.html'],['seats','🪑','자리바꾸기','seats.html']]}
  };
  const S=SITES[site], cur=document.body.dataset.tab||'';
  const css=`
  .site-nav{position:sticky;top:0;z-index:15;background:rgba(251,246,236,.94);backdrop-filter:blur(6px);border-bottom:2px solid var(--line)}
  .site-nav.teacher{background:rgba(43,38,34,.96);border-bottom-color:#2b2622}
  .site-nav .in{max-width:1240px;margin:0 auto;padding:8px 20px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
  .site-nav .logo{font-family:'Jua';font-size:22px;color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:8px;margin-right:10px}
  .site-nav.teacher .logo{color:#fff}
  .site-nav .logo i{font-style:normal;width:34px;height:34px;border-radius:11px;background:linear-gradient(135deg,#ffb84d,#f0743a);display:inline-flex;align-items:center;justify-content:center;font-size:19px;box-shadow:0 3px 0 rgba(0,0,0,.15)}
  .site-nav a.t{font-family:'Jua';font-size:18px;text-decoration:none;color:var(--muted);padding:6px 16px;border-radius:999px;border:2px solid transparent}
  .site-nav.teacher a.t{color:#cfc5b8}
  .site-nav a.t:hover{color:var(--ink);border-color:var(--line);background:#fff}
  .site-nav a.t.on{background:var(--ink);color:#fff}
  .site-nav.teacher a.t.on{background:#fff;color:var(--ink)}
  .site-nav .side{margin-left:auto;font-family:'Jua';font-size:15px;color:#cfc5b8;text-decoration:none;border:2px solid #57504a;border-radius:999px;padding:4px 12px}
  .site-nav .side:hover{color:#fff;border-color:#fff}
  @media print{.site-nav{display:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  const nav=document.createElement('nav');nav.className='site-nav '+site;
  nav.innerHTML=`<div class="in"><a class="logo" href="${S.home}"><i>${S.logo}</i>${S.name}</a>${S.tabs.map(([k,e,n,h])=>`<a class="t ${k===cur?'on':''}" href="${h}">${e} ${n}</a>`).join('')}
    ${site==='teacher'?'<a class="side" href="index.html" target="_blank">👀 학생 화면 열기 ↗</a>':''}</div>`;
  document.body.prepend(nav);
})();
