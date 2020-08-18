module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"is",value:function(e,t){return null!=e&&e.constructor.toString().toLowerCase().search(t.toLowerCase())>=0}},{key:"isHTML",value:function(e){return null!=e&&this.is(e,"html")&&this.is(e,"element")}},{key:"getType",value:function(e){if(this.isHTML(e)){var t=e.id,n=t.length?"#"+t:"";return e.tagName+n}return null===e?"null":void 0===e?"undefined":e.constructor.name}},{key:"shortenStr",value:function(e){return"string"==typeof e&&e.length>50?e.slice(0,50)+"...":e}},{key:"test",value:function(e,t,n){return{pass:e,message:e?t:n}}},{key:"notMsg",value:function(e){return e?" not":""}},{key:"returnBlock",value:function(e){return{compare:function(){return e(arguments)},negativeCompare:function(){return e(arguments,!0)}}}}])&&r(t.prototype,n),o&&r(t,o),e}());function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(n,e);var t=a(n);function n(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t.call(this)).toBeHTMLElement=e._toBeHTMLElement,e.toBeHTMLText=e._toBeHTMLText,e.toBeDocumentNode=e._toBeDocumentNode,e.toContainHTMLElement=e._toContainHTMLElement,e.toContainText=e._toContainText,e.toBeChildOf=e._toBeChildOf,e.toBeNthChild=e._toBeNthChild,e.toBeParentOf=e._toBeParentOf,e.toHaveSameParent=e._toHaveSameParent,e.toHaveChildren=e._toHaveChildren,e.toBeNextSiblingOf=e._toBeNextSiblingOf,e.toBePreviousSiblingOf=e._toBePreviousSiblingOf,e.toBeEmpty=e._toBeEmpty,e.toHaveAnyAttribute=e._toHaveAnyAttribute,e.toHaveAttribute=e._toHaveAttribute,e.toHaveClass=e._toHaveClass,e.toHaveComputedStyle=e._toHaveComputedStyle,e.toHaveComputedColor=e._toHaveComputedColor,e.toHaveEvent=e._toHaveEvent,e}return n}(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"_toBeHTMLElement",value:function(){return{compare:function(e,t){var n,r,u,i,s,a,c;return n=o.isHTML(e),r=o.is(t,"String")?t.replace(/\W/g,""):"",u=!n||!r.length||e.nodeName===r.toUpperCase(),i=n&&u,s=r?"<"+r.toLowerCase()+">":"HTML",a="Expected "+o.getType(e)+" not to be a "+s+" Element",c="Expected "+o.getType(e)+" to be a "+s+" Element",o.test(i,a,c)}}}},{key:"_toBeHTMLText",value:function(){return{compare:function(e,t){var n,r,u,i,s,a,c,l,f,p;return n=o.is(e,"text"),r=o.is(t,"string"),u=o.is(t,"regexp"),i=!n||!r||e.textContent===t,s=!n||!u||Boolean(e.textContent.match(t)),a=n&&i&&s,c=" of content '"+o.shortenStr(t)+"'",l=n&&r?c:n&&u?" of content matching regular expression "+t:"",f="Expected "+o.getType(e)+" not to be the [HTML Text] Object"+l,p="Expected "+o.getType(e)+" to be the [HTML Text] Object"+l,o.test(a,f,p)}}}},{key:"_toBeDocumentNode",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a=e[0];return r=!!(n=o.isHTML(a)||o.is(a,"text"))&&a.ownerDocument.documentElement.contains(a),u=t?n&&!r:n&&r,i=n&&!r?" (not a document node)":"",s="Expected "+o.getType(a)+i+o.notMsg(t)+" to be the document node",o.test(u,s,s)}))}},{key:"_toContainHTMLElement",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s=e[0],a=e[1];return r=!!(n=o.isHTML(s)&&o.isHTML(a))&&s.contains(a)&&s!==a,u=t?n&&!r:n&&r,i="Expected "+o.getType(s)+o.notMsg(t)+" to contain "+o.getType(a),o.test(u,i,i)}))}},{key:"_toContainText",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d,g,v=e[0],y=e[1];return n=o.isHTML(v),r=o.is(y,"string"),u=o.is(y,"regexp"),a=n&&(r||u),i=n?v.textContent.replace(/(\n|\t|\v)/g," ").replace(/\s\s+/g," ").replace(/^\s/,""):i,s=!!a&&Boolean(i.match(y)),c=t?a&&!s:a&&s,l="'"+o.shortenStr(y)+"'",f="regular expression "+y,p=o.getType(y)+" while text or regular expression was expected",d=r?l:u?f:p,g="Expected "+o.getType(v)+o.notMsg(t)+" to contain "+d,o.test(c,g,g)}))}},{key:"_toBeChildOf",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s=e[0],a=e[1];return r=!!(n=(o.isHTML(s)||o.is(s,"text"))&&o.isHTML(a))&&s.parentNode===a,u=t?n&&!r:n&&r,i="Expected "+o.getType(s)+o.notMsg(t)+" to be the child element of "+o.getType(a),o.test(u,i,i)}))}},{key:"_toBeNthChild",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d,g,v=e[0],y=e[1];return n=o.isHTML(v),r=!!o.is(y,"number")&&y>=0,u=!!o.is(y,"string")&&Boolean(y.match(/\s*last\s*/i)),i=n&&(r||u),s=n&&o.isHTML(v.parentNode)?v.parentNode.children:[],a=!!n&&(r?v===s[y]:!!u&&v===s[s.length-1]),c=t?i&&!a:i&&a,l=function(){for(var e=0;e<s.length;e++)if(v===s[e])return e+1;return null}(),y=r?y+1:u?"'"+y+"'":"[incorrect index value]",f=" while "+o.getType(v)+" has not got parent Element",p=" while it is "+l+h(l)+" child node of its parent Element",d=n?null===l?f:p:"",g="Expected "+o.getType(v)+o.notMsg(t)+" to be "+y+h(y)+" child node of its parent"+d,o.test(c,g,g);function h(e){return 1===e?"st":2===e?"nd":3===e?"rd":"number"==typeof e?"th":""}}))}},{key:"_toBeParentOf",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s=e[0],a=e[1];return r=!!(n=o.isHTML(s)&&(o.isHTML(a)||o.is(a,"text")))&&a.parentElement===s,u=t?n&&!r:n&&r,i="Expected "+o.getType(a)+o.notMsg(t)+" to be the parent element of "+o.getType(s),o.test(u,i,i)}))}},{key:"_toHaveSameParent",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c=e[0],l=e[1];return n=o.isHTML(c)||o.is(c,"text"),r=o.isHTML(l)||o.is(l,"text"),i=!!(u=n&&r)&&c.parentNode===l.parentNode,s=t?u&&!i:u&&i,a="Expected "+o.getType(c)+o.notMsg(t)+" to have the same parent as "+o.getType(l),o.test(s,a,a)}))}},{key:"_toHaveChildren",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d,g,v,y,h=e[0],m=e[1],x=e[2];return r=[/\s*or\s*more\s*/i,/\s*or\s*less\s*/i,/\s*more\s*than\s*/i,/\s*less\s*than\s*/i],u=o.isHTML(h),i=r.some((function(e,t){var r="string"==typeof x&&Boolean(x.match(e));return n=!1!==r?t:n,r})),d=!!u&&o.is(m,"Number")&&m>=0,p=!!u&&(d?(g=h.children.length,y=[g>=(v=m),g<=v,g>v,g<v],i?y[n]:g===v):h.children.length>0),f=t?u&&!p:u&&p,l=[" or more "," or less","more than ","less than "],c=n>1?l[n]+m:n<=1?m+l[n]:m,c=d?c+" child node(s)":"any child node",a=u?" when it contains "+h.children.length+" child node(s).":".",s="Expected "+o.getType(h)+o.notMsg(t)+" to contain "+c+a,o.test(f,s,s)}))}},{key:"_toBeNextSiblingOf",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f=e[0],p=e[1];return r=(n=o.isHTML(f)&&o.isHTML(p))?p.nextElementSibling:r,u=!!n&&r===f,i=t?n&&!u:n&&u,s=" while next sibling is "+o.getType(r),a=" while "+o.getType(p)+" has not got next sibling element",c=t?"":r?s:n?a:"",l="Expected "+o.getType(f)+o.notMsg(t)+" to be next sibling of "+o.getType(p)+c,o.test(i,l,l)}))}},{key:"_toBePreviousSiblingOf",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f=e[0],p=e[1];return r=(n=o.isHTML(f)&&o.isHTML(p))?p.previousElementSibling:r,u=!!n&&r===f,i=t?n&&!u:n&&u,s=" while previous sibling is "+o.getType(r),a=" while "+o.getType(p)+" has not got previous sibling element",c=t?"":r?s:n?a:"",l="Expected "+o.getType(f)+o.notMsg(t)+" to be previous sibling of "+o.getType(p)+c,o.test(i,l,l)}))}},{key:"_toBeEmpty",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c=e[0];return u=!(r=(n=o.isHTML(c))?function(){for(var e=c.childNodes,t=[],n=0;n<e.length;n++)o.isHTML(e[n])&&"BR"!==e[n].nodeName&&"WBR"!==e[n].nodeName&&t.push(e[n]),"#text"===e[n].nodeName&&e[n].textContent.replace(/(\s|\n|\t|\v)/g,"").length&&t.push(e[n]);return t}():[]).length,i=t?n&&!u:n&&u,s=u?"":" while it contains "+r.length+" node(s)",a="Expected "+o.getType(c)+o.notMsg(t)+" to be empty"+s,o.test(i,a,a)}))}},{key:"_toHaveAnyAttribute",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s=e[0];return r=!!(n=o.isHTML(s))&&s.hasAttributes(),u=t?n&&!r:n&&r,i="Expected "+o.getType(s)+o.notMsg(t)+" to have any attributes defined",o.test(u,i,i)}))}},{key:"_toHaveAttribute",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d=e[0],g=e[1],v=e[2];return n=o.isHTML(d),r=o.is(g,"string"),i=o.is(v,"string"),s=o.is(v,"regex"),a=!!(u=!(!n||!r)&&d.hasAttribute(g))&&(void 0===v||(i?d.getAttribute(g)===v:!s||Boolean(d.getAttribute(g).match(v)))),c=t?n&&r&&!(u&&a):n&&r&&u&&a,l=n?r?" '"+g+"'":" of type "+o.getType(g):"",f=n&&r?i?" of '"+v+"' value ":s?" of value matched regular expression "+v:"":"",p="Expected "+o.getType(d)+o.notMsg(t)+" to have an attribute"+l+f+" specified",o.test(c,p,p)}))}},{key:"_toHaveClass",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l=e[0],f=e[1];return n=o.isHTML(l),r=o.is(f,"string"),i=!!(u=n&&r)&&function(e){var t=e.getAttribute("class");return(null!==t&&""!==t.replace(/\s\s+/g,"")?t.split(" "):[]).some((function(e){return e===f}))}(l),s=t?u&&!i:u&&i,a=n?r?" '"+f+"'":" of type "+o.getType(f):"",c="Expected "+o.getType(l)+o.notMsg(t)+" to have class"+a,o.test(s,c,c)}))}},{key:"_toHaveComputedStyle",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d,g,v,y,h,m,x,T,b=e[0],H=e[1],M=e[2];return r=!!(n=o.isHTML(b))&&b.ownerDocument.documentElement.contains(b)&&b.ownerDocument.documentElement!==b,u=o.is(H,"string"),i=o.is(M,"string"),s=o.is(M,"regexp"),a=n&&r&&u&&(i||s),c=u?H.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})):H,l=u?H.replace(/\x2D\w/g,(function(e){return e[1].toUpperCase()})):H,p=!!(f=n&&r&&u?window.getComputedStyle(b,null):f)&&f.getPropertyValue(c),g=!!(d=!!f&&void 0!==f[l])&&(i?p===M:!!s&&Boolean(p.match(M))),v=t?a&&!g:a&&g,y=n&&!r?" (not a document node)":"",h=n&&r?u?"'"+c+"'":"["+o.getType(H)+"]":"",m=a&&d?", while the computed value is '"+p+"'":"",x=u&&n&&r?i?" of the value '"+M+"'":s?" of the value matched the regular expression "+M:" of ["+o.getType(M)+"] value":"",T="Expected "+o.getType(b)+y+o.notMsg(t)+" to have the "+h+" style"+x+m,o.test(v,T,T)}))}},{key:"_toHaveComputedColor",value:function(e){return o.returnBlock((function(t,n){var r,u,i,s,a,c,l,f,p,d,g,v,y,h,m,x,T,b=t[0],H=t[1],M=t[2];return u=!!(r=o.isHTML(b))&&b.ownerDocument.documentElement.contains(b)&&b.ownerDocument.documentElement!==b,i=o.is(H,"string"),s=o.is(M,"string"),a=r&&u&&i&&s,c=i?H.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})):H,l=i?H.replace(/\x2D\w/g,(function(e){return e[1].toUpperCase()})):H,p=!!(f=r&&u&&i?window.getComputedStyle(b,null):f)&&f.getPropertyValue(c),g=!!(d=!!f&&void 0!==f[l])&&!!s&&function(t,n){var r,o;return E(t,1,1)&&(r=C(t,!0)),E(t,2,1)&&(r=C(t,!1)),E(t,5,1)&&(r=[0,0,0,0]),E(n,0,0)&&(o=function(e){return 4===(e=e.replace(/\s/g,"")).length?[t(e[1]+e[1]),t(e[2]+e[2]),t(e[3]+e[3]),1]:[t(e[1]+e[2]),t(e[3]+e[4]),t(e[5]+e[6]),1];function t(e){return parseInt(e,16)}}(n)),E(n,1,0)&&(o=C(n,!0)),E(n,2,0)&&(o=C(n,!1)),E(n,3,0)&&(o=B(n,!0)),E(n,4,0)&&(o=B(n,!1)),E(n,5,0)&&(o=[0,0,0,0]),!(!r||!o)&&e.equals(r,o)}(p,M),v=n?a&&!g:a&&g,y=r&&!u?" (not a document node)":"",h=r&&u?i?"'"+c+"'":"["+o.getType(H)+"]":"",m=a&&d?", while the computed value is '"+p+"'":"",x=i&&r&&u?s?" of the value '"+M+"'":" of ["+o.getType(M)+"] value":"",T="Expected "+o.getType(b)+y+o.notMsg(n)+" to have the "+h+" style"+x+m,o.test(v,T,T);function E(e,t,n){var r=[/^\s*/,/^.*/][n].source,o=[/\s*$/,/.*$/][n].source,u=[/\x23(([A-F]|[0-9]){3}\s*$|([A-F]|[0-9]){6})/i,/rgb\x28(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*\x2C\s*){2}(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*)\x29/,/rgba\x28(\s*(\d|\d{2}|[0-1]\d{2}|[0-2][0-4]\d|[0-2][0-5]{2})\s*\x2C\s*){3}(\s*([0-1]|0\x2E\d+|\x2E\d+|1\x2E0+)\s*)\x29/,/hsl\x28\s*(\d|\d{2}|[0-2]\d{2}|[0-3][0-5]\d|360)(\s*\x2C\s*(\d{1,2}(\x2E\d+)?|100)\x25\s*){2}\x29/,/hsla\x28\s*(\d|\d{2}|[0-2]\d{2}|[0-3][0-5]\d|360)(\s*\x2C\s*(\d{1,2}(\x2E\d+)?|100)\x25\s*){2}\x2C\s*([0-1]|0\x2E\d+|\x2E\d+|1\x2E0+)\s*\x29/,/transparent/i][t],i=u.ignoreCase?"i":"",s=new RegExp(r+u.source+o,i);return e.search(s)>=0}function B(e,t){var n,r,o,u,i,s,a,c,l,f=e.slice(e.search(/\x28/)+1,e.search(/\x29/)).replace(/\x25/g,"").split(",");return f.forEach((function(e,t,n){n[t]=Number(e)})),t&&f.push(1),u=f[0]/360,i=f[1]/100,s=f[2]/100,a=Number(f[3].toFixed(2)),0===i?n=r=o=Math.round(255*s):(n=p(l=2*s-(c=s>=.5?i+s-s*i:s*(i+1)),c,u+1/3),r=p(l,c,u),o=p(l,c,u-1/3)),[n,r,o,a];function p(e,t,n){var r=(n=n<0?n+1:n>1?n-1:n)<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e;return Math.round(255*r)}}function C(e,t){var n=e.slice(e.search(/\x28/)+1,e.search(/\x29/)).split(",");return n.forEach((function(e,t,n){n[t]=Number(e)})),t&&n.push(1),n[3]=Number(n[3].toFixed(2)),n}}))}},{key:"_toHaveEvent",value:function(){return o.returnBlock((function(e,t){var n,r,u,i,s,a,c,l,f,p,d=e[0],g=e[1];return n=o.isHTML(d),r=o.is(g,"string"),u=n&&r,i=r?0===(p=(p=g).replace(/\s/g,"").toLowerCase()).search("on")?p:"on"+p:g,s=!!n&&Boolean(d[i]),a=!!n&&void 0!==d[i],c=t?u&&a&&!s:u&&a&&s,l=n?a?i:"unrecognized ":"",f="Expected "+o.getType(d)+o.notMsg(t)+" to have "+l+" event attached",o.test(c,f,f)}))}}])&&u(t.prototype,n),r&&u(t,r),e}());t.default=new f}]).default;