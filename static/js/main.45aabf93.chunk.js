(this.webpackJsonpemployeedirectoryapp=this.webpackJsonpemployeedirectoryapp||[]).push([[0],{24:function(e,t,s){},4:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),r=s(13),c=s.n(r),l=(s(24),s(4),s(14)),o=s(15),i=s(19),u=s(18),m=s(16),h=s.n(m),d=function(){return h.a.get("https://randomuser.me/api/?results=200&nat=us&inc=name,email,dob,phone,picture&noinfo")},j=s(17),f=s.n(j),b=s(0);var p=function(e){var t=e.results.map((function(e){return Object(b.jsxs)("div",{className:"row row-cols-5 mb-3",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("img",{src:e.picture.large,alt:e.name.first+" "+e.name.last})}),Object(b.jsx)("div",{className:"col",children:e.name.first+" "+e.name.last}),Object(b.jsx)("div",{className:"col",children:e.phone}),Object(b.jsx)("div",{className:"col",children:e.email}),Object(b.jsx)("div",{className:"col",children:f()(e.dob.date).format("MMM D, YYYY")})]},e.phone)}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row row-cols-5 mb-3 mt-3 font-weight-bold",children:[Object(b.jsx)("div",{className:"col text-center",children:"Image"}),Object(b.jsxs)("div",{className:"col text-center sortable",onClick:e.handleSort,children:["Name ",Object(b.jsx)("span",{classList:"large",children:"\u25be"})]}),Object(b.jsx)("div",{className:"col text-center",children:"Phone"}),Object(b.jsx)("div",{className:"col text-center",children:"Email"}),Object(b.jsx)("div",{className:"col text-center",children:"DOB"})]}),t]})})};var x=function(e){return Object(b.jsx)("form",{className:"mt-3",children:Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for Employee by Name",id:"search",size:"30"})})})},g=function(e){Object(i.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={results:[],search:"",toggle:1},e.searchEmployees=function(){d().then((function(t){e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))},e.searchEmployeeResults=function(t){console.log("Query String: ",t),console.log("Results: ",e.state.results);var s=e.state.results.filter((function(e){return e.name.first.includes(t)||e.name.last.includes(t)}));e.setState({results:s})},e.handleInputChange=function(t){var s=t.target.value;console.log("Value: ",s);var n=e.state.results.filter((function(e){return e.name.first.includes(s)||e.name.last.includes(s)}));e.setState({search:s,results:n})},e.handleSort=function(t){1===e.state.toggle?e.setState({results:e.state.results.sort((function(e,t){return e.name.first>t.name.first||e.name.first===t.name.first&&e.name.last>t.name.last?1:-1})),toggle:-1}):e.setState({results:e.state.results.sort((function(e,t){return e.name.first<t.name.first||e.name.first===t.name.first&&e.name.last<t.name.last?1:-1})),toggle:1})},e.handleFormSubmit=function(t){t.preventDefault(),e.searchEmployeeResults(e.state.search)},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(b.jsx)(p,{results:this.state.results,handleSort:this.handleSort})]})}}]),s}(n.Component);var O=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:"Employee Directory"}),Object(b.jsx)("p",{children:'Click on the "Name" column to sort employees by name, or use the search box:'})]}),Object(b.jsx)(g,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),r(e),c(e)}))};s(45);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.45aabf93.chunk.js.map