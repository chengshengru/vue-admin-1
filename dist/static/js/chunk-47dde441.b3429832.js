(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-47dde441"],{"005b":function(e,t,a){"use strict";var o=a("87e7");a.n(o).a},"6d75":function(e,t,a){"use strict";a.r(t);var o={labelCol:{span:6},wrapperCol:{span:24}},i={data:function(){return{formItemLayout:o,registerDialogVisible:!0,loading:!1,form:this.$form.createForm(this)}},mounted:function(){this._animateBg()},methods:{handleConfirmPassword:function(e,t,a){var o=this.form2.getFieldValue;t&&t!==o("password")&&a("两次输入不一致！"),a()},register:function(){var e=this;this.loading=!0,this.form2.validateFields(function(t,a){if(t)e.loading=!1;else{var o=a.username,i=a.password;e.$api.REGISTER({username:o,password:i,roleIdList:[4]}).then(function(t){0===t.code&&(e.$message.success("恭喜！注册成功，请登录。"),e.toLogin()),e.loading=!1}).catch(function(){e.loading=!1})}})},toLogin:function(){this.$router.push("/login")},beforeRouteLeave:function(e,t,a){this.loading=!1},_animateBg:function(){particlesJS("particles-js",{particles:{number:{value:6,density:{enable:!0,value_area:800}},color:{value:"#1b1e34"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:160,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},function(){})}}},r=(a("005b"),a("2877")),s=Object(r.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-bg"},[a("a-modal",{staticClass:"login-modal my-login-modal",staticStyle:{width:"300px!important"},attrs:{mask:!1,width:"400px",maskClosable:!1,center:"","show-close":!1,modal:!1,closable:!1,keyboard:!1},model:{value:e.registerDialogVisible,callback:function(t){e.registerDialogVisible=t},expression:"registerDialogVisible"}},[a("a-spin",{attrs:{spinning:e.loading}},[a("v-logo"),a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,fieldDecoratorId:"username",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入用户名"}]}}},[a("a-input",{attrs:{placeholder:"请输入用户名",size:"large"}},[a("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",{attrs:{labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入密码"}]}}},[a("a-input",{attrs:{placeholder:"请输入密码",size:"large",type:"password"}},[a("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),a("a-form-item",{attrs:{labelCol:e.formItemLayout.labelCol,wrapperCol:e.formItemLayout.wrapperCol,fieldDecoratorId:"repassword",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入密码"},{validator:this.handleConfirmPassword}]}}},[a("a-input",{attrs:{placeholder:"请确认密码",size:"large",type:"password"}},[a("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("a-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"large",loading:e.loading},on:{click:e.register}},[e._v("注册")]),a("a-button",{staticStyle:{width:"100%",margin:"10px 0 0 0"},attrs:{size:"large",loading:e.loading},on:{click:e.toLogin}},[e._v("已有账号")])],1)],1),a("div",{attrs:{id:"particles-js"}})],1)},[],!1,null,null,null);t.default=s.exports},"87e7":function(e,t,a){}}]);