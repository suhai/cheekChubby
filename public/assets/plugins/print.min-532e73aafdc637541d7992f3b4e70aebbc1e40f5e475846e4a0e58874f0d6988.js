/*!
 * froala_editor v2.6.4 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2017 Froala Labs
 */


!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c)}:a(window.jQuery)}(function(a){a.FE.PLUGINS.print=function(a){function b(){var b=a.$el.html(),c=null;a.shared.print_iframe?c=a.shared.print_iframe:(c=document.createElement("iframe"),c.name="fr-print",c.style.position="fixed",c.style.top="0",c.style.left="-9999px",c.style.height="100%",c.style.width="0",c.style.overflow="hidden",c.style["z-index"]="9999",c.style.tabIndex="-1",document.body.appendChild(c),c.onload=function(){setTimeout(function(){a.events.disableBlur(),window.frames["fr-print"].focus(),window.frames["fr-print"].print(),a.$win.get(0).focus(),a.events.disableBlur(),a.events.focus()},0)},a.events.on("shared.destroy",function(){c.remove()}),a.shared.print_iframe=c);var d=c.contentWindow;d.document.open(),d.document.write("<!DOCTYPE html><html><head><title>"+document.title+"</title>"),Array.prototype.forEach.call(document.querySelectorAll("style"),function(a){a=a.cloneNode(!0),d.document.write(a.outerHTML)});var e=document.querySelectorAll("link[rel=stylesheet]");Array.prototype.forEach.call(e,function(a){var b=document.createElement("link");b.rel=a.rel,b.href=a.href,b.media="print",b.type="text/css",b.media="all",d.document.write(b.outerHTML)}),d.document.write('</head><body style="text-align: '+("rtl"==a.opts.direction?"right":"left")+"; direction: "+a.opts.direction+';"><div class="fr-view">'),d.document.write(b),d.document.write("</div></body></html>"),d.document.close()}return{run:b}},a.FE.DefineIcon("print",{NAME:"print"}),a.FE.RegisterCommand("print",{title:"Print",undo:!1,focus:!1,plugin:"print",callback:function(){this.print.run()}})});
