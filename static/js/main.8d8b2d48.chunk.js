(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),o=n.n(r),s=(n(12),n(13),n(3)),i=n(4),l=n(6),u=n(5),h=function(e){return c.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},c.a.createElement("div",null,c.a.createElement("h2",null,e.name),c.a.createElement("p",null,e.symbol),c.a.createElement("p",null,e.price)))},m=function(e){var t=e.stocks,n=e.prices;return c.a.createElement("div",null,t.map((function(e,a){var r=n.filter((function(e){return e.id===t[a].stock_id}))[0];return c.a.createElement(h,{key:a,id:t[a].stock_id,name:t[a].name,symbol:t[a].short_name,price:null==r?0:r.price})})))},d=function(e){e.searchfield;var t=e.searchChange;return c.a.createElement("div",{className:"pa2"},c.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Stock",onChange:t}))},p=(n(14),function(e){return c.a.createElement("div",{style:{overflowY:"scroll",border:"5px soid black",height:"600px"}},e.children)}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={stocks:[],searchfield:"",prices:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fcsapi.com/api-v2/stock/list?country=United-states&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({stocks:t.response.slice(0,1e3)});for(var n="",a=e.state.stocks.length,c=0;c<=a-1;c++){n=n+","+e.state.stocks[c].stock_id}n=n.substring(1),console.log(n),fetch("https://fcsapi.com/api-v2/stock/latest?id=".concat(n,"&access_key=FT8DEOmaTBENI5Ai1plueQBn0DmBI7CVz19FAonyUjuurONg8y"),{method:"GET"}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({prices:t.response})}))}))}},{key:"render",value:function(){var e=this.state,t=e.stocks,n=e.searchfield,a=e.prices,r=this.state.stocks.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?c.a.createElement("div",{className:"tc"},c.a.createElement("h1",null,"STOCKS UP"),c.a.createElement(d,{searchChange:this.onSearchChange}),c.a.createElement(p,null,c.a.createElement(m,{stocks:r,prices:a}))):c.a.createElement("h1",null,"Loading")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.8d8b2d48.chunk.js.map