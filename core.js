/* globals */
window.Cloudouble = window.Cloudouble || {}
window.Cloudouble.Core = window.Cloudouble.Core || {}
window.Cloudouble.Core.Version = '1.0.0'
window.Cloudouble.Core.Methods = window.Cloudouble.Core.Methods || {}
window.Cloudouble.Core.Methods.getCookie = function(name) { var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)'); return v ? v[2] : null; }
window.Cloudouble.Core.Methods.setCookie = function(name, value, _expires) { var d = new Date; d.setTime(_expires ? _expires*1000 : d.getTime()); document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString(); }
window.Cloudouble.Core.Methods.deleteCookie = function(name) { window.Cloudouble.Core.Methods.setCookie(name, '', -1); }
