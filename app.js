const data=[
{keys:["cattle","beef","0102","0201","0202"],name:"Cattle",status:"likely",desc:"Some cattle and derived products fall within EUDR Annex I. Product scope was updated in 2026, so verify the exact CN code against the current Annex I."},
{keys:["cocoa","cacao","chocolate","1801","1803","1804","1805","1806"],name:"Cocoa",status:"likely",desc:"Cocoa and listed derived products such as cocoa paste, butter, powder and chocolate are core EUDR scope categories."},
{keys:["coffee","0901","soluble coffee","instant coffee"],name:"Coffee",status:"likely",desc:"Coffee is an EUDR commodity family. The 2026 scope update added soluble coffee categories; verify the exact CN classification."},
{keys:["palm","palm oil","1511"],name:"Oil palm",status:"likely",desc:"Oil palm and listed derivatives may be in scope. Verify the exact product against the current Annex I."},
{keys:["rubber","natural rubber","4001"],name:"Rubber",status:"likely",desc:"Natural rubber and selected derived products are covered. Some rubber-derived categories were removed in the 2026 scope update, so exact CN-code verification is essential."},
{keys:["soy","soya","soybean","1201","1507"],name:"Soya",status:"likely",desc:"Soya and listed derivatives are covered. Soybeans for sowing were among categories removed by the 2026 scope update."},
{keys:["wood","timber","furniture","paper","4401","4403","4407","4418","9403"],name:"Wood",status:"likely",desc:"Wood and many listed wood-derived products are within EUDR scope. Exact CN-code and transitional-rule checks may be required."}
];
const qs=["coffee","1806 chocolate","wood furniture","natural rubber","soya"];
const q=document.querySelector("#q"), result=document.querySelector("#result");
function render(term){
 const t=term.trim().toLowerCase();
 if(!t){result.className="result result-empty";result.innerHTML='<div class="result-icon">⌕</div><div><strong>Enter a product, commodity or code</strong><p>We’ll show the likely commodity family and the next verification step.</p></div>';return}
 const hit=data.find(x=>x.keys.some(k=>t.includes(k)||k.includes(t)));
 if(hit){result.className="result hit";result.innerHTML='<div class="result-icon">✓</div><div><strong>Potential EUDR match: '+hit.name+'</strong><p>'+hit.desc+'</p><small>Next step: confirm the exact CN code in the current Annex I and determine your role (operator/trader), company size and applicable date.</small></div>'}
 else{result.className="result warn";result.innerHTML='<div class="result-icon">?</div><div><strong>No quick match found</strong><p>This does not mean the product is outside EUDR. Scope is legally determined by the current Annex I CN entries and product composition.</p><small>Try a commodity name or CN/HS heading, then verify with the official EU text.</small></div>'}
}
document.querySelector("#searchBtn").onclick=()=>render(q.value);q.addEventListener("keydown",e=>{if(e.key==="Enter")render(q.value)});
const s=document.querySelector("#suggestions");qs.forEach(x=>{const b=document.createElement("button");b.textContent=x;b.onclick=()=>{q.value=x;render(x)};s.appendChild(b)});