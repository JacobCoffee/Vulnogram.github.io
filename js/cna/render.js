function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function pugRender(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (Array, Date, JSON, Math, Object, String, conf, doc, docs, id, isNaN, page, parseFloat, renderComplete, renderTemplate, schemaName, textUtil, username) {pug_mixins["para"] = pug_interp = function(t){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (t) {
// iterate t.split(/\n/)
;(function(){
  var $$obj = t.split(/\n/);
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var line = $$obj[pug_index0];
if (line) {
if (line.startsWith('  ')) {
pug_html = pug_html + "\u003Ccode\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fcode\u003E\u003Cbr\u002F\u003E";
}
else {
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var line = $$obj[pug_index0];
if (line) {
if (line.startsWith('  ')) {
pug_html = pug_html + "\u003Ccode\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fcode\u003E\u003Cbr\u002F\u003E";
}
else {
pug_html = pug_html + "\u003Cp\u003E" + (pug_escape(null == (pug_interp = line) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
}
}
    }
  }
}).call(this);

}
};





















































































pug_mixins["renderVal"] = pug_interp = function(name, value, sum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (value != null) {
switch (name){
case 'ID':
pug_html = pug_html + "\u003Ca" + (" class=\"nobr\""+pug_attr("href", '/' + schemaName +'/'+ value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 'CVE':
if (value instanceof Array) {
// iterate value
;(function(){
  var $$obj = value;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var val = $$obj[pug_index4];
pug_mixins["renderVal"](name, val, sum);
pug_html = pug_html + " ";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var val = $$obj[pug_index4];
pug_mixins["renderVal"](name, val, sum);
pug_html = pug_html + " ";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "/cve/" + value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
  break;
case 'Draft':
pug_html = pug_html + "\u003Ca" + (pug_attr("href", "#" + value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 'date':
if (value instanceof Date) {
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["nobr","y"+((new Date()).getFullYear()-value.getFullYear())], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value.getFullYear()) ? "" : pug_interp)) + "-" + (pug_escape(null == (pug_interp = value.getMonth()+1) ? "" : pug_interp)) + "-" + (pug_escape(null == (pug_interp = value.getDate()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["nobr","y"+Math.floor(Math.log2((new Date()).getFullYear()-value.substr(0,4)+1)*2)], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value.substr(0,10)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
  break;
case 'state':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["icon",value], [false,true]), false, false)+pug_attr("title", value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'type':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["icon",value], [false,true]), false, false)+pug_attr("title", value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'vuln':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["icon",value], [false,true]), false, false)+pug_attr("title", value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'ToDo':
if (value.length > 0) {
pug_html = pug_html + "\u003Cb class=\"badge\"\u003E" + (pug_escape(null == (pug_interp = value.length) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
  break;
case 'owner':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["ico",value], [false,true]), false, false)+pug_attr("title", value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'File':
pug_html = pug_html + "\u003Ca" + (pug_attr("href", page+(page.endsWith('/')? '':'/')+value, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
  break;
case 'Filetype':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["square",value.charAt(0)], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'CVSS':
var s = parseFloat(value)
if (isNaN(s) || s<0 || s>10) {
pug_html = pug_html + (pug_escape(null == (pug_interp = value) ? "" : pug_interp));
}
else
if (s == 0) {
pug_html = pug_html + "\u003Cb class=\"tag NONE\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
else
if (value <= 3.9) {
pug_html = pug_html + "\u003Cb class=\"tag LOW\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
else
if (value <= 6.9) {
pug_html = pug_html + "\u003Cb class=\"tag MEDIUM\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
else
if (value <= 8.9) {
pug_html = pug_html + "\u003Cb class=\"tag HIGH\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
else
if (value <=10) {
pug_html = pug_html + "\u003Cb class=\"tag CRITICAL\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = value) ? "" : pug_interp));
}
  break;
case 'CVSSFull':
pug_html = pug_html + (pug_escape(null == (pug_interp = value.baseScore.toFixed(1)) ? "" : pug_interp)) + " ";
if (value.version >= "3.0") {
pug_html = pug_html + "(\u003Ca" + (pug_attr("href", "https://cvssjs.github.io/#" + value.vectorString, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value.vectorString) ? "" : pug_interp)) + "\u003C\u002Fa\u003E)";
}
else {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", 'https://nvd.nist.gov/vuln-metrics/cvss/v2-calculator?vector='+value.vectorString, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = value.vectorString) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
  break;
case 'Defect':
if (!sum.Defect) {sum.Defect = {} }

var defects = value
if (typeof defects === 'string' || defects instanceof String) {defects = value.split(/\s+/)}
if (typeof defects === 'number') {defects = [value]}
// iterate defects
;(function(){
  var $$obj = defects;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var d = $$obj[pug_index5];
sum.Defect[d]++;
if (conf.defectURL) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", conf.defectURL + d, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = d) ? "" : pug_interp));
}
pug_html = pug_html + " ";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var d = $$obj[pug_index5];
sum.Defect[d]++;
if (conf.defectURL) {
pug_html = pug_html + "\u003Ca" + (pug_attr("href", conf.defectURL + d, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = d) ? "" : pug_interp)) + "\u003C\u002Fa\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = d) ? "" : pug_interp));
}
pug_html = pug_html + " ";
    }
  }
}).call(this);

  break;
case 'level':
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["l" + value.charAt(0),value.substr(2,2)], [true,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = value.charAt(0)) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cspan class=\"extra\"\u003E" + (pug_escape(null == (pug_interp = value) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
case 'scopes':
// iterate value
;(function(){
  var $$obj = value;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var s = $$obj[pug_index6];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["icon",s.Resolution,s.State], [false,true,true]), false, false)+pug_attr("title", s['Planned-Release'] + " " + s.State + " " + s.Resolution, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = s['Planned-Release']) ? "" : pug_interp)) + "\u003Cspan class=\"extra\"\u003E " + (pug_escape(null == (pug_interp = s.Resolution ? s.Resolution : s.State) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var s = $$obj[pug_index6];
pug_html = pug_html + "\u003Cspan" + (pug_attr("class", pug_classes(["icon",s.Resolution,s.State], [false,true,true]), false, false)+pug_attr("title", s['Planned-Release'] + " " + s.State + " " + s.Resolution, true, false)) + "\u003E" + (pug_escape(null == (pug_interp = s['Planned-Release']) ? "" : pug_interp)) + "\u003Cspan class=\"extra\"\u003E " + (pug_escape(null == (pug_interp = s.Resolution ? s.Resolution : s.State) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
    }
  }
}).call(this);

  break;
default:
if (value instanceof Array) {
// iterate value
;(function(){
  var $$obj = value;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var v = $$obj[pug_index7];
pug_mixins["renderVal"](name, v, sum);
pug_html = pug_html + " ";
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var v = $$obj[pug_index7];
pug_mixins["renderVal"](name, v, sum);
pug_html = pug_html + " ";
    }
  }
}).call(this);

}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = value) ? "" : pug_interp));
}
  break;
}
}
};
pug_mixins["renderCell"] = pug_interp = function(name, value, sum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
switch (name){
case 'CVE':
pug_html = pug_html + "\u003Ctd class=\"CVE\" style=\"width:8em;\"\u003E";
pug_mixins["renderVal"](name, value, sum);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
  break;
case 'CVSS':
pug_html = pug_html + "\u003Ctd" + (" class=\"CVSS\""+pug_attr("data-sort", value ? value.toFixed(3) : false, true, false)) + "\u003E";
pug_mixins["renderVal"](name, value, sum);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
  break;
default:
pug_html = pug_html + "\u003Ctd" + (pug_attr("class", pug_classes([name], [true]), false, false)) + "\u003E";
pug_mixins["renderVal"](name, value, sum);
pug_html = pug_html + "\u003C\u002Ftd\u003E";
  break;
}
};





















































































































































































































































































pug_mixins["po"] = pug_interp = function(obj){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if (obj !== null) {
if (typeof obj === 'string') {
pug_html = pug_html + (pug_escape(null == (pug_interp = obj) ? "" : pug_interp));
}
else
if (typeof obj === 'object') {
// iterate obj
;(function(){
  var $$obj = obj;
  if ('number' == typeof $$obj.length) {
      for (var k = 0, $$l = $$obj.length; k < $$l; k++) {
        var v = $$obj[k];
pug_html = pug_html + "\u003Cdiv class=\"indent\"\u003E\u003Cb" + (pug_attr("class", pug_classes(["icon",k], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = k) ? "" : pug_interp)) + "\u003C\u002Fb\u003E: ";
if (typeof v === 'string') {
pug_html = pug_html + (pug_escape(null == (pug_interp = v) ? "" : pug_interp));
}
else {
pug_html = pug_html + "\u003Cdiv class=\"indent\"\u003E";
pug_mixins["po"](v);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var k in $$obj) {
      $$l++;
      var v = $$obj[k];
pug_html = pug_html + "\u003Cdiv class=\"indent\"\u003E\u003Cb" + (pug_attr("class", pug_classes(["icon",k], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = k) ? "" : pug_interp)) + "\u003C\u002Fb\u003E: ";
if (typeof v === 'string') {
pug_html = pug_html + (pug_escape(null == (pug_interp = v) ? "" : pug_interp));
}
else {
pug_html = pug_html + "\u003Cdiv class=\"indent\"\u003E";
pug_mixins["po"](v);
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
}
};
pug_mixins["comments"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"page\" id=\"newComment\"\u003E\u003Cform class=\"editor\" onsubmit=\"sendComment(this);return false;\"\u003E\u003Cinput" + (" type=\"hidden\" name=\"id\""+pug_attr("value", id, true, false)) + "\u002F\u003E\u003Cdt\u003E\u003Cb" + (pug_attr("class", pug_classes(["monogram",username.charAt(0)], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = username) ? "" : pug_interp)) + "\u003C\u002Fb\u003E\u003C\u002Fdt\u003E\u003Ctextarea rows=\"6\" name=\"text\" onkeyup=\"setCommentButton(this, this.form.button)\" onblur=\"setCommentButton(this, this.form.button)\"\u003E\u003C\u002Ftextarea\u003E\u003Cbutton class=\"button\" name=\"button\" disabled=\"disabled\"\u003EAdd comment\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E";
// iterate docs
;(function(){
  var $$obj = docs;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var c = $$obj[i];
pug_html = pug_html + "\u003Cdiv class=\"page\"\u003E\u003Cdt\u003E \u003Cb" + (pug_attr("class", pug_classes(["monogram",c.author.charAt(0)], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = c.author) ? "" : pug_interp)) + "\u003C\u002Fb\u003E commented on  " + (pug_escape(null == (pug_interp = new Date(c.createdAt).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric'})) ? "" : pug_interp)) + " ";
if ((c.createdAt != c.updatedAt)) {
pug_html = pug_html + "(updated " + (pug_escape(null == (pug_interp = new Date(c.updatedAt).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric'})) ? "" : pug_interp)) + ")";
}
pug_html = pug_html + ":  ";
if ((c.author == username)) {
pug_html = pug_html + "\u003Cbutton onclick=\"editPost(this.parentNode)\"\u003Eupdate\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdt\u003E\u003Cpre class=\"commentText\"\u003E" + (pug_escape(null == (pug_interp = c.body) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003Cinput" + (" type=\"hidden\" name=\"slug\""+pug_attr("value", c.slug, true, false)) + "\u002F\u003E\u003Cinput" + (" type=\"hidden\" name=\"date\""+pug_attr("value", c.createdAt, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var c = $$obj[i];
pug_html = pug_html + "\u003Cdiv class=\"page\"\u003E\u003Cdt\u003E \u003Cb" + (pug_attr("class", pug_classes(["monogram",c.author.charAt(0)], [false,true]), false, false)) + "\u003E" + (pug_escape(null == (pug_interp = c.author) ? "" : pug_interp)) + "\u003C\u002Fb\u003E commented on  " + (pug_escape(null == (pug_interp = new Date(c.createdAt).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric'})) ? "" : pug_interp)) + " ";
if ((c.createdAt != c.updatedAt)) {
pug_html = pug_html + "(updated " + (pug_escape(null == (pug_interp = new Date(c.updatedAt).toLocaleDateString("en-US",{year: 'numeric', month: 'short', day: 'numeric'})) ? "" : pug_interp)) + ")";
}
pug_html = pug_html + ":  ";
if ((c.author == username)) {
pug_html = pug_html + "\u003Cbutton onclick=\"editPost(this.parentNode)\"\u003Eupdate\u003C\u002Fbutton\u003E";
}
pug_html = pug_html + "\u003C\u002Fdt\u003E\u003Cpre class=\"commentText\"\u003E" + (pug_escape(null == (pug_interp = c.body) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003Cinput" + (" type=\"hidden\" name=\"slug\""+pug_attr("value", c.slug, true, false)) + "\u002F\u003E\u003Cinput" + (" type=\"hidden\" name=\"date\""+pug_attr("value", c.createdAt, true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

};
pug_mixins["changes"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var past = {add: 'added', remove: 'removed', replace: 'changed', move: 'moved', copy: 'copied'}
pug_html = pug_html + "\u003Ctable class=\"diff\"\u003E";
// iterate docs
;(function(){
  var $$obj = docs;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var v = $$obj[i];
pug_html = pug_html + "\u003Ctbody\u003E";
// iterate v.body.patch
;(function(){
  var $$obj = v.body.patch;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var op = $$obj[i];
pug_html = pug_html + "\u003Ctr class=\"head\"\u003E\u003Ctd colspan=\"3\"\u003EVersion " + (pug_escape(null == (pug_interp = v.__v) ? "" : pug_interp)) + " \u003Cb\u003E";
pug_mixins["renderVal"]('owner', v.author);
pug_html = pug_html + "\u003C\u002Fb\u003E " + (pug_escape(null == (pug_interp = past[op.op] ? past[op.op] : op.op) ? "" : pug_interp)) + " \u003Cb\u003E" + (pug_escape(null == (pug_interp = op.path) ? "" : pug_interp)) + "\u003C\u002Fb\u003E on ";
pug_mixins["renderVal"]('date', v.updatedAt);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes(["change",op.op], [false,true]), false, false)) + "\u003E";
if (op.op == 'remove') {
op.old = op.value
delete op.value
}
if (op.op == 'replace' && typeof op.old === 'string' && typeof op.value === 'string') {
var diffs = textUtil.diffline(op.old, op.value);
pug_html = pug_html + "\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.lhs
;(function(){
  var $$obj = diffs.lhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index28 = 0, $$l = $$obj.length; pug_index28 < $$l; pug_index28++) {
        var s = $$obj[pug_index28];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index28 in $$obj) {
      $$l++;
      var s = $$obj[pug_index28];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.rhs
;(function(){
  var $$obj = diffs.rhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index29 = 0, $$l = $$obj.length; pug_index29 < $$l; pug_index29++) {
        var s = $$obj[pug_index29];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index29 in $$obj) {
      $$l++;
      var s = $$obj[pug_index29];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd\u003E";
if (op.old instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.old, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.old) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (op.value instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.value, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var op = $$obj[i];
pug_html = pug_html + "\u003Ctr class=\"head\"\u003E\u003Ctd colspan=\"3\"\u003EVersion " + (pug_escape(null == (pug_interp = v.__v) ? "" : pug_interp)) + " \u003Cb\u003E";
pug_mixins["renderVal"]('owner', v.author);
pug_html = pug_html + "\u003C\u002Fb\u003E " + (pug_escape(null == (pug_interp = past[op.op] ? past[op.op] : op.op) ? "" : pug_interp)) + " \u003Cb\u003E" + (pug_escape(null == (pug_interp = op.path) ? "" : pug_interp)) + "\u003C\u002Fb\u003E on ";
pug_mixins["renderVal"]('date', v.updatedAt);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes(["change",op.op], [false,true]), false, false)) + "\u003E";
if (op.op == 'remove') {
op.old = op.value
delete op.value
}
if (op.op == 'replace' && typeof op.old === 'string' && typeof op.value === 'string') {
var diffs = textUtil.diffline(op.old, op.value);
pug_html = pug_html + "\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.lhs
;(function(){
  var $$obj = diffs.lhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index30 = 0, $$l = $$obj.length; pug_index30 < $$l; pug_index30++) {
        var s = $$obj[pug_index30];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index30 in $$obj) {
      $$l++;
      var s = $$obj[pug_index30];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.rhs
;(function(){
  var $$obj = diffs.rhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index31 = 0, $$l = $$obj.length; pug_index31 < $$l; pug_index31++) {
        var s = $$obj[pug_index31];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index31 in $$obj) {
      $$l++;
      var s = $$obj[pug_index31];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd\u003E";
if (op.old instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.old, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.old) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (op.value instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.value, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var v = $$obj[i];
pug_html = pug_html + "\u003Ctbody\u003E";
// iterate v.body.patch
;(function(){
  var $$obj = v.body.patch;
  if ('number' == typeof $$obj.length) {
      for (var i = 0, $$l = $$obj.length; i < $$l; i++) {
        var op = $$obj[i];
pug_html = pug_html + "\u003Ctr class=\"head\"\u003E\u003Ctd colspan=\"3\"\u003EVersion " + (pug_escape(null == (pug_interp = v.__v) ? "" : pug_interp)) + " \u003Cb\u003E";
pug_mixins["renderVal"]('owner', v.author);
pug_html = pug_html + "\u003C\u002Fb\u003E " + (pug_escape(null == (pug_interp = past[op.op] ? past[op.op] : op.op) ? "" : pug_interp)) + " \u003Cb\u003E" + (pug_escape(null == (pug_interp = op.path) ? "" : pug_interp)) + "\u003C\u002Fb\u003E on ";
pug_mixins["renderVal"]('date', v.updatedAt);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes(["change",op.op], [false,true]), false, false)) + "\u003E";
if (op.op == 'remove') {
op.old = op.value
delete op.value
}
if (op.op == 'replace' && typeof op.old === 'string' && typeof op.value === 'string') {
var diffs = textUtil.diffline(op.old, op.value);
pug_html = pug_html + "\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.lhs
;(function(){
  var $$obj = diffs.lhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index33 = 0, $$l = $$obj.length; pug_index33 < $$l; pug_index33++) {
        var s = $$obj[pug_index33];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index33 in $$obj) {
      $$l++;
      var s = $$obj[pug_index33];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.rhs
;(function(){
  var $$obj = diffs.rhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index34 = 0, $$l = $$obj.length; pug_index34 < $$l; pug_index34++) {
        var s = $$obj[pug_index34];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index34 in $$obj) {
      $$l++;
      var s = $$obj[pug_index34];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd\u003E";
if (op.old instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.old, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.old) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (op.value instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.value, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var i in $$obj) {
      $$l++;
      var op = $$obj[i];
pug_html = pug_html + "\u003Ctr class=\"head\"\u003E\u003Ctd colspan=\"3\"\u003EVersion " + (pug_escape(null == (pug_interp = v.__v) ? "" : pug_interp)) + " \u003Cb\u003E";
pug_mixins["renderVal"]('owner', v.author);
pug_html = pug_html + "\u003C\u002Fb\u003E " + (pug_escape(null == (pug_interp = past[op.op] ? past[op.op] : op.op) ? "" : pug_interp)) + " \u003Cb\u003E" + (pug_escape(null == (pug_interp = op.path) ? "" : pug_interp)) + "\u003C\u002Fb\u003E on ";
pug_mixins["renderVal"]('date', v.updatedAt);
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E\u003Ctr" + (pug_attr("class", pug_classes(["change",op.op], [false,true]), false, false)) + "\u003E";
if (op.op == 'remove') {
op.old = op.value
delete op.value
}
if (op.op == 'replace' && typeof op.old === 'string' && typeof op.value === 'string') {
var diffs = textUtil.diffline(op.old, op.value);
pug_html = pug_html + "\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.lhs
;(function(){
  var $$obj = diffs.lhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index35 = 0, $$l = $$obj.length; pug_index35 < $$l; pug_index35++) {
        var s = $$obj[pug_index35];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index35 in $$obj) {
      $$l++;
      var s = $$obj[pug_index35];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"del\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E\u003Cpre\u003E";
// iterate diffs.rhs
;(function(){
  var $$obj = diffs.rhs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index36 = 0, $$l = $$obj.length; pug_index36 < $$l; pug_index36++) {
        var s = $$obj[pug_index36];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
      }
  } else {
    var $$l = 0;
    for (var pug_index36 in $$obj) {
      $$l++;
      var s = $$obj[pug_index36];
switch (s.t){
case 0:
pug_html = pug_html + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp));
  break;
case 1:
pug_html = pug_html + "\u003Cspan class=\"add\"\u003E" + (pug_escape(null == (pug_interp = s.str) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
  break;
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fpre\u003E\u003C\u002Ftd\u003E";
}
else {
pug_html = pug_html + "\u003Ctd\u003E";
if (op.old instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.old, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.old) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003Ctd\u003E\u003C\u002Ftd\u003E\u003Ctd\u003E";
if (op.value instanceof Object) {
pug_html = pug_html + "\u003Cpre\u003E" + (pug_escape(null == (pug_interp = JSON.stringify(op.value, null, 3)) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E";
}
else {
pug_html = pug_html + (pug_escape(null == (pug_interp = op.value) ? "" : pug_interp));
}
pug_html = pug_html + "\u003C\u002Ftd\u003E";
}
pug_html = pug_html + "\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftbody\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";
};
if (!renderComplete) {
switch (renderTemplate){
case 'comments':
pug_mixins["comments"]();
  break;
case 'changes':
pug_mixins["changes"]();
  break;
case 'view':
pug_html = pug_html + "\u003Cb\u003Erendering" + (pug_escape(null == (pug_interp = doc) ? "" : pug_interp)) + "\u003C\u002Fb\u003E";
pug_mixins["po"](doc);
renderComplete= true
  break;
}
}}.call(this,"Array" in locals_for_with?locals_for_with.Array:typeof Array!=="undefined"?Array:undefined,"Date" in locals_for_with?locals_for_with.Date:typeof Date!=="undefined"?Date:undefined,"JSON" in locals_for_with?locals_for_with.JSON:typeof JSON!=="undefined"?JSON:undefined,"Math" in locals_for_with?locals_for_with.Math:typeof Math!=="undefined"?Math:undefined,"Object" in locals_for_with?locals_for_with.Object:typeof Object!=="undefined"?Object:undefined,"String" in locals_for_with?locals_for_with.String:typeof String!=="undefined"?String:undefined,"conf" in locals_for_with?locals_for_with.conf:typeof conf!=="undefined"?conf:undefined,"doc" in locals_for_with?locals_for_with.doc:typeof doc!=="undefined"?doc:undefined,"docs" in locals_for_with?locals_for_with.docs:typeof docs!=="undefined"?docs:undefined,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"isNaN" in locals_for_with?locals_for_with.isNaN:typeof isNaN!=="undefined"?isNaN:undefined,"page" in locals_for_with?locals_for_with.page:typeof page!=="undefined"?page:undefined,"parseFloat" in locals_for_with?locals_for_with.parseFloat:typeof parseFloat!=="undefined"?parseFloat:undefined,"renderComplete" in locals_for_with?locals_for_with.renderComplete:typeof renderComplete!=="undefined"?renderComplete:undefined,"renderTemplate" in locals_for_with?locals_for_with.renderTemplate:typeof renderTemplate!=="undefined"?renderTemplate:undefined,"schemaName" in locals_for_with?locals_for_with.schemaName:typeof schemaName!=="undefined"?schemaName:undefined,"textUtil" in locals_for_with?locals_for_with.textUtil:typeof textUtil!=="undefined"?textUtil:undefined,"username" in locals_for_with?locals_for_with.username:typeof username!=="undefined"?username:undefined));;return pug_html;}