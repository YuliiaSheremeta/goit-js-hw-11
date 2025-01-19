import{i as d,S as p}from"./assets/vendor-De63neY_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="48292364-ad13d53928d4b39a49844bb07",h="https://pixabay.com/api/",f=async t=>{const o=await fetch(`${h}?q=${t}&key=${m}&image_type=photo&orientation=horizontal&safesearch=true`);if(!o.ok)throw new Error(o.status);return o.json()},y=t=>`
        <li class="gallery-card">
            <a href="${t.largeImageURL}">
                <img src="${t.webformatURL}" alt="${t.tags}"/>
            </a>
            <div class="info">
                <p>Likes: ${t.likes}</p>
                <p>Views: ${t.views}</p>
                <p>Comments: ${t.comments}</p>
                <p>Downloads: ${t.downloads}</p>
            </div>
        </li>`,n=t=>{d.show({title:"❌",message:t,position:"topRight",timeout:3e3})},u=document.querySelector(".form"),c=document.querySelector(".search-list"),l=document.querySelector(".loader"),g=t=>{t.preventDefault();const o=t.currentTarget.elements.search.value.trim();if(o===""){n("Enter text to search!");return}l.classList.add("active"),f(o).then(s=>{if(s.hits.length===0){n("Sorry, there are no images matching your search query. Please try again!"),c.innerHTML="",u.reset();return}const a=s.hits.map(r=>y(r)).join("");c.innerHTML=a,new p(".gallery-card a",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(s=>{console.error(s)}).finally(()=>{setTimeout(()=>{l.classList.remove("active")},1e3)})};u.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
