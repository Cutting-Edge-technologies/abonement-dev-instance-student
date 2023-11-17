"use strict";(self.webpackChunkabonement_front=self.webpackChunkabonement_front||[]).push([[517],{3505:function(e,n,t){t.r(n),t.d(n,{default:function(){return Or}});var r={};t.r(r),t.d(r,{changeSearch:function(){return ie},drilldownSubject:function(){return ye},drilldownTeacher:function(){return re},openShowcaseForSubject:function(){return ke},openShowcaseForTeacher:function(){return Ze},searchOptionChange:function(){return oe},startSearch:function(){return be}});var i={};t.r(i),t.d(i,{alreadyAuthenticatedUser:function(){return Te},authenticateFacebook:function(){return Fe},authenticateWithFirebase:function(){return Pe}});var o,a,c,s,u,l,d,h,f,m=t(9434),x=t(7781),g=t(7977),p=t(5514),j=t(947),w=t(2312),v=(0,j.gH)({id:"",date:new Date,durationMin:0,accepted:[],status:w.UN.scheduled,declained:[],subject:{id:"",name:"",description:"",rules:[],teacherId:""},teacherId:"",participants:[]},"externalLessons"),b=(0,j.gH)({id:"",name:"",description:"",rules:[],teacherId:""},"externalSubjects"),y=(0,j.gH)({id:"",name:"",description:"",avatar:"",abonementOffers:[],subjects:[]},"externalTeachers"),Z=(0,t(1816).N)({id:"",name:"",avatar:"",abonementConsumables:[]},"studentEditable"),k=t(1413),S=t(6382);!function(e){e.schedule="schedule",e.studentProfilePage="studentProfilePage",e.searchPage="searchPage"}(o||(o={})),function(e){e.schedule="schedule",e.week="week"}(a||(a={})),function(e){e.subjects="subjects",e.abonements="abonements"}(c||(c={})),function(e){e.subjects="subjects",e.lessons="lessons"}(s||(s={})),function(e){e.closed="closed",e.teacherPageForStudent="teacherPageForStudent",e.aboementPageForStudent="aboementPageForStudent"}(u||(u={})),function(e){e.closed="closed",e.subjectPageForStudent="subjectPageForStudent"}(l||(l={})),function(e){e.teacher="teacher",e.subject="subject",e.closed="closed"}(d||(d={})),function(e){e.all="all",e.teacher="teacher",e.subject="subject"}(h||(h={})),function(e){e.all="all",e.attended="attended"}(f||(f={}));var D={studentNavigation:o.schedule,scheduleView:a.schedule,studentProfileNavigation:c.subjects,abonementPageNavigation:s.lessons,detailsDrawerShown:u.closed,showMore:!1,additionalDrawerShown:l.closed,abonementOffersShowcaseShown:d.closed,currentDate:new Date,search:"",searchOption:h.all,currentAbonementLessonsFilter:f.all},C=(0,S.oM)({name:"teacherModal",initialState:D,reducers:{setModalState:function(e,n){var t=n.payload;return(0,k.Z)((0,k.Z)({},e),t)},resetModalState:function(){return(0,k.Z)({},D)}}}),I=t(9438),T={id:"",name:"",avatar:"",abonementConsumables:[]},P=(0,S.oM)({name:"teacherDomainView",initialState:T,reducers:{setDomainView:function(e,n){var t=n.payload;return(0,k.Z)({},t)},resetDomainView:function(){return(0,k.Z)({},T)}}}),F={id:"",name:"",description:"",avatar:"",abonementOffers:[],subjects:[]},A=(0,S.oM)({name:"externalTeacher",initialState:F,reducers:{setExternalTeacher:function(e,n){return n.payload},resetExternalTeacher:function(){return(0,k.Z)({},F)}}}),N=(0,x.UY)({loading:g.m.reducer,error:p.k.reducer,studentDomain:P.reducer,externalLessons:v.reducer,externalSubjects:b.reducer,externalTeachers:y.reducer,externalTeacher:A.reducer,editableStudent:Z.reducer,modal:C.reducer,userProfile:I.B.reducer}),L=t(1501),M=t(4165),O=t(7780),U=t(5224),R=t(3608),E=t(3050),H=function(e){return e.modal.studentNavigation},K=function(e){return e.modal.detailsDrawerShown},Y=function(e){return e.modal.abonementOffersShowcaseShown},B=function(e){return e.modal.studentProfileNavigation},z=function(e){return e.modal.abonementPageNavigation},$=function(e){return e.modal.showMore},V=function(e){return e.modal.currentDate},W=function(e){return e.modal.scheduleView},G=function(e){return e.modal.additionalDrawerShown},q=function(e){return $(e)?300:120},_=function(e){switch(W(e)){case a.schedule:return E.So.listWeek;case a.week:default:return E.So.timeGridWeek}},Q=function(e){return e.modal.search},J=function(e){return e.modal.searchOption},X=function(){return[{id:h.all,title:"All"},{id:h.subject,title:"Subject"},{id:h.teacher,title:"Teacher"}]},ee=function(e){switch(z(e)){case s.subjects:return!1;case s.lessons:return!0;default:return!1}},ne=(0,M.Z)().mark(ae),te=(0,M.Z)().mark(ce),re=(0,U.f)("drilldownTeacher",(function(e){var n=e.payload;return(0,M.Z)().mark((function e(){var t;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.RE)(R.bH,n);case 2:if(t=e.sent,!!!t.id){e.next=7;break}return e.next=7,(0,O.gz)(A.actions.setExternalTeacher(t));case 7:case"end":return e.stop()}}),e)}))()})),ie=(0,U.f)("changeSearch",(function(e){var n=e.payload;return(0,M.Z)().mark((function e(){return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.gz)(C.actions.setModalState({search:n}));case 2:case"end":return e.stop()}}),e)}))()})),oe=(0,U.f)("searchOptionChange",(function(e){var n=e.payload;return(0,M.Z)().mark((function e(){return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.gz)(C.actions.setModalState({searchOption:n}));case 2:case"end":return e.stop()}}),e)}))()}));function ae(e){var n,t,r;return(0,M.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,O.RE)(R.IM.teacherAPIHandeler.list,"",{search:e});case 2:return n=i.sent,t=n.map((function(e){return(0,O.RE)(R.bH,e.id)})),i.next=6,(0,O.$6)(t);case 6:return r=i.sent,i.next=9,(0,O.gz)(y.actions.setResourses(r));case 9:case"end":return i.stop()}}),ne)}function ce(e){var n,t,r;return(0,M.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,O.RE)(R.IM.subjectApiHandeler.list,"",{search:e});case 2:return n=i.sent,t=n.map((function(e){return(0,O.RE)(R.Tr,e.id)})),i.next=6,(0,O.$6)(t);case 6:return r=i.sent,i.next=9,(0,O.gz)(b.actions.setResourses(r));case 9:case"end":return i.stop()}}),te)}var se,ue,le,de,he,fe,me,xe,ge,pe,je,we,ve,be=(0,U.f)("startSearch",(0,M.Z)().mark((function e(){var n,t;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.Ys)(Q);case 2:return n=e.sent,e.next=5,(0,O.Ys)(J);case 5:t=e.sent,e.t0=t,e.next=e.t0===h.teacher?9:e.t0===h.subject?12:e.t0===h.all?15:20;break;case 9:return e.next=11,ae(n);case 11:case 14:case 19:return e.abrupt("break",20);case 12:return e.next=14,ce(n);case 15:return e.next=17,ae(n);case 17:return e.next=19,ce(n);case 20:case"end":return e.stop()}}),e)}))),ye=(0,U.f)("drilldownSubject",(function(e){var n=e.payload;return(0,M.Z)().mark((function e(){var t,r,i;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.RE)(R.IM.subjectApiHandeler.single,n);case 2:return t=e.sent,r=t.teacherId||"",e.next=6,(0,O.RE)(R.bH,r);case 6:return i=e.sent,e.next=9,(0,O.gz)(A.actions.setExternalTeacher(i));case 9:return e.next=11,(0,O.gz)(C.actions.setModalState({currentSubjectId:n}));case 11:case"end":return e.stop()}}),e)}))()})),Ze=(0,U.f)("openShowcaseForTeacher",(function(e){e.payload;return(0,M.Z)().mark((function e(){return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.gz)(C.actions.setModalState({abonementOffersShowcaseShown:d.teacher}));case 2:case"end":return e.stop()}}),e)}))()})),ke=(0,U.f)("openShowcaseForTeacher",(function(e){var n=e.payload;return(0,M.Z)().mark((function e(){return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.gz)(C.actions.setModalState({currentSubjectId:n,abonementOffersShowcaseShown:d.subject}));case 2:case"end":return e.stop()}}),e)}))()})),Se=t(2731),De=(0,M.Z)().mark((function e(n){var t;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,Se.d)(n.providerData[0]),e.next=3,(0,O.RE)(Ce,t);case 3:case"end":return e.stop()}}),e)})),Ce=function(e){var n=e.id,t=e.displayName,r=e.photoURL;return(0,M.Z)().mark((function e(){var i,o;return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=9;break}return e.next=3,(0,O.RE)(R.IM.studentAPIHandeler.single,n);case 3:if(i=e.sent,i&&i.name&&i.avatar&&i.abonementConsumables){e.next=9;break}return o={id:n,name:t||"",avatar:r||"",abonementConsumables:[]},e.next=9,(0,O.RE)(R.IM.studentAPIHandeler.update,o);case 9:case"end":return e.stop()}}),e)}))()},Ie=(0,t(126).A)(De,Ce),Te=Ie.alreadyAuthenticatedUser,Pe=Ie.authenticateWithFirebase,Fe=Ie.authenticateFacebook,Ae=(0,M.Z)().mark((function e(){return(0,M.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,O.rM)((0,U.B)(i));case 2:return e.next=4,(0,O.rM)((0,U.B)(r));case 4:case"end":return e.stop()}}),e)})),Ne=m.v9,Le=(0,L.$O)(N,Ae)(),Me=t(2791),Oe=t(7678),Ue=t(4565),Re=t(15),Ee=t(879),He=t(2982),Ke=function(e){return e.studentDomain},Ye=function(e){return Ke(e).avatar},Be=function(e){return Ke(e).name},ze=function(e){return Ke(e).abonementConsumables},$e=function(e){return ze(e).length},Ve=function(e){var n=ze(e).flatMap((function(e){return e.subjects}));return(0,He.Z)(new Set(n))},We=function(e){return Ve(e).length},Ge=function(e){var n=function(e){return e.modal.currentOwnAbonementId||""}(e);return ze(e).find((function(e){return e.id===n}))},qe=function(e){var n=function(e){var n=Ge(e);if(n){var t=new Date(n.dateStart),r=n.limitTime;return new Date(t.setMonth(t.getMonth()+r))}return new Date}(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit"}).format(n)},_e=function(e){var n=Ge(e);return n?n.lessonsAttended:[]},Qe=function(e){return _e(e).length},Je=function(e){var n=Qe(e),t=function(e){var n=Ge(e);return n?n.limitLessons:0}(e);return t-n},Xe=function(e){var n=function(e){var n=Ge(e);return null===n||void 0===n?void 0:n.type}(e);return n===w.DK.limited},en=t(184),nn=function(){var e=Ne(We),n=Ne($e),t=Ne(Ye);return(0,en.jsx)(Ee.Gt,{minHeight:60,children:(0,en.jsxs)(Ee.HI,{height:60,children:[(0,en.jsx)(Ee.To,{children:(0,en.jsx)(Re.q,{image:t,size:44,onClick:function(){}})}),(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:e}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"Subjects"})]}),(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:n}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"Abonements"})]})]})})},tn=t(168),rn=t(225),on=t(228),an=t(5642),cn=(0,rn.Z)(on.Z)(se||(se=(0,tn.Z)(["\n    display: flex;\n    height: 80;\n    align-items: center;\n    padding: 0.5rem;\n    justify-content: space-around;\n"]))),sn=function(){var e=Ne(B),n=e===c.subjects,t=e===c.abonements;return(0,en.jsxs)(cn,{children:[(0,en.jsx)(an.Vw,{type:an.L$.abonements,onClick:function(){return console.log("abonements")},title:"abonements",isActive:t}),(0,en.jsx)(an.Vw,{type:an.L$.subjects,onClick:function(){return console.log("subjects")},title:"subjects",isActive:n})]})},un=t(4825),ln=function(e){return e.editableStudent},dn=function(e){var n=function(e){return ln(e).data}(e).name;return n},hn=(ue="name",function(e){return function(e){return ln(e).fieldsEditing}(e)[ue]}),fn=t(5681),mn=t(8121),xn=t(3509),gn=function(){var e=Ne(Be),n=Ne(dn),t=Ne(hn);return(0,en.jsx)(fn.t,{onClickOutside:function(){return console.log("clickOutside")},children:(0,en.jsxs)(mn.h4,{children:[t?(0,en.jsx)(on.Z,{width:"100%",overflow:"auto",height:"100%",children:(0,en.jsx)(xn.nv,{type:xn.T3.header,text:n,onChange:function(e){return console.log("onChange",e)}})}):(0,en.jsx)(Ue.Z,{noWrap:!0,textOverflow:"ellipsis",overflow:"hidden",maxWidth:"17rem",onClick:function(){return console.log("onClick")},children:e||"click to add your name"}),(0,en.jsx)(un.J,{})]})})},pn=t(1508),jn=t(6931),wn=t(7431),vn=t(4111),bn=function(e){var n=e.id,t=e.price,r=e.limitLessons,i=e.subjects,o=e.onClickCommand,a=e.infoCommand,c=r?"".concat(r," ").concat(r>1?"Lessons":"Lesson"):"",s=i.map((function(e){return e.name})).join(", ");return(0,en.jsx)(jn.Z,{children:[(0,en.jsx)(vn.N,{children:s},"".concat(n,"_subjectsFormatted")),(0,en.jsx)(wn.h,{type:an.L$.info,onClick:a},"subjectInfo"),(0,en.jsx)(Ue.Z,{children:t},"".concat(n,"_price")),(0,en.jsx)(Ue.Z,{children:c},"".concat(n,"_limitLessons"))],onClick:o},n)},yn=function(){var e=Ne(ze);return(0,en.jsx)(on.Z,{height:"100%",overflow:"auto",children:e.length?e.map((function(e){return(0,Me.createElement)(bn,(0,k.Z)((0,k.Z)({},e),{},{key:e.id,onClickCommand:function(){return console.log("click ".concat(e.id))},infoCommand:function(){return console.log("info ".concat(e.id))}}))})):(0,en.jsx)(pn.Z,{severity:"info",children:"Add your abonement offer"})})},Zn=t(7585),kn=function(e){var n=e.name,t=e.rules,r=e.onClickCommand,i=e.infoCommand,o=(0,Zn.h)(t);return(0,en.jsx)(jn.Z,{children:[(0,en.jsx)(vn.N,{children:n},"subjectName"),(0,en.jsx)(wn.h,{type:an.L$.info,onClick:i},"subjectInfo"),(0,en.jsx)(vn.N,{children:o},"subjectRulesInfo")],onClick:r})},Sn=function(){var e=Ne(Ve);return(0,en.jsx)(on.Z,{height:"100%",overflow:"auto",children:e.length?e.map((function(e){return(0,en.jsx)(kn,(0,k.Z)({onClickCommand:function(){return console.log("click ".concat(e.id))},infoCommand:function(){return console.log("info ".concat(e.id))}},e),e.id)})):(0,en.jsx)(pn.Z,{severity:"info",children:"this list is empty"})})},Dn=function(){switch(Ne(B)){case c.subjects:return(0,en.jsx)(Sn,{});case c.abonements:return(0,en.jsx)(yn,{});default:return(0,en.jsx)(en.Fragment,{})}},Cn=function(){return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(gn,{}),(0,en.jsxs)(Oe.k,{onSwipeRight:function(){return console.log("swipeRight")},onSwipeLeft:function(){return console.log("swipeLeft")},children:[(0,en.jsx)(nn,{}),(0,en.jsx)(sn,{}),(0,en.jsx)(Dn,{})]})]})},In=t(9276),Tn=t(401),Pn=t(3978),Fn=t(9078),An=function(e){return function(e){return e.externalLessons}(e).data},Nn=function(e){return e.externalTeacher},Ln=function(e){return Nn(e).name},Mn=function(e){return Nn(e).avatar},On=function(e){return Nn(e).description},Un=function(e){return Nn(e).subjects.length},Rn=function(e){return Nn(e).abonementOffers.length},En=function(e){return Nn(e).subjects},Hn=function(e){return e.externalTeachers.data},Kn=function(e){return e.externalSubjects.data},Yn=function(e){return Hn(e).length>0},Bn=function(e){return Kn(e).length>0},zn=function(e){return Yn(e)||Bn(e)},$n=function(e){var n=Nn(e),t=function(e){return e.modal.currentSubjectId||""}(e);return n.subjects.find((function(e){return e.id===t}))},Vn=function(e){var n=$n(e);return(null===n||void 0===n?void 0:n.name)||""},Wn=function(e){var n=$n(e);return(null===n||void 0===n?void 0:n.description)||""},Gn=function(e){var n=function(e){var n=$n(e);return console.log(null===n||void 0===n?void 0:n.rules),(null===n||void 0===n?void 0:n.rules)||[]}(e);return(0,Zn.h)(n)},qn=function(e){var n=$n(e);if(n){var t=An(e),r=V(e),i=(0,Fn.oO)(n,w.He.thisSubjectSchedule,r);return[].concat((0,He.Z)(t),(0,He.Z)(i))}return[]},_n=function(e){var n=$n(e);if(n){var t=An(e),r=V(e),i=(0,Fn.oO)(n,w.He.thisSubjectSchedule,r);return(0,Fn.Kj)(t,i)}return!1},Qn=function(e){var n=function(e){return e.modal.currentAbonementLessonsFilter}(e),t=An(e);switch(n){case f.all:return t;case f.attended:var r=_e(e);return t.filter((function(e){return r.includes(e.id)}));default:return t}},Jn={display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},Xn=(0,rn.Z)(In.Z)(le||(le=(0,tn.Z)(["\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  width: 100%;\n"]))),et=function(){var e=Ne(Hn),n=Ne(Kn),t=Ne(Q),r=Ne(J),i=Ne(X),o=Ne(Yn),a=Ne(Bn),c=Ne(zn),s=(0,m.I0)(),u=c?{}:Jn;return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(mn.h4,{children:(0,en.jsx)(Xn,{children:(0,en.jsx)(un.J,{})})}),(0,en.jsx)(Oe.k,{onSwipeLeft:console.log,onSwipeRight:console.log,children:(0,en.jsxs)(In.Z,{sx:u,children:[(0,en.jsx)(Tn.U,{text:t,onChangeSearch:function(e){return s(ie.action(e))},onSearch:function(){return s(be.action())},searchOptions:i,currentOption:r,onOptionChange:function(e){return s(oe.action(e))}}),c&&(0,en.jsxs)(In.Z,{children:[(0,en.jsx)(In.Z,{children:a&&n.map((function(e){return(0,Me.createElement)(kn,(0,k.Z)((0,k.Z)({},e),{},{key:e.id,onClickCommand:function(){return s(ke.action(e.id))},infoCommand:function(){return s(ye.action(e.id))}}))}))}),(0,en.jsx)(In.Z,{children:o&&e.map((function(e){return(0,Me.createElement)(nt,(0,k.Z)((0,k.Z)({},e),{},{key:e.id,onClickCommand:function(){return s(Ze.action(e.id))},infoCommand:function(){return s(re.action(e.id))}}))}))})]})]})})]})},nt=function(e){var n=e.name,t=e.avatar,r=e.onClickCommand,i=e.infoCommand;return(0,en.jsx)(jn.Z,{children:[(0,en.jsxs)(In.Z,{display:"flex",alignItems:"center",children:[(0,en.jsx)(Pn.Z,{sizes:"large",src:t}),(0,en.jsxs)(Ue.Z,{padding:"0px 10px",variant:"h6",children:[" ",n]})]}),(0,en.jsx)(wn.h,{type:an.L$.info,onClick:i},"subjectInfo")],onClick:r})},tt=t(3154),rt=function(){var e=Ne(ee);return(0,en.jsxs)(mn.h4,{children:[(0,en.jsx)(an.Vw,{type:an.L$.arrowBack,onClick:function(){return console.log("onClick")}}),e&&(0,en.jsx)(tt.S,{isFilter:!0,options:[{title:"all",command:function(){return console.log("all")}},{title:"attended",command:function(){return console.log("attended")}}]})]})},it=t(7486),ot=function(){var e=Ne(qe),n=Ne(Qe),t=Ne(Xe),r=Ne(Je);return(0,en.jsxs)(Ee.HI,{height:60,children:[(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:e}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"expiry date"})]}),(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:n}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"lessons attended"})]}),(0,en.jsx)(Ee.To,{children:t?(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:r}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"lessons left"})]}):(0,en.jsx)(it.Z,{color:"success"})})]})},at=function(){var e=Ne(z),n=e===s.subjects,t=e===s.lessons;return(0,en.jsxs)(cn,{children:[(0,en.jsx)(an.Vw,{type:an.L$.abonements,onClick:function(){return console.log("lessons")},title:"lessons",isActive:t}),(0,en.jsx)(an.Vw,{type:an.L$.subjects,onClick:function(){return console.log("subjects")},title:"subjects",isActive:n})]})},ct=864e5,st=36e5,ut="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam sint quos culpa nemo, tenetur, ratione quae a nisi, iusto adipisci veritatis odio provident magnam. Quidem at dolorum, perspiciatis odio beatae odit incidunt. Nisi corporis rem omnis? Ducimus obcaecati iste eos quas architecto, necessitatibus odit, minus aut consectetur veritatis ipsa vitae!",lt=(new Date(2023,7,14,15,30,0),[{id:"111",durationMin:60,periodicity:{periodicityType:w.wy.weekly,periodicityRule:[1,3]},timeStart:new Date(Date.now()+72e5),teacherId:"",subjectId:""},{id:"222",durationMin:120,periodicity:{periodicityType:w.wy.weekly,periodicityRule:[2,4]},timeStart:new Date,teacherId:"",subjectId:""},{id:"333",durationMin:120,periodicity:{periodicityType:w.wy.weekly,periodicityRule:[1]},timeStart:new Date,teacherId:"",subjectId:""},{id:"444",durationMin:120,periodicity:{periodicityType:w.wy.weekly,periodicityRule:[1,2,3,4,5,6,7]},timeStart:new Date,teacherId:"",subjectId:""},{id:"555",durationMin:120,periodicity:{periodicityType:w.wy.manualDate,periodicityRule:[1604898452084]},timeStart:new Date,teacherId:"",subjectId:""},{id:"666",durationMin:120,periodicity:{periodicityType:w.wy.manualDate,periodicityRule:[]},timeStart:new Date,teacherId:"",subjectId:""},{id:"777",durationMin:120,periodicity:{periodicityType:w.wy.weekly,periodicityRule:[]},timeStart:new Date,teacherId:"",subjectId:""}]),dt=(w.DK.limited,w.DK.limited,w.DK.limited,w.DK.unlimited,w.DK.unlimited,w.DK.unlimited,[{id:"3",description:ut,name:"Tratava Yuoga",rules:[lt[0]],teacherId:""},{id:"4",description:"good yuoga",name:"Tvarata Yuoga",rules:[lt[1]],teacherId:""},{id:"5",description:"good yuoga",name:"Empty Manual Date Yuoga",rules:[lt[5]],teacherId:""},{id:"6",description:"good yuoga",name:"Manual Day Yuoga",rules:[lt[4]],teacherId:""},{id:"7",description:ut,name:"Every Day Yuoga",rules:[lt[3]],teacherId:""},{id:"8",description:"good yuoga",name:"One day Yuoga",rules:[lt[2]],teacherId:""},{id:"9",description:"good yuoga",name:"Empty Day Weekly Yuoga",rules:[lt[6]],teacherId:""}]),ht=[{id:"1",description:"test very well yuoga test",name:"Tratatata Yuoga",rules:[],teacherId:""},{id:"2",description:"good yuoga",name:"test Trata Yuoga test",rules:[],teacherId:""},{id:"3",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"4",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"5",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"6",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"7",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"8",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"9",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"10",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"11",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""},{id:"12",description:"good yuoga",name:"Trata Yuoga",rules:[],teacherId:""}],ft=(w.DK.limited,w.DK.limited,w.DK.limited,w.DK.limited,w.DK.limited,w.DK.limited,w.DK.limited,w.DK.limited,new Date,w.UN.scheduled,new Date("2023-04-27T15:00:00.000Z"),w.UN.scheduled,new Date("2023-04-27T18:00:00.000Z"),w.UN.scheduled,new Date("2023-04-27T12:00:00.000Z"),w.UN.scheduled,new Date("2023-04-25T20:00:00.000Z"),w.UN.scheduled,new Date("2023-04-28T21:00:00.000Z"),w.UN.scheduled,[{id:"test2 Ipsuma",avatar:"",name:"test2 Ipsuma"},{id:"test2 Lipsu",avatar:"",name:"test2 Lipsu"},{id:"test1 Swity",avatar:"",name:"test1 Swity"},{id:"test1 Down",avatar:"",name:"test1 Down"}]),mt=(new Date,w.UN.inProcess,new Date(Date.now()+ct+st),w.UN.scheduled,new Date(Date.now()+2*ct+72e5),w.UN.scheduled,new Date(Date.now()+3*ct+108e5),w.UN.done,new Date(Date.now()+4*ct-144e5),w.UN.finished,new Date(Date.now()+5*ct+18e6),w.UN.canceled,new Date(Date.now()+6*ct+216e5),w.UN.commingSoon,new Date(Date.now()-ct-st),w.UN.scheduled,new Date(Date.now()-2*ct-72e5),w.UN.scheduled,new Date(Date.now()-3*ct-108e5),w.UN.scheduled,new Date(Date.now()-4*ct-144e5),w.UN.scheduled,w.DK.limited,new Date(Date.now()+6*ct+216e5),w.DK.limited,new Date(Date.now()+5*ct+18e6),w.DK.limited,new Date(Date.now()+4*ct+144e5),w.DK.unlimited,new Date(Date.now()+3*ct+108e5),w.DK.unlimited,new Date(Date.now()+2*ct+72e5),w.DK.unlimited,new Date(Date.now()+ct+st),function(){var e=dt;return(0,en.jsx)(on.Z,{height:"100%",overflow:"auto",children:e.length?e.map((function(e){return(0,en.jsx)(kn,(0,k.Z)({onClickCommand:function(){return console.log("click ".concat(e.id))},infoCommand:function(){return console.log("info ".concat(e.id))}},e),e.id)})):(0,en.jsx)(pn.Z,{severity:"info",children:"this list is empty"})})}),xt=function(){var e=Ne(Qn),n=Ne(V);return(0,en.jsx)(E.f,{lessons:e,onLessonClick:function(e){console.log("navigateLesson",e)},representationType:E.So.timeGridWeek,startDate:n,onChengeDateBackward:function(){return console.log("onChengeDateBackward")},onChengeDateForward:function(){return console.log("onChengeDateForward")},onToday:function(){return console.log("onToday")}})},gt=function(e){var n=e.date,t=e.subject,r=e.onClickCommand,i=t.name,o=new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short"}).format(n);return(0,en.jsx)(jn.Z,{children:[(0,en.jsx)(vn.N,{children:i}),(0,en.jsx)(en.Fragment,{}),(0,en.jsxs)(vn.N,{children:["  ",o]})],onClick:r})},pt=function(){var e=Ne(Qn);return(0,en.jsx)(on.Z,{height:"100%",overflow:"auto",children:e.length?e.map((function(e){return(0,en.jsx)(gt,(0,k.Z)({onClickCommand:function(){return console.log("click ".concat(e.id))}},e),e.id)})):(0,en.jsx)(pn.Z,{severity:"info",children:"this list is empty"})})},jt=function(){switch(Ne(z)){case s.subjects:return(0,en.jsx)(mt,{});case s.lessons:return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(xt,{}),(0,en.jsx)(pt,{})]});default:return(0,en.jsx)(en.Fragment,{})}},wt=(0,rn.Z)(Oe.k)(de||(de=(0,tn.Z)(["\n  background-color: white;\n"]))),vt=function(){return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(rt,{}),(0,en.jsxs)(wt,{onSwipeLeft:function(){return console.log("onSwipeLeft")},onSwipeRight:function(){return console.log("onSwipeRight")},children:[(0,en.jsx)(ot,{}),(0,en.jsx)(at,{}),(0,en.jsx)(jt,{})]})]})},bt=t(1091),yt=t(8641),Zt=(0,rn.Z)(bt.Z)(he||(he=(0,tn.Z)(["\n  display: grid;\n  align-content: space-evenly;\n  position: relative;\n  border-radius: 85px;\n  border: 5px solid #5eaf8f;\n  background-color: #82f3c2;\n  box-shadow: 2px 2px 2px #5eaf8f;\n  max-height: 30rem;\n  color: #525652;\n  text-transform: none;\n  aspect-ratio: 2/4;\n  &:hover {\n    background-color: #3da779;\n    box-shadow: 2px 2px 2px #82f3c2;\n    border: 5px solid #82f3c2;\n    cursor: pointer;\n  }\n"]))),kt=(0,rn.Z)(on.Z)(fe||(fe=(0,tn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),St=(0,rn.Z)(Ue.Z)(me||(me=(0,tn.Z)(["\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 12rem;\n  text-align: center;\n  "]))),Dt=(0,rn.Z)(yt.Z)(xe||(xe=(0,tn.Z)(["\n    color: gold ;\n    height: 3rem;\n    width: 3rem;\n  "]))),Ct=function(e){var n=e.id,t=e.limitLessons,r=e.limitTime,i=e.price,o=e.subjects,a=e.isUnlimited,c=e.isMostPopular,s=e.onClick,u=o.map((function(e){return e.name})).join(", "),l=o.map((function(e){return e.rules})).flat(),d=(0,Zn.h)(l);return(0,en.jsxs)(Zt,{onClick:s,children:[c&&(0,en.jsxs)(kt,{children:[(0,en.jsx)(Dt,{}),(0,en.jsx)(Ue.Z,{variant:"h5",gutterBottom:!0,children:"Most Popular"})]}),(0,en.jsxs)(kt,{children:[(0,en.jsx)(St,{variant:"h6",gutterBottom:!0,children:u}),(0,en.jsx)(St,{variant:"subtitle2",gutterBottom:!0,children:d}),a?(0,en.jsx)(Ue.Z,{variant:"h6",gutterBottom:!0,children:"unlimited"}):(0,en.jsx)(Ue.Z,{variant:"h6",gutterBottom:!0,children:"up to ".concat(t," lessons")}),(0,en.jsxs)(Ue.Z,{variant:"h6",children:["$",i.toFixed(2)]}),(0,en.jsx)(Ue.Z,{variant:"body1",gutterBottom:!0,children:"".concat(r," months")})]})]},n)},It=t(2320),Tt=function(e){var n=e.children,t=e.isOpen,r=e.slideoutDirection,i=e.comandChilden;return(0,en.jsx)(en.Fragment,{children:(0,en.jsxs)(It.Z,{onClose:function(){},onOpen:function(){},open:t,anchor:r,PaperProps:{sx:{width:"100%",height:"100%",overflow:"hidden"}},children:[i,n]})})},Pt=(0,rn.Z)(on.Z)(ge||(ge=(0,tn.Z)(["\ndisplay: flex;\njustify-content: left;\nalign-items: center;\nmargin: 0 0 0 10px;\n"]))),Ft=function(e){var n=e.title,t=e.onClick;return(0,en.jsxs)(Pt,{children:[(0,en.jsx)(wn.h,{type:an.L$.arrowBack,onClick:t}),(0,en.jsxs)(vn.N,{onClick:t,children:[" ",n," "]})]})},At=t(9705),Nt=(t(6497),t(553),t(4277),t(5986)),Lt=t(277),Mt=(0,Lt.ZP)(on.Z)(pe||(pe=(0,tn.Z)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Ot=(0,Lt.ZP)(At.tq)(je||(je=(0,tn.Z)(["\n  &.swiper {\n    height: 100%;\n  }\n"]))),Ut=(0,Lt.ZP)(At.o5)(we||(we=(0,tn.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  width: auto;\n  height: auto;\n  overflow: auto;\n  "]))),Rt=function(e){var n=e.items,t=e.currentItemIndex,r=e.onItemChange,i=(0,Me.useRef)(null);(0,Me.useEffect)((function(){i.current&&i.current.swiper&&-1!==t&&i.current.swiper.slideTo(t)}),[t]);return(0,en.jsx)(Mt,{children:(0,en.jsx)(Ot,{ref:i,effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:-10,stretch:0,depth:100,modifier:3,slideShadows:!1},pagination:!0,modules:[Nt.lI,Nt.tl],className:"mySwiper",onSlideChange:function(e){var n=e.activeIndex;r(n)},children:n.map((function(e,n){return(0,en.jsx)(Ut,{children:e},n)}))})})},Et=t(9901),Ht=[1,2,3,4,5],Kt=function(e,n){var t=n%2===0;return{id:"RuleId".concat(n),durationMin:60,teacherId:"TeacherId".concat(n),subjectId:"SubjectId".concat(n),periodicity:{periodicityType:t?w.wy.weekly:w.wy.manualDate,periodicityRule:t?[1,2,3,4]:[new Date("21 Nov 2030").valueOf()]},timeStart:new Date}},Yt=function(e,n){var t=Ht.map(Kt).filter((function(e){return e.subjectId==="SubjectId".concat(n)}));return{id:"SubjectId".concat(n),name:"Math".concat(n),rules:t,description:"Math description".concat(n),teacherId:"TeacherId".concat(n)}},Bt=function(e,n){return(0,k.Z)((0,k.Z)({},Yt(0,n)),{},{rules:["1","2","3"]})},zt=function(e,n){var t=n%2===0;return{id:"AbonementId".concat(n),studentId:"StudentId".concat(n),price:100,limitLessons:10,type:t?w.DK.unlimited:w.DK.limited,lessonsAttended:[],dateStart:new Date,subjects:Ht.map(Yt),limitTime:n+1}},$t=function(e,n){return{id:"StudentId".concat(n),name:"Sarah".concat(n),avatar:"",abonementConsumables:Ht.map(zt)}},Vt={data:$t(0,0),fieldsEditing:{}},Wt={studentNavigation:o.schedule,scheduleView:a.schedule,studentProfileNavigation:c.subjects,abonementPageNavigation:s.lessons},Gt={detailsDrawerShown:u.closed,additionalDrawerShown:l.closed,abonementOffersShowcaseShown:d.closed},qt={search:"",searchOption:h.all},_t={currentDate:new Date,currentSubjectId:"SubjectId",currentOwnAbonementId:"AbonementId",currentAbonementOfferIndex:0,currentAbonementLessonsFilter:f.all},Qt=(0,k.Z)((0,k.Z)((0,k.Z)((0,k.Z)((0,k.Z)({},Wt),Gt),{showMore:!1}),qt),_t),Jt=function(e,n){return{id:"AbonementOfferId".concat(n),price:100,limitLessons:10,type:w.DK.limited,subjects:Ht.map(Bt).map((function(e){return e.id})),limitTime:0,teacherId:"TeacherId".concat(n)}},Xt=function(e,n){return{id:"TeacherId".concat(n),name:"Teacher".concat(n),avatar:"",description:"Teacher description".concat(n),subjects:Ht.map(Yt),abonementOffers:Ht.map(Jt)}},er=((0,k.Z)((0,k.Z)({},{loading:{},error:{},userProfile:{id:"UserId",displayName:"User Name",email:"User Email",photoURL:"User Photo",providerId:"User Provider",phoneNumber:"User Phone",notificationsToken:"User Token"}}),{},{modal:Qt,studentDomain:$t(0,0),externalLessons:{data:Ht.map((function(e,n){return{id:"LessonId".concat(n),date:new Date(Date.now()+ct*n),teacherId:"TeacherId".concat(n),subject:Bt(0,0),ruleId:"RuleId".concat(n),status:w.UN.scheduled,participants:[],durationMin:45,accepted:[],declained:[]}})),filters:{}},externalSubjects:{data:Ht.map(Yt),filters:{}},externalTeachers:{data:Ht.map(Xt),filters:{}},editableStudent:Vt,externalTeacher:Xt(0,0)}),function(){var e=Ht.map(Jt),n=Ht.map(Yt),t=[e[0].id,e[3].id],r=e.map((function(e){var r=t.includes(e.id),i=e.type===w.DK.unlimited;return(0,en.jsx)(Ct,{id:e.id,limitLessons:e.limitLessons,limitTime:e.limitTime,price:e.price,subjects:n,isUnlimited:i,isMostPopular:r,onClick:function(){return console.log("onClick ".concat(e.id))}},e.id)}));return(0,en.jsxs)(Tt,{isOpen:!0,slideoutDirection:Et.r.left,comandChilden:(0,en.jsx)(Ft,{title:"\u0421hoose your Abonement",onClick:function(){return console.log("onClose")}}),children:[(0,en.jsx)(Rt,{currentItemIndex:0,items:r,onItemChange:function(e){console.log("change item to ".concat(e))}}),(0,en.jsx)(nr,{})]})}),nr=function(){return(0,en.jsx)(on.Z,{width:"100%",display:"flex",justifyContent:"center",marginBottom:"3rem",zIndex:1800,children:(0,en.jsx)(bt.Z,{size:"large",variant:"contained",color:"success",onClick:function(){return console.log("Enroll ")},children:"Enroll"})})},tr=t(6720);!function(e){e.navigateSchedule="navigateSchedule",e.navigateSearchPage="navigateSearchPage",e.navigateStudentProfilePage="navigateStudentProfilePage"}(ve||(ve={}));var rr,ir,or=function(){var e=Ne(Ye),n=Ne(H),t=n===o.schedule,r=n===o.studentProfilePage,i=n===o.searchPage;return(0,en.jsxs)(tr.$_,{children:[(0,en.jsx)(an.Vw,{className:ve.navigateSchedule,type:an.L$.schedule,onClick:function(){return console.log("navigateSchedule")},isActive:t}),(0,en.jsx)(an.Vw,{className:ve.navigateSearchPage,type:an.L$.search,onClick:function(){return console.log("navigateSearchPage")},isActive:i}),(0,en.jsx)(an.Vw,{className:ve.navigateStudentProfilePage,type:an.L$.avatar,onClick:function(){return console.log("navigateStudentProfilePage")},isActive:r,image:e})]})},ar=function(){var e=Ne(An),n=Ne(_),t=Ne(V);return(0,en.jsx)(E.f,{lessons:e,onLessonClick:function(e){console.log("navigateLesson",e)},representationType:n,startDate:t,onChengeDateBackward:function(){return console.log("onChengeDateBackward")},onChengeDateForward:function(){return console.log("onChengeDateForward")},onToday:function(){return console.log("onToday")}})},cr=t(666),sr=function(){var e=[{id:a.schedule,title:"Schedule"},{id:a.week,title:"Week"}],n=Ne(W);return(0,en.jsxs)(mn.h4,{children:[(0,en.jsx)(cr.G,{options:e,title:"Abonement",currentOption:n,onChange:function(e){console.log("onChange",e)}}),(0,en.jsx)(un.J,{})]})},ur=function(){return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(sr,{}),(0,en.jsx)(Oe.k,{onSwipeRight:function(){return console.log("swipeRight")},onSwipeLeft:function(){return console.log("swipeLeft")},children:(0,en.jsx)(ar,{})})]})},lr=t(885),dr=t(4299),hr=function(e){return $(e)?dr.hT:dr.Hb},fr=t(5678),mr=t(5172),xr=t(3794),gr=function(){var e=Ne($),n=Ne(hr),t=Ne(Un),r=Ne(Rn),i=Ne(Mn),o=Ne(On),a=(0,Me.useRef)(null),c=Me.useState(!1),s=(0,lr.Z)(c,2),u=s[0],l=s[1];return(0,Me.useEffect)((function(){if(a.current){var e=a.current,n=e.scrollHeight;l(n>dr.Hb),e.scrollTop=0}}),[o,e]),(0,en.jsxs)(Ee.Gt,{minHeight:dr.QH+n,children:[(0,en.jsxs)(Ee.HI,{height:dr.QH,children:[(0,en.jsx)(Ee.To,{children:(0,en.jsx)(Re.q,{image:i,size:dr.bd,onClick:function(){}})}),(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:t}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"Subjects"})]}),(0,en.jsxs)(Ee.To,{children:[(0,en.jsx)(Ue.Z,{textAlign:"center",children:r}),(0,en.jsx)(Ue.Z,{textAlign:"center",children:"Abonements"})]})]}),(0,en.jsx)(Ee.NF,{ref:a,height:n,maxHeight:n,overflow:e?"auto":"hidden",onClick:function(){return console.log("click")},children:(0,en.jsx)(Ue.Z,{style:{wordWrap:"break-word"},gutterBottom:!0,onClick:function(){return console.log("click")},children:o||""})}),u&&!e&&(0,en.jsx)(xr.A,{title:"See more",onClick:function(){return console.log("See more")},children:e?(0,en.jsx)(fr.Z,{}):(0,en.jsx)(mr.Z,{})})]})},pr=function(){var e=Ne(En);return(0,en.jsx)(on.Z,{height:"100%",overflow:"auto",children:e.length?e.map((function(e){return(0,en.jsx)(kn,(0,k.Z)({onClickCommand:function(){return console.log("click ".concat(e.id))},infoCommand:function(){return console.log("info ".concat(e.id))}},e),e.id)})):(0,en.jsx)(pn.Z,{severity:"info",children:"this list is empty"})})},jr=function(){var e=Ne(Ln);return(0,en.jsxs)(Tt,{isOpen:!0,slideoutDirection:Et.r.left,comandChilden:(0,en.jsx)(Ft,{title:e,onClick:function(){return console.log("onClose")}}),children:[(0,en.jsx)(gr,{}),(0,en.jsx)(pr,{})]})},wr=function(){var e=Ne(qn),n=Ne(V),t=Ne(_n);return(0,en.jsx)(E.f,{lessons:e,onLessonClick:function(e){console.log("navigateLesson",e)},representationType:E.So.timeGridWeek,startDate:n,warningOnOverlapingEvents:t,onChengeDateBackward:function(){return console.log("onChengeDateBackward")},onChengeDateForward:function(){return console.log("onChengeDateForward")},onToday:function(){return console.log("onToday")}})},vr=function(){var e=(0,Me.useRef)(null),n=Me.useState(!1),t=(0,lr.Z)(n,2),r=t[0],i=t[1],o=Ne(Wn),a=Ne($),c=Ne(q);return(0,Me.useEffect)((function(){if(e.current){var n=e.current,t=n.scrollHeight;i(t>120),n.scrollTop=0}}),[o,a]),(0,en.jsxs)(on.Z,{children:[(0,en.jsx)(Ee.NF,{ref:e,maxHeight:c,overflow:a?"auto":"hidden",onClick:function(){return console.log("click")},children:(0,en.jsx)(Ue.Z,{style:{wordWrap:"break-word"},gutterBottom:!0,onClick:function(){return console.log("click")},children:o||""})}),r&&!a&&(0,en.jsx)(xr.A,{title:"See more",onClick:function(){return console.log("See more")},children:a?(0,en.jsx)(fr.Z,{}):(0,en.jsx)(mr.Z,{})})]})},br=(0,rn.Z)(on.Z)(rr||(rr=(0,tn.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n"]))),yr=(0,rn.Z)(Ue.Z)(ir||(ir=(0,tn.Z)(["\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n  "]))),Zr=function(){var e=Ne(Vn),n=Ne(Gn);return(0,en.jsxs)(Tt,{isOpen:!0,slideoutDirection:Et.r.left,comandChilden:(0,en.jsx)(Ft,{title:e,onClick:function(){return console.log("onClose")}}),children:[(0,en.jsx)(vr,{}),(0,en.jsx)(br,{children:(0,en.jsx)(yr,{padding:"1rem",variant:"h6",fontWeight:700,fontFamily:"Montserrat",children:"".concat(n)})}),(0,en.jsx)(wr,{}),(0,en.jsx)(kr,{})]})},kr=function(){return(0,en.jsx)(on.Z,{width:"100%",display:"flex",justifyContent:"center",position:"absolute",bottom:"".concat(tr.xQ+16,"px"),zIndex:1800,children:(0,en.jsx)(bt.Z,{variant:"contained",color:"success",onClick:function(){return console.log("Choose your abonement")},children:"Choose your abonement"})})},Sr=function(){return(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(Dr,{}),(0,en.jsx)(or,{}),(0,en.jsx)(Cr,{}),(0,en.jsx)(Tr,{}),(0,en.jsx)(Ir,{})]})},Dr=function(){switch(Ne(H)){case o.schedule:return(0,en.jsx)(ur,{});case o.studentProfilePage:return(0,en.jsx)(Cn,{});case o.searchPage:return(0,en.jsx)(et,{});default:return(0,en.jsx)(en.Fragment,{})}},Cr=function(){switch(Ne(K)){case u.teacherPageForStudent:return(0,en.jsx)(jr,{});case u.aboementPageForStudent:return(0,en.jsx)(vt,{});case u.closed:default:return(0,en.jsx)(en.Fragment,{})}},Ir=function(){return Ne(Y)!==d.closed?(0,en.jsx)(er,{}):(0,en.jsx)(en.Fragment,{})},Tr=function(){switch(Ne(G)){case l.subjectPageForStudent:return(0,en.jsx)(Zr,{});case l.closed:default:return(0,en.jsx)(en.Fragment,{})}},Pr=t(7593),Fr=t(3309),Ar=t(1879),Nr=t(1964),Lr=function(){var e=(0,m.I0)(),n=Ne(Ar.d),t=Ne(Ar.p1),r=!!n.id;return(0,Me.useEffect)((function(){var n=(0,Pr.Aj)(Fr.I8,(function(t){return console.log("auth changed"),console.log(t),t&&e(Te.action(t)),function(){return n()}}))}),[e]),(0,en.jsxs)(on.Z,{children:[r&&(0,en.jsxs)(on.Z,{display:"flex",margin:"30px 0",children:[(0,en.jsx)(on.Z,{width:"4rem",height:"4rem",children:(0,en.jsx)(Pn.Z,{src:t})}),(0,en.jsxs)(on.Z,{children:[(0,en.jsx)(Ue.Z,{variant:"h4",children:n.displayName}),(0,en.jsx)(Ue.Z,{children:n.email}),(0,en.jsx)(Ue.Z,{children:n.providerId}),(0,en.jsx)(Ue.Z,{children:n.id})]})]}),r?(0,en.jsx)(en.Fragment,{children:(0,en.jsx)(bt.Z,{onClick:function(){return e(Nr.signOutCommand.action())},children:"Sign out"})}):(0,en.jsxs)(en.Fragment,{children:[(0,en.jsx)(bt.Z,{onClick:function(){return e(Pe.action())},children:"Sign in with Google"}),(0,en.jsx)(bt.Z,{onClick:function(){return e(Fe.action())},children:"Sign in with Facebook"})]})]})},Mr=function(){var e=(0,m.I0)();(0,Me.useEffect)((function(){var n=(0,Pr.Aj)(Fr.I8,(function(t){return t&&e(Te.action(t)),function(){return n()}}))}),[e]);var n=Ne(Ar.Zw);return(0,en.jsxs)(en.Fragment,{children:["Authentication Student",n?(0,en.jsx)(Sr,{}):(0,en.jsx)(Lr,{})]})},Or=function(){return(0,en.jsx)(m.zt,{store:Le,children:(0,en.jsx)(Mr,{})})}}}]);
//# sourceMappingURL=517.39397885.chunk.js.map