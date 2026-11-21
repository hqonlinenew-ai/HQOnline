/* Funções compartilhadas entre index.html e leitor.html */
function parseCSV(texto){
  texto=texto.replace(/^\uFEFF/,"");
  const linhas=[];let campo="",linha=[],aspas=false;
  for(let i=0;i<texto.length;i++){
    const c=texto[i];
    if(aspas){
      if(c==='"'&&texto[i+1]==='"'){campo+='"';i++}
      else if(c==='"'){aspas=false}
      else campo+=c;
    }else if(c==='"'){aspas=true}
    else if(c===","){linha.push(campo);campo=""}
    else if(c==="\n"||c==="\r"){
      if(c==="\r"&&texto[i+1]==="\n")i++;
      linha.push(campo);campo="";
      if(linha.some(v=>v.trim()!==""))linhas.push(linha);
      linha=[];
    }else campo+=c;
  }
  if(campo!==""||linha.length){linha.push(campo);if(linha.some(v=>v.trim()!==""))linhas.push(linha)}
  const cab=linhas.shift().map(h=>h.trim());
  return linhas.map(l=>Object.fromEntries(cab.map((h,i)=>[h,(l[i]||"").trim()])));
}
async function carregarCatalogo(){
  const r=await fetch("catalogo.csv",{cache:"no-cache"});
  if(!r.ok)throw new Error("Não foi possível carregar o catalogo.csv");
  return parseCSV(await r.text());
}
function urlValida(u){return /^https?:\/\//i.test(u||"")&&!/COLE_/i.test(u)}
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
