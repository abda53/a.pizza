window.jQuery||alert("The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery."),function($){var e=$.scrollTo=function(e,t,o){$(window).scrollTo(e,t,o)};function t(e){return"object"==typeof e?e:{top:e,left:e}}e.defaults={axis:"xy",duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:!0},e.window=function(e){return $(window)._scrollable()},$.fn._scrollable=function(){return this.map((function(){var e=this;if(!(!e.nodeName||-1!=$.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"])))return e;var t=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==t.compatMode?t.body:t.documentElement}))},$.fn.scrollTo=function(o,n,r){return"object"==typeof n&&(r=n,n=0),"function"==typeof r&&(r={onAfter:r}),"max"==o&&(o=9e9),r=$.extend({},e.defaults,r),n=n||r.duration,r.queue=r.queue&&r.axis.length>1,r.queue&&(n/=2),r.offset=t(r.offset),r.over=t(r.over),this._scrollable().each((function(){if(null!=o){var i,a=this,l=$(a),s=o,c={},f=l.is("html,body");switch(typeof s){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(s)){s=t(s);break}if(!(s=$(s,this)).length)return;case"object":(s.is||s.style)&&(i=(s=$(s)).offset())}$.each(r.axis.split(""),(function(t,o){var n="x"==o?"Left":"Top",d=n.toLowerCase(),h="scroll"+n,m=a[h],p=e.max(a,o);if(i)c[h]=i[d]+(f?0:m-l.offset()[d]),r.margin&&(c[h]-=parseInt(s.css("margin"+n))||0,c[h]-=parseInt(s.css("border"+n+"Width"))||0),c[h]+=r.offset[d]||0,r.over[d]&&(c[h]+=s["x"==o?"width":"height"]()*r.over[d]);else{var y=s[d];c[h]=y.slice&&"%"==y.slice(-1)?parseFloat(y)/100*p:y}r.limit&&/^\d+$/.test(c[h])&&(c[h]=c[h]<=0?0:Math.min(c[h],p)),!t&&r.queue&&(m!=c[h]&&u(r.onAfterFirst),delete c[h])})),u(r.onAfter)}function u(e){l.animate(c,n,r.easing,e&&function(){e.call(this,o,r)})}})).end()},e.max=function(e,t){var o="x"==t?"Width":"Height",n="scroll"+o;if(!$(e).is("html,body"))return e[n]-$(e)[o.toLowerCase()]();var r="client"+o,i=e.ownerDocument.documentElement,a=e.ownerDocument.body;return Math.max(i[n],a[n])-Math.min(i[r],a[r])}}(jQuery),function(e){function t(t,o,n){var r=o.hash.slice(1),i=document.getElementById(r)||document.getElementsByName(r)[0];if(i){t&&t.preventDefault();var a=e(n.target);if(!(n.lock&&a.is(":animated")||n.onBefore&&!1===n.onBefore(t,i,a))){if(n.stop&&a._scrollable().stop(!0),n.hash){t=i.id==r?"id":"name";var l=e("<a> </a>").attr(t,r).css({position:"absolute",top:e(window).scrollTop(),left:e(window).scrollLeft()});i[t]="",e("body").prepend(l),location=o.hash,l.remove(),i[t]=r}a.scrollTo(i,n).trigger("notify.serialScroll",[i])}}}var o=location.href.replace(/#.*/,""),n=e.localScroll=function(t){e("body").localScroll(t)};n.defaults={duration:1e3,axis:"y",event:"click",stop:!0,target:window,reset:!0},n.hash=function(o){if(location.hash){if((o=e.extend({},n.defaults,o)).hash=!1,o.reset){var r=o.duration;delete o.duration,e(o.target).scrollTo(0,o),o.duration=r}t(0,location,o)}},e.fn.localScroll=function(r){function i(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,"")==o&&(!r.filter||e(this).is(r.filter))}return(r=e.extend({},n.defaults,r)).lazy?this.bind(r.event,(function(o){var n=e([o.target,o.target.parentNode]).filter(i)[0];n&&t(o,n,r)})):this.find("a,area").filter(i).bind(r.event,(function(e){t(e,this,r)})).end().end()}}(jQuery),jQuery((function($){$.localScroll({filter:".smoothScroll"})}));