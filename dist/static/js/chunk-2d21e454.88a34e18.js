(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21e454"],{d59f:function(t,e,i){"use strict";i.r(e),i("0d6d");var s=i("c32d"),a=i.n(s),o=[{title:"Ant Design Title 1"},{title:"Ant Design Title 2"},{title:"Ant Design Title 3"},{title:"Ant Design Title 4"}],n=[{element:"#id1",popover:{className:"first-step-popover-class",title:"提示说明模块",description:"当某个页面需要向用户显示警告的信息时。",position:"bottom"}},{element:"#id2",popover:{title:"通用列表。",description:"最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。",position:"top"}},{element:"#id3",popover:{title:"评论组件",description:"评论组件可用于对事物的讨论，例如页面、博客文章、问题等等。",position:"top"}}],l={data:function(){return{data:o,likes:0,dislikes:0,action:null,moment:a.a,steps:Object.freeze(n)}},methods:{like:function(){this.likes=1,this.dislikes=0,this.action="liked"},dislike:function(){this.likes=0,this.dislikes=1,this.action="disliked"},guide:function(){this.$refs.guide&&this.$refs.guide.start()}}},r=i("2877"),d=Object(r.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",[i("a-button",{attrs:{type:"primary"},on:{click:t.guide}},[t._v("点我开启向导")]),i("a-divider"),i("a-alert",{attrs:{id:"id1",message:"Error",description:"This is an error message about copywriting.",type:"error",showIcon:""}}),i("a-divider"),i("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.data},scopedSlots:t._u([{key:"renderItem",fn:function(e){return i("a-list-item",{attrs:{id:"id2"}},[i("a-list-item-meta",{attrs:{description:"Ant Design, a design language for background applications, is refined by Ant UED Team"}},[i("a",{attrs:{slot:"title",href:"https://vue.ant.design/"},slot:"title"},[t._v(t._s(e.title))]),i("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"},slot:"avatar"})],1)],1)}}])}),i("a-divider"),i("a-comment",{attrs:{id:"id3"}},[i("template",{slot:"actions"},[i("span",[i("a-tooltip",{attrs:{title:"Like"}},[i("a-icon",{attrs:{type:"like",theme:"liked"===t.action?"filled":"outlined"},on:{click:t.like}})],1),i("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[t._v(t._s(t.likes))])],1),i("span",[i("a-tooltip",{attrs:{title:"Dislike"}},[i("a-icon",{attrs:{type:"dislike",theme:"disliked"===t.action?"filled":"outlined"},on:{click:t.dislike}})],1),i("span",{staticStyle:{"padding-left":"'8px'",cursor:"'auto'"}},[t._v(t._s(t.dislikes))])],1),i("span",[t._v("Reply to")])]),i("a",{attrs:{slot:"author"},slot:"author"},[t._v("Han Solo")]),i("a-avatar",{attrs:{slot:"avatar",src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"},slot:"avatar"}),i("p",{attrs:{slot:"content"},slot:"content"},[t._v("We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.")]),i("a-tooltip",{attrs:{slot:"datetime",title:t.moment().format("YYYY-MM-DD HH:mm:ss")},slot:"datetime"},[i("span",[t._v(t._s(t.moment().fromNow()))])])],2)],1),i("v-guide",{ref:"guide",attrs:{steps:t.steps}})],1)},[],!1,null,"af40abc6",null);e.default=d.exports}}]);