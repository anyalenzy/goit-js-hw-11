import{S as h,i as y}from"./assets/vendor-18365dff.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="/goit-js-hw-11/assets/error-80ee8afe.svg",b="https://pixabay.com/api/",c={key:"41804111-1b8e3eb7a4ad0f0fdba68370e",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:18},S=new h(".gallery a",{overlayOpacity:.8,captionsData:"alt",captionDelay:250}),u=document.querySelector(".form"),f=document.querySelector(".search-input"),m=document.querySelector(".gallery"),i=document.querySelector(".loader");u.addEventListener("submit",L);function L(o){if(o.preventDefault(),!f.value.trim()){l("Please, fill out the search field");return}v().then(r=>w(r)).catch(r=>l(r.toString())).finally(()=>u.reset())}function v(){m.innerHTML="",i.style.display="inline-block",c.q=f.value.trim();const o=new URLSearchParams(c).toString();return fetch(`${b}?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function w(o){if(o.hits.length===0){l("Sorry, there are no images matching your search query. Please try again!"),i.style.display="none";return}const r=o.hits.map(({largeImageURL:a,webformatURL:s,tags:e,likes:t,views:n,comments:d,downloads:p})=>`
        <li class="gallery-item">
          <a href="${a}">
            <img class="gallery-image" src="${s}" alt="${e}">
            <div class="img-desc">
              <span><b>Likes:</b> <br/>${t}</span>
              <span><b>Views:</b> <br/>${n}</span>
              <span><b>Comments:</b> <br/>${d}</span>
              <span><b>Downloads:</b> <br/>${p}</span>
            </div>
          </a>
        </li>
                  `).join("");m.insertAdjacentHTML("afterbegin",r),i.style.display="none",S.refresh()}function l(o){y.show({position:"topRight",iconUrl:g,messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0,closeOnEscape:!0,message:o})}
//# sourceMappingURL=commonHelpers.js.map
