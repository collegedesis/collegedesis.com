define("app/templates/application",["exports"],function(e){e.default=Ember.Handlebars.template(function(e,s,t,n,a){function r(e,s){var n,a="";return s.buffer.push("\n        "),n=t.unless.call(e,"currentUser.approved",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(2,h,s),contexts:[e],types:["ID"],data:s}),(n||0===n)&&s.buffer.push(n),s.buffer.push("\n      "),a}function h(e,s){var n,a,r,h="";return s.buffer.push('\n          <p class="error">Get your profile approved by registering a membership with one of the '),n=t._triageMustache.call(e,"numOfOrganizations",{hash:{},hashTypes:{},hashContexts:{},contexts:[e],types:["ID"],data:s}),(n||0===n)&&s.buffer.push(n),s.buffer.push(" organizations in our "),a=t["link-to"]||e&&e["link-to"],r={hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(3,o,s),contexts:[e],types:["STRING"],data:s},n=a?a.call(e,"directory",r):y.call(e,"link-to","directory",r),(n||0===n)&&s.buffer.push(n),s.buffer.push("!</p>\n        "),h}function o(e,s){s.buffer.push("directory")}function i(e,s){s.buffer.push("About")}function p(e,s){s.buffer.push("Guidelines")}function u(e,s){s.buffer.push("Directory")}this.compilerInfo=[4,">= 1.0.0"],t=this.merge(t,Ember.Handlebars.helpers),a=a||{};var l,f,c,b="",d=this,y=t.helperMissing,g=this.escapeExpression;return a.buffer.push(g((f=t.partial||s&&s.partial,c={hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["STRING"],data:a},f?f.call(s,"header",c):y.call(s,"partial","header",c)))),a.buffer.push('\n\n<div class="outer-page">\n  <div class="page">\n    <div class="messages">\n      '),l=t["if"].call(s,"currentUser",{hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(1,r,a),contexts:[s],types:["ID"],data:a}),(l||0===l)&&a.buffer.push(l),a.buffer.push("\n    </div>\n    "),l=t._triageMustache.call(s,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[s],types:["ID"],data:a}),(l||0===l)&&a.buffer.push(l),a.buffer.push("\n  </div>\n\n</div>\n\n<div class=\"footer\">\n  <ul class='footer-links'>\n    <li>"),f=t["link-to"]||s&&s["link-to"],c={hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(5,i,a),contexts:[s],types:["STRING"],data:a},l=f?f.call(s,"about",c):y.call(s,"link-to","about",c),(l||0===l)&&a.buffer.push(l),a.buffer.push("</li>\n    <li>"),f=t["link-to"]||s&&s["link-to"],c={hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(7,p,a),contexts:[s],types:["STRING"],data:a},l=f?f.call(s,"guidelines",c):y.call(s,"link-to","guidelines",c),(l||0===l)&&a.buffer.push(l),a.buffer.push("</li>\n    <li>"),f=t["link-to"]||s&&s["link-to"],c={hash:{},hashTypes:{},hashContexts:{},inverse:d.noop,fn:d.program(9,u,a),contexts:[s],types:["STRING"],data:a},l=f?f.call(s,"directory",c):y.call(s,"link-to","directory",c),(l||0===l)&&a.buffer.push(l),a.buffer.push("</li>\n  </ul>\n  <center>&copy; CollegeDesis</center>\n</div>\n"),b})});