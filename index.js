import{S as l}from"./assets/vendor-DTx2mQCU.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const c=document.querySelector(".form"),n=document.querySelector(".search-list"),u=r=>`<li class="gallery-card"><a href = "${r.largeImageURL}" > <img src="${r.webformatURL}" alt="${r.tags}"/><a/> <div class="info"><p>Likes: ${r.likes}</p><p>Views: ${r.views}</p><p>Comments: ${r.comments}</p><p>Downloads: ${r.downloads}</p></div > </li > `,d=r=>{r.preventDefault();const a=r.currentTarget.elements.search.value.trim();if(a===""){alert("Enter text to search!");return}fetch(`https://pixabay.com/api/?q=${a}&key=48292364-ad13d53928d4b39a49844bb07&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{if(o.hits.length===0){alert('"Sorry, there are no images matching your search query. Please try again!"'),n.innerHTML="",c.reset();return}const s=o.hits.map(e=>u(e)).join("");n.innerHTML=s,new l(".gallery-card a",{captionDelay:250,captionsData:"alt"})}).catch(o=>{console.error(o)})};c.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
