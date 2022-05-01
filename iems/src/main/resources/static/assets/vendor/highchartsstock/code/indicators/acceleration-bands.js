/*
 Highstock JS v9.3.3 (2022-02-01)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/acceleration-bands",["highcharts","highcharts/modules/stock"],function(l){b(l);b.Highcharts=l;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function l(b,h,f,l){b.hasOwnProperty(h)||(b[h]=l.apply(null,f))}b=b?b._modules:{};l(b,"Stock/Indicators/MultipleLinesComposition.js",[b["Core/Series/SeriesRegistry.js"],
b["Core/Utilities.js"]],function(b,h){var f=b.seriesTypes.sma,l=h.defined,p=h.error,q=h.merge,m;(function(h){function r(a){var c,b=[];a=a||this.points;if(this.fillGraph&&this.nextPoints){if((c=f.prototype.getGraphPath.call(this,this.nextPoints))&&c.length){c[0][0]="L";b=f.prototype.getGraphPath.call(this,a);c=c.slice(0,b.length);for(var e=c.length-1;0<=e;e--)b.push(c[e])}}else b=f.prototype.getGraphPath.apply(this,arguments);return b}function g(){var a=this,c=a.linesApiNames,d=a.areaLinesNames,e=
a.points,k=a.options,w=a.graph,r={options:{gapSize:k.gapSize}},n=[],g=a.getTranslatedLinesNames(a.pointValKey),h=e.length,m;g.forEach(function(a,c){for(n[c]=[];h--;)m=e[h],n[c].push({x:m.x,plotX:m.plotX,plotY:m[a],isNull:!l(m[a])});h=e.length});if(this.userOptions.fillColor&&d.length){var x=g.indexOf(v(d[0]));x=n[x];d=1===d.length?e:n[g.indexOf(v(d[1]))];g=a.color;a.points=d;a.nextPoints=x;a.color=this.userOptions.fillColor;a.options=q(e,r);a.graph=a.area;a.fillGraph=!0;b.seriesTypes.sma.prototype.drawGraph.call(a);
a.area=a.graph;delete a.nextPoints;delete a.fillGraph;a.color=g}c.forEach(function(c,e){n[e]?(a.points=n[e],k[c]?a.options=q(k[c].styles,r):p('Error: "There is no '+c+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),a.graph=a["graph"+c],f.prototype.drawGraph.call(a),a["graph"+c]=a.graph):p('Error: "'+c+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=e;
a.options=k;a.graph=w;f.prototype.drawGraph.call(a)}function d(a){var c=[];(this.pointArrayMap||[]).forEach(function(b){b!==a&&c.push(v(b))});return c}function v(a){return"plot"+a.charAt(0).toUpperCase()+a.slice(1)}function w(a){var c=[];(this.pointArrayMap||[]).forEach(function(b){c.push(a[b])});return c}function x(){var a=this,c=a.pointArrayMap,b=[],e;b=a.getTranslatedLinesNames();f.prototype.translate.apply(a,arguments);a.points.forEach(function(d){c.forEach(function(c,w){e=d[c];a.dataModify&&
(e=a.dataModify.modifyValue(e));null!==e&&(d[b[w]]=a.yAxis.toPixels(e,!0))})})}var m=[],z=["bottomLine"],A=["top","bottom"],B=["top"];h.compose=function(a){if(-1===m.indexOf(a)){m.push(a);var c=a.prototype;c.linesApiNames=c.linesApiNames||z.slice();c.pointArrayMap=c.pointArrayMap||A.slice();c.pointValKey=c.pointValKey||"top";c.areaLinesNames=c.areaLinesNames||B.slice();c.drawGraph=g;c.getGraphPath=r;c.toYData=w;c.translate=x;c.getTranslatedLinesNames=d}return a}})(m||(m={}));return m});l(b,"Stock/Indicators/ABands/ABandsIndicator.js",
[b["Stock/Indicators/MultipleLinesComposition.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,h,f){var l=this&&this.__extends||function(){var b=function(g,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d}||function(b,d){for(var g in d)d.hasOwnProperty(g)&&(b[g]=d[g])};return b(g,d)};return function(g,d){function f(){this.constructor=g}b(g,d);g.prototype=null===d?Object.create(d):(f.prototype=d.prototype,new f)}}(),p=h.seriesTypes.sma,
q=f.correctFloat,m=f.extend,y=f.merge;f=function(b){function g(){var d=null!==b&&b.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}l(g,b);g.prototype.getValues=function(d,g){var f=g.period,h=g.factor;g=g.index;var m=d.xData,l=(d=d.yData)?d.length:0,p=[],r=[],a=[],c=[],v=[],e;if(!(l<f)){for(e=0;e<=l;e++){if(e<l){var k=d[e][2];var t=d[e][1];var u=h;k=q(t-k)/(q(t+k)/2)*1E3*u;p.push(d[e][1]*q(1+2*k));r.push(d[e][2]*q(1-2*k))}if(e>=f){k=m.slice(e-f,e);var n=d.slice(e-
f,e);u=b.prototype.getValues.call(this,{xData:k,yData:p.slice(e-f,e)},{period:f});t=b.prototype.getValues.call(this,{xData:k,yData:r.slice(e-f,e)},{period:f});n=b.prototype.getValues.call(this,{xData:k,yData:n},{period:f,index:g});k=n.xData[0];u=u.yData[0];t=t.yData[0];n=n.yData[0];a.push([k,u,n,t]);c.push(k);v.push([u,n,t])}}return{values:a,xData:c,yData:v}}};g.defaultOptions=y(p.defaultOptions,{params:{period:20,factor:.001,index:3},lineWidth:1,topLine:{styles:{lineWidth:1}},bottomLine:{styles:{lineWidth:1}},
dataGrouping:{approximation:"averages"}});return g}(p);m(f.prototype,{areaLinesNames:["top","bottom"],linesApiNames:["topLine","bottomLine"],nameBase:"Acceleration Bands",nameComponents:["period","factor"],pointArrayMap:["top","middle","bottom"],pointValKey:"middle"});b.compose(f);h.registerSeriesType("abands",f);"";return f});l(b,"masters/indicators/acceleration-bands.src.js",[],function(){})});
//# sourceMappingURL=acceleration-bands.js.map