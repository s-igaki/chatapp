webpackJsonp([1],{0:function(e,s){},"0RR9":function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("7+uW"),i=t("E0CL"),n={props:{type:i.a.string.isRequired,message:i.a.string.isRequired,id:i.a.string.isRequired,user:i.a.string.isRequired,myId:i.a.string.isRequired,hour:i.a.string.isRequired,min:i.a.string.isRequired}},r={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return e.$props.id===e.$props.myId?t("div",{staticClass:"main_body_message"},[t("li",{staticClass:"main_body_my_message_li"},[t("p",{staticClass:"my_message"},[e._v(e._s(e.$props.message))]),e._v(" "),t("p",{staticClass:"my_time"},[e._v(e._s(e.$props.hour)+":"+e._s(e.$props.min))])])]):"login"===e.$props.type?t("div",{staticClass:"main_body_message"},[t("li",{staticClass:"main_body_login_message_li"},[t("p",{staticClass:"login"},[e._v(e._s(e.$props.user)+" "+e._s(e.$props.message)+" "+e._s(e.$props.hour)+":"+e._s(e.$props.min))])])]):t("div",{staticClass:"main_body_message"},[t("li",{staticClass:"main_body_message_li"},[t("p",{staticClass:"user"},[e._v(e._s(e.$props.user))]),e._v(" "),t("p",{staticClass:"message"},[e._v(e._s(e.$props.message))]),e._v(" "),t("p",{staticClass:"time"},[e._v(e._s(e.$props.hour)+":"+e._s(e.$props.min))])])])},staticRenderFns:[]};var o=t("VU/8")(n,r,!1,function(e){t("dIKx")},null,null).exports,u=t("DmT9"),m=t.n(u).a.connect("https://teamlabchatapp.herokuapp.com"),d={data:function(){return{myId:"",messages:[],newMessage:"",user:""}},components:{Message:o},mounted:function(){void 0!==localStorage.user?this.user=localStorage.user:(this.user=prompt("ユーザ名"),localStorage.user=this.user),void 0!==localStorage.myId?this.myId=localStorage.myId:(this.myId=(new Date).getTime().toString(10)+Math.floor(1e3*Math.random()).toString(10),localStorage.myId=this.myId),m.on("message",function(e){this.messages.push(e)}.bind(this));var e=new Date,s=e.getHours()<10?"0"+e.getHours():e.getHours(),t=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),a={type:"login",message:"login",id:this.id,user:this.user,date:e,hour:s.toString(10),min:t.toString(10)};m.emit("login",a)},updated:function(){this.$nextTick(function(){var e=document.documentElement,s=e.scrollHeight-e.clientHeight;scroll(0,s)})},methods:{sendMessage:function(){var e=new Date,s=e.getHours()<10?"0"+e.getHours():e.getHours(),t=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),a={type:"message",message:document.message_form.message.value,id:this.myId,user:this.user,date:e,hour:s,min:t.toString(10)};m.emit("message",a),this.newMessage=""}}},p={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"main"}},[t("div",{attrs:{id:"main_body"}},[t("ul",{attrs:{id:"main_body_ul"}},e._l(e.messages,function(s,a,i){return t("Message",{key:i,attrs:{type:s.type,message:s.message,id:s.id,user:s.user,myId:e.myId,hour:s.hour,min:s.min}})}),1)]),e._v(" "),t("div",{attrs:{id:"main_footer"}},[t("form",{attrs:{id:"main_footer_form",name:"message_form"},on:{submit:function(s){return s.preventDefault(),e.sendMessage(s)}}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{rows:"1",required:"",id:"main_footer_form_text",name:"message",placeholder:"メッセージを入力してください。"},domProps:{value:e.newMessage},on:{input:function(s){s.target.composing||(e.newMessage=s.target.value)}}}),e._v(" "),t("input",{attrs:{id:"main_footer_form_submit",type:"submit",value:"add"}})])])])},staticRenderFns:[]};var g=t("VU/8")(d,p,!1,function(e){t("V4Er")},null,null).exports,l={components:{Chat:g}},c={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("Chat")],1)},staticRenderFns:[]};var _=t("VU/8")(l,c,!1,function(e){t("0RR9")},null,null).exports,h=t("/ocq");a.a.use(h.a);var v=new h.a({routes:[{path:"/",name:"Chat",component:g}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:v,components:{App:_},template:"<App/>"})},V4Er:function(e,s){},dIKx:function(e,s){}},["NHnr"]);
//# sourceMappingURL=app.1dd6d55610a143bf6a02.js.map