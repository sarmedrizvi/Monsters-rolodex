(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(e,t,n){},,function(e,t,n){},,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),s=(n(15),n(5)),l=n(6),i=n(8),m=n(7),u=n(9),h=(n(3),n(1),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180"),alt:"monsters"}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("h4",null,e.monster.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monster.map((function(e){return r.a.createElement(h,{key:e.id,monster:e})})))},p=function(e){var t=e.placeholder,n=e.handler;return r.a.createElement("input",{type:"search",placeholder:t,className:"seachField-style",onChange:n})},f=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handler=function(t){e.setState({SearchField:t.target.value})},e.state={monster:[],SearchField:""},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monster:t})}))}},{key:"render",value:function(){var e=this,t=this.state.monster.filter((function(t){return t.name.toLowerCase().includes(e.state.SearchField.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(p,{handler:this.handler,placeholder:"search monsters"}),r.a.createElement(d,{monster:t}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d9c068c5.chunk.js.map