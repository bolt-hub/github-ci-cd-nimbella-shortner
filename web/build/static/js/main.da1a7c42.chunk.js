(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(2),s=n.n(a),l=n(12),r=n.n(l),c=(n(22),n(23),n(13)),o=n(14),i=n(17),u=n(16),h=n(15),d=n.n(h),b=n(0),j=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={actual_url:null,shorten_url_response:null},a.handleClick=function(){a.setState({shorten_url_response:null}),a.ValidURL()?a.setData():a.setState({linkvalid:"Please enter valid URL"})},a.setUrl=function(t){a.setState({linkvalid:null}),a.setState({actual_url:t.target.value}),console.log(a.state)},a.state={actual_url:null,shorten_url_response:null,linkvalid:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.title="URL Shortner"}},{key:"ValidURL",value:function(){return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(this.state.actual_url)}},{key:"setData",value:function(){var t=this;console.log(),d.a.post("https://"+window.location.hostname+"/api/s/url",{actual_url:this.state.actual_url},{headers:{"content-type":"application/json"}}).then((function(e){return t.setState({shorten_url_response:e.data.short_url})}))}},{key:"render",value:function(){var t,e;return this.state.shorten_url_response&&(t=Object(b.jsx)("label",{className:"labelclass",children:"Your shortened URL is"})),this.state.linkvalid&&(e=Object(b.jsx)("label",{className:"labelerror",children:"Please enter a valid url"})),Object(b.jsxs)("div",{children:[Object(b.jsx)("textarea",{class:"textboxHeight",type:"url",required:!0,pattern:"^(http|https)://\\.(.*)",className:"textboxHeight",onChange:this.setUrl,placeholder:"paste the link to shorten.."}),Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"button",className:"button",value:"submit",onClick:this.handleClick}),Object(b.jsx)("br",{}),e,Object(b.jsx)("br",{}),t,Object(b.jsx)("br",{}),Object(b.jsx)("a",{className:"resultTextArea",href:this.state.shorten_url_response,target:"_blank",rel:"noopener noreferrer",children:this.state.shorten_url_response})]})}}]),n}(a.Component);var p=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("favicon",{url:"./public/fav-icon.ico"}),Object(b.jsx)("h1",{children:"URL Shortner"}),Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(j,{})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,l=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),l(t),r(t)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.da1a7c42.chunk.js.map