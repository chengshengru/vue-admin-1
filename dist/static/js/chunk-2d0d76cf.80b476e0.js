(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d76cf"],{7781:function(e,a,s){"use strict";s.r(a);var t=s("7c93"),r=s.n(t),n=[{year:"1951 年",sales:38},{year:"1952 年",sales:52},{year:"1956 年",sales:61},{year:"1957 年",sales:145},{year:"1958 年",sales:48},{year:"1959 年",sales:38},{year:"1960 年",sales:38},{year:"1962 年",sales:38},{year:"1963 年",sales:100},{year:"1964 年",sales:38},{year:"1965 年",sales:38},{year:"1966 年",sales:38}],i={props:{id:String},data:function(){return{chart:null,timer:null}},mounted:function(){this.chart=new r.a.Chart({container:this.id,forceFit:!0,height:300}),this.chart.source(n),this.chart.scale("sales",{tickInterval:20}),this.chart.interval().position("year*sales"),this.chart.render()}},l=s("2877"),c=Object(l.a)(i,function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.id}})},[],!1,null,null,null);a.default=c.exports}}]);