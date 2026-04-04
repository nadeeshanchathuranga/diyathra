import{A as G,r as W,p as J,e as K,o as m,w as H,b as t,a as X,u as c,t as s,g as Z,n as S,c as x,i as q,F as A,y as B,x as tt,C as et}from"./app-Bs9QB3VC.js";import{_ as st}from"./Modal-DKydy7Kq.js";import{u as ot}from"./useDashboardNavigation-CXF-JvgW.js";const nt={class:"min-h-screen bg-gray-50 p-6"},at={class:"flex items-center justify-between mb-6"},rt={class:"flex items-center gap-4"},it={class:"bg-white border border-gray-200 rounded-xl px-4 py-2 shadow-sm"},lt={class:"text-gray-800 font-semibold"},dt={class:"p-6 bg-white"},ct={class:"bg-white border-b-2 border-blue-600 p-6"},pt={class:"flex items-center justify-between"},ut={class:"text-sm text-gray-600"},mt={class:"font-semibold text-blue-600"},xt={class:"flex items-center gap-6"},yt={class:"overflow-y-auto",style:{"max-height":"calc(90vh - 100px)"}},bt={class:"p-6 space-y-6"},gt={class:"bg-gray-50 rounded-xl p-5 border border-gray-200"},ft={class:"grid grid-cols-2 gap-4 text-sm"},ht={class:"font-semibold text-gray-800 mt-0.5"},vt={class:"font-semibold text-gray-800 mt-0.5"},wt={class:"font-semibold mt-0.5"},_t={class:"font-semibold text-gray-800 mt-0.5"},$t={class:"bg-white rounded-xl border border-gray-200 overflow-hidden"},kt={class:"overflow-x-auto"},St={class:"w-full"},Ct={class:"divide-y divide-gray-200"},Tt={class:"px-5 py-3 text-gray-800 font-medium"},jt={class:"px-5 py-3 text-center text-gray-700 font-medium"},Ft={class:"px-5 py-3 text-right text-gray-700"},Pt={class:"px-5 py-3 text-right text-gray-800 font-semibold"},Dt={key:0},zt={class:"bg-gray-50 rounded-xl p-5 border border-gray-200"},Nt={class:"space-y-3 text-sm"},qt={class:"flex justify-between items-center"},At={class:"font-semibold text-gray-800"},Bt={class:"flex justify-between items-center"},It={class:"font-semibold text-red-600"},Et={class:"flex justify-between items-center pt-3 border-t-2 border-gray-300"},Lt={class:"font-bold text-lg text-blue-600"},Mt={class:"flex justify-between items-center pt-3 border-t-2 border-gray-300"},Ut={class:"font-semibold text-blue-600"},Vt={class:"flex justify-between items-center"},Rt={class:"font-semibold text-blue-600"},Wt={class:"flex justify-between items-center"},Ht={class:"font-semibold text-gray-600"},Ot={class:"flex justify-between items-center pt-3 border-t border-gray-300"},Qt={class:"overflow-hidden bg-white rounded-2xl shadow-md border border-gray-200"},Yt={class:"overflow-x-auto"},Gt={class:"w-full text-left"},Jt={class:"px-6 py-4"},Kt={class:"w-8 h-8 rounded-[10px] bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-sm"},Xt={class:"px-6 py-4"},Zt={class:"text-blue-600 font-semibold"},te={class:"px-6 py-4 text-gray-800 font-medium"},ee={class:"px-6 py-4"},se={class:"px-6 py-4 text-right text-gray-800 font-medium"},oe={class:"px-6 py-4 text-right"},ne={class:"text-red-600 font-semibold"},ae={class:"text-xs text-gray-500"},re={class:"px-6 py-4 text-gray-600"},ie={class:"px-6 py-4"},le={class:"flex gap-2"},de=["onClick"],ce={key:0},pe={key:0,class:"flex items-center justify-between px-6 py-4 bg-blue-50 border-t border-gray-200"},ue={class:"text-sm text-gray-700 font-medium"},me={class:"flex space-x-2"},xe=["onClick","disabled","innerHTML"],fe={__name:"AllSales",props:{sales:{type:Object,required:!0},billSetting:{type:Object,required:!1}},setup(p){const i=G(),{goToShopsTab:I}=ot(),P=p,u=a=>{const e=Number(a)||0;return new Intl.NumberFormat("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}).format(e)},D=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),E=a=>a===1?"Retail":a===2?"Wholesale":"Unknown",z=W(!1),n=W(null),O=a=>{n.value=a,z.value=!0,Y(a)},L=()=>{z.value=!1,n.value=null},Q=a=>{const e=a&&a.value?a.value:a,d=typeof P.billSetting<"u"&&P.billSetting?P.billSetting:{},o=["58mm","80mm","112mm","210mm"],y=(d.print_size||"80mm").toString(),b=o.includes(y)?y:"80mm",f=(e==null?void 0:e.invoice_no)||"",C=D(e==null?void 0:e.sale_date)||"",T=e!=null&&e.customer&&e.customer.name?e.customer.name:"Walk-in",h=((e==null?void 0:e.products)||[]).map(l=>({product_name:l.product&&l.product.name?l.product.name:l.product_name||"Unknown",quantity:l.quantity||0,price:parseFloat(l.price)||0})),v=parseFloat(e==null?void 0:e.total_amount)||h.reduce((l,k)=>l+k.price*k.quantity,0),w=parseFloat(e==null?void 0:e.discount)||0,_=parseFloat(e==null?void 0:e.net_amount)||v-w,$=parseFloat(e==null?void 0:e.balance)||0,j=(_-$).toFixed(2),F=`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Receipt - ${f}</title>
      <style>
        @page { size: ${b} auto; margin: 0; }
        @media print { body{ margin:0; padding:0 } }
        *{ margin:0; padding:0; box-sizing:border-box }
        body{ font-family: Arial, Helvetica, sans-serif; font-size:13px; width:${b}; padding:6mm 5mm; color:#000; line-height:1.4; font-weight:600 }
        .header{text-align:center; margin-bottom:8px; padding-bottom:8px; border-bottom:2px dashed #000}
        .header h1{font-size:16px; font-weight:900; margin-bottom:4px}
        .info{margin:8px 0; font-size:12px}
        .info-row{display:flex; justify-content:space-between; margin:2px 0}
        .items-table{width:100%; margin:8px 0; font-size:12px; border-collapse:collapse}
        .items-table th{text-align:left; border-bottom:2px solid #000; padding:3px 2px}
        .items-table td{padding:3px 2px; border-bottom:1px dotted #000}
        .item-name{width:38%; word-wrap:break-word}
        .item-qty{width:12%; text-align:center}
        .item-price{width:25%; text-align:right}
        .item-total{width:25%; text-align:right}
        .totals{margin-top:8px; font-size:12px}
        .total-row{display:flex; justify-content:space-between; margin:3px 0}
        .total-row.grand{font-size:15px; font-weight:900; border-top:2px solid #000; border-bottom:2px solid #000; padding:6px 0; margin:8px 0}
        .footer{text-align:center; margin-top:12px; padding-top:8px; border-top:2px dashed #000; font-size:12px}
      </style>
    </head>
    <body>
      <div class="receipt-container">
        <div class="header">
          <div style="margin-bottom:6px;"><img src="/images/logo.png" alt="logo" style="max-height:40px; max-width:100%; object-fit:contain;"/></div>
          <h1>${d.company_name||"SALES RECEIPT"}</h1>
          ${d.address?`<p>${d.address}</p>`:""}
          ${d.mobile_1||d.mobile_2?`<p>Tel: ${[d.mobile_1,d.mobile_2].filter(Boolean).join(" / ")}</p>`:""}
          ${d.email?`<p>${d.email}</p>`:""}
          ${d.website_url?`<p>${d.website_url}</p>`:""}
        </div>

        <div class="info">
          <div class="info-row"><span><strong>Invoice:</strong></span><span>${f}</span></div>
          <div class="info-row"><span><strong>Date:</strong></span><span>${C}</span></div>
          <div class="info-row"><span><strong>Customer:</strong></span><span>${T}</span></div>
          <div class="info-row"><span><strong>Payment:</strong></span><span>-</span></div>
        </div>

        <table class="items-table">
          <thead>
            <tr>
              <th class="item-name">Item</th>
              <th class="item-qty">Qty</th>
              <th class="item-price">Price</th>
              <th class="item-total">Total</th>
            </tr>
          </thead>
          <tbody>
            ${h.map(l=>`
              <tr>
                <td class="item-name">${l.product_name}</td>
                <td class="item-qty">${l.quantity}</td>
                <td class="item-price">${l.price.toFixed(2)}</td>
                <td class="item-total">${(l.price*l.quantity).toFixed(2)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>

        <div class="totals">
          <div class="total-row"><span>Sub Total</span><span>${i.props.currency||""} ${v.toFixed(2)}</span></div>
          <div class="total-row"><span>Discount</span><span>${i.props.currency||""} ${w.toFixed(2)}</span></div>
          <div class="total-row"><span>Custom Discount</span><span>0.00 %</span></div>
          <div class="total-row grand"><span>Total</span><span>${i.props.currency||""} ${_.toFixed(2)}</span></div>
          <div class="total-row"><span>Cash</span><span>${i.props.currency||""} ${j}</span></div>
          <div class="total-row" style="font-weight:bold"><span>Balance</span><span>${i.props.currency||""} ${Math.abs($).toFixed(2)}</span></div>
        </div>

        <div class="footer"><p><strong>${d.footer_description||"Thank you for your business!"}</strong></p><p>${d.footer_description?"":"Please visit us again!"}</p><p style="margin-top:6px; font-size:9px;">Powered by POS System</p></div>
      </div>

      <script type="text/javascript">
        let printExecuted = false;
        window.onload = function(){ setTimeout(function(){ if(!printExecuted){ printExecuted = true; window.print(); } }, 300); };
        window.onafterprint = function(){ setTimeout(function(){ window.close(); }, 200); };
        setTimeout(function(){ if(!window.closed){ window.close(); } }, 5000);
      <\/script>
    </body>
    </html>
  `,g=window.open("","_blank","width=320,height=640");if(!g){alert("Please allow pop-ups to print receipt");return}g.document.write(F),g.document.close()},Y=async a=>{try{await et.post("/products/log-activity",{action:"view",module:"sales history",details:{sale_id:a.id,invoice_no:a.invoice_no,customer:a.customer?a.customer.name:"Walk-in",sale_date:a.sale_date,total_amount:a.total_amount,net_amount:a.net_amount,balance:a.balance}})}catch(e){console.error("Activity log failed",e)}};return(a,e)=>{const d=J("AppLayout");return m(),K(d,null,{default:H(()=>[t("div",nt,[t("div",at,[t("div",rt,[t("button",{onClick:e[0]||(e[0]=(...o)=>c(I)&&c(I)(...o)),class:"px-6 py-2.5 rounded-[5px] font-medium text-sm bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-200"}," ← Back "),e[2]||(e[2]=t("h1",{class:"text-4xl font-bold text-gray-800"},"Sales History",-1))]),t("div",it,[t("span",lt," Total: "+s(p.sales.total)+" records ",1)])]),X(st,{show:z.value,onClose:L,"max-width":"3xl"},{default:H(()=>{var o,y,b,f,C,T,h,v,w,_,$,j,F,g,l,k,M,U,V,R;return[t("div",dt,[t("div",ct,[t("div",pt,[t("div",null,[e[4]||(e[4]=t("h2",{class:"text-2xl font-bold text-blue-700 mb-1"},"Sale Details",-1)),t("p",ut,[e[3]||(e[3]=Z(" Invoice: ",-1)),t("span",mt,s((o=n.value)==null?void 0:o.invoice_no),1)])]),t("div",xt,[t("button",{onClick:e[1]||(e[1]=r=>Q(n.value)),class:"px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-[5px] transition-all duration-200"}," 🖨️ Print "),t("button",{onClick:L,class:"p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-full transition-all duration-200"},[...e[5]||(e[5]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)])])])])]),t("div",yt,[t("div",bt,[t("div",gt,[e[10]||(e[10]=t("h3",{class:"text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide"}," Sale Information ",-1)),t("div",ft,[t("div",null,[e[6]||(e[6]=t("span",{class:"text-gray-600"},"Customer:",-1)),t("p",ht,s((y=n.value)!=null&&y.customer?n.value.customer.name:"Walk-in Customer"),1)]),t("div",null,[e[7]||(e[7]=t("span",{class:"text-gray-600"},"Sale Date:",-1)),t("p",vt,s(D((b=n.value)==null?void 0:b.sale_date)),1)]),t("div",null,[e[8]||(e[8]=t("span",{class:"text-gray-600"},"Sale Type:",-1)),t("p",wt,[t("span",{class:S({"text-green-600":((f=n.value)==null?void 0:f.type)===1,"text-blue-600":((C=n.value)==null?void 0:C.type)===2})},s(E((T=n.value)==null?void 0:T.type)),3)])]),t("div",null,[e[9]||(e[9]=t("span",{class:"text-gray-600"},"Items Count:",-1)),t("p",_t,s(((v=(h=n.value)==null?void 0:h.products)==null?void 0:v.length)||0)+" items ",1)])])]),t("div",$t,[e[13]||(e[13]=t("div",{class:"bg-gray-50 px-5 py-3 border-b border-gray-200"},[t("h3",{class:"text-sm font-semibold text-gray-700 uppercase tracking-wide"}," Products ")],-1)),t("div",kt,[t("table",St,[e[12]||(e[12]=t("thead",{class:"bg-gray-50 border-b-2 border-blue-600"},[t("tr",null,[t("th",{class:"px-5 py-3 text-left font-semibold text-gray-800 text-sm"}," Item "),t("th",{class:"px-5 py-3 text-center font-semibold text-gray-800 text-sm"}," Qty "),t("th",{class:"px-5 py-3 text-right font-semibold text-gray-800 text-sm"}," Price "),t("th",{class:"px-5 py-3 text-right font-semibold text-gray-800 text-sm"}," Total ")])],-1)),t("tbody",Ct,[(m(!0),x(A,null,B(((w=n.value)==null?void 0:w.products)||[],r=>(m(),x("tr",{key:r.id,class:"hover:bg-gray-50 transition"},[t("td",Tt,s(r.product&&r.product.name||r.product_name||"Unknown Product"),1),t("td",jt,s(r.quantity),1),t("td",Ft,s(c(i).props.currency||"")+" "+s(u(r.price)),1),t("td",Pt,s(c(i).props.currency||"")+" "+s(u(r.total||r.price*r.quantity)),1)]))),128)),!((_=n.value)!=null&&_.products)||n.value.products.length===0?(m(),x("tr",Dt,[...e[11]||(e[11]=[t("td",{colspan:"4",class:"px-5 py-8 text-center text-gray-500"}," No products found ",-1)])])):q("",!0)])])])]),t("div",zt,[e[21]||(e[21]=t("h3",{class:"text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide"}," Payment Summary ",-1)),t("div",Nt,[t("div",qt,[e[14]||(e[14]=t("span",{class:"text-gray-700"},"Subtotal:",-1)),t("span",At,s(c(i).props.currency||"")+" "+s(u(($=n.value)==null?void 0:$.total_amount)),1)]),t("div",Bt,[e[15]||(e[15]=t("span",{class:"text-gray-700"},"Discount:",-1)),t("span",It," - "+s(c(i).props.currency||"")+" "+s(u((j=n.value)==null?void 0:j.discount)),1)]),t("div",Et,[e[16]||(e[16]=t("span",{class:"text-gray-800 font-semibold"},"Net Amount:",-1)),t("span",Lt,s(c(i).props.currency||"")+" "+s(u((F=n.value)==null?void 0:F.net_amount)),1)]),t("div",Mt,[e[17]||(e[17]=t("span",{class:"text-gray-700 font-semibold"},"Cash Payment:",-1)),t("span",Ut,s(c(i).props.currency||"")+" "+s(u((l=(g=n.value)==null?void 0:g.payments)==null?void 0:l.filter(r=>r.payment_type===0).reduce((r,N)=>r+Number(N.amount),0))),1)]),t("div",Vt,[e[18]||(e[18]=t("span",{class:"text-gray-700 font-semibold"},"Card Payment:",-1)),t("span",Rt,s(c(i).props.currency||"")+" "+s(u((M=(k=n.value)==null?void 0:k.payments)==null?void 0:M.filter(r=>r.payment_type===1).reduce((r,N)=>r+Number(N.amount),0))),1)]),t("div",Wt,[e[19]||(e[19]=t("span",{class:"text-gray-700"},"Paid:",-1)),t("span",Ht,s(c(i).props.currency||"")+" "+s(u((((U=n.value)==null?void 0:U.net_amount)||0)-(((V=n.value)==null?void 0:V.balance)||0))),1)]),t("div",Ot,[e[20]||(e[20]=t("span",{class:"text-gray-800 font-semibold"},"Balance:",-1)),t("span",{class:S(["font-bold text-lg",n.value&&n.value.balance>0?"text-red-600":"text-green-600"])},s(c(i).props.currency||"")+" "+s(u((R=n.value)==null?void 0:R.balance)),3)])])])])])])]}),_:1},8,["show"]),t("div",Qt,[t("div",Yt,[t("table",Gt,[e[23]||(e[23]=t("thead",{class:"bg-gray-50 border-b-2 border-blue-600"},[t("tr",null,[t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"#"),t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"Invoice Nosdc"),t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"Customer"),t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"Type"),t("th",{class:"px-6 py-3 text-right font-semibold text-gray-800"},"Total"),t("th",{class:"px-6 py-3 text-right font-semibold text-gray-800"},"Returns"),t("th",{class:"px-6 py-3 text-right font-semibold text-gray-800"},"Balance"),t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"Sale Date"),t("th",{class:"px-6 py-3 font-semibold text-gray-800"},"Actions")])],-1)),t("tbody",null,[(m(!0),x(A,null,B(p.sales.data,(o,y)=>(m(),x("tr",{key:o.id,class:"border-b border-gray-200 hover:bg-gray-50"},[t("td",Jt,[t("div",Kt,s((p.sales.current_page-1)*p.sales.per_page+y+1),1)]),t("td",Xt,[t("strong",Zt,s(o.invoice_no),1)]),t("td",te,s(o.customer?o.customer.name:"Walk-in"),1),t("td",ee,[t("span",{class:S({"bg-green-500 text-white px-3 py-1 rounded-full font-medium text-sm":o.type===1,"bg-blue-500 text-white px-3 py-1 rounded-full font-medium text-sm":o.type===2})},s(E(o.type)),3)]),t("td",se,s(c(i).props.currency||"")+" "+s(u(o.net_amount)),1),t("td",oe,[t("div",ne," - "+s(c(i).props.currency||"")+" "+s(u(o.returns_total||0)),1),t("div",ae,s(o.returns_count||0)+" returns ",1)]),t("td",{class:S(["px-6 py-4 text-right",o.balance>0?"text-red-600 font-bold":"text-green-600 font-semibold"])},s(c(i).props.currency||"")+" "+s(u(o.balance)),3),t("td",re,s(D(o.sale_date)),1),t("td",ie,[t("div",le,[t("button",{onClick:b=>O(o),class:"px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-[5px] text-white text-sm font-medium transition"}," View ",8,de)])])]))),128)),!p.sales.data||p.sales.data.length===0?(m(),x("tr",ce,[...e[22]||(e[22]=[t("td",{colspan:"13",class:"px-6 py-8 text-center text-gray-500 font-medium"}," No sales found ",-1)])])):q("",!0)])])]),p.sales.links?(m(),x("div",pe,[t("div",ue," Showing "+s(p.sales.from)+" to "+s(p.sales.to)+" of "+s(p.sales.total)+" results ",1),t("div",me,[(m(!0),x(A,null,B(p.sales.links,o=>(m(),x("button",{key:o.label,onClick:y=>o.url?c(tt).visit(o.url):null,disabled:!o.url,class:S(["px-4 py-2 rounded-[5px] font-medium transition",o.active?"bg-blue-600 text-white":o.url?"bg-white text-gray-700 hover:bg-gray-100 border border-gray-300":"bg-gray-200 text-gray-400 cursor-not-allowed"]),innerHTML:o.label},null,10,xe))),128))])])):q("",!0)])])]),_:1})}}};export{fe as default};
