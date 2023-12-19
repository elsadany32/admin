"use strict";exports.id=7466,exports.ids=[7466],exports.modules={7466:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>sign_out_routes});var common=__webpack_require__(14565),router=__webpack_require__(16055),cjs=__webpack_require__(2859),core=__webpack_require__(78371),auth_service=__webpack_require__(9513);function AuthSignOutComponent_ng_container_8_Template(rf,ctx){if(1&rf&&(core.ynx(0),core._uU(1),core.ALo(2,"i18nPlural"),core.BQk()),2&rf){const ctx_r0=core.oxw();core.xp6(1),core.hij(" Redirecting in ",core.xi3(2,1,ctx_r0.countdown,ctx_r0.countdownMapping)," ")}}function AuthSignOutComponent_ng_container_9_Template(rf,ctx){1&rf&&(core.ynx(0),core._uU(1," You are now being redirected! "),core.BQk())}const _c0=function(){return["/sign-in"]},sign_out_routes=[{path:"",component:(()=>{class AuthSignOutComponent2{constructor(_authService,_router){this._authService=_authService,this._router=_router,this.countdown=5,this.countdownMapping={"=1":"# second",other:"# seconds"},this._unsubscribeAll=new cjs.Subject}ngOnInit(){this._authService.signOut(),(0,cjs.timer)(1e3,1e3).pipe((0,cjs.finalize)(()=>{this._router.navigate(["sign-in"])}),(0,cjs.takeWhile)(()=>this.countdown>0),(0,cjs.takeUntil)(this._unsubscribeAll),(0,cjs.tap)(()=>this.countdown--)).subscribe()}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}static#_=this.\u0275fac=function(t){return new(t||AuthSignOutComponent2)(core.Y36(auth_service.e),core.Y36(router.F0))};static#_2=this.\u0275cmp=core.Xpm({type:AuthSignOutComponent2,selectors:[["auth-sign-out"]],standalone:!0,features:[core.jDz],decls:15,vars:4,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","sm:rounded-2xl","sm:shadow","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12","mx-auto"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight","text-center"],[1,"flex","justify-center","mt-0.5","font-medium"],[4,"ngIf"],[1,"mt-8","text-md","font-medium","text-secondary","text-center"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),core._UZ(4,"img",4),core.qZA(),core.TgZ(5,"div",5),core._uU(6,"You have signed out!"),core.qZA(),core.TgZ(7,"div",6),core.YNc(8,AuthSignOutComponent_ng_container_8_Template,3,4,"ng-container",7),core.YNc(9,AuthSignOutComponent_ng_container_9_Template,2,0,"ng-container",7),core.qZA(),core.TgZ(10,"div",8)(11,"span"),core._uU(12,"Go to"),core.qZA(),core.TgZ(13,"a",9),core._uU(14,"sign in "),core.qZA()()()()()),2&rf&&(core.xp6(8),core.Q6J("ngIf",ctx.countdown>0),core.xp6(1),core.Q6J("ngIf",0===ctx.countdown),core.xp6(4),core.Q6J("routerLink",core.DdM(3,_c0)))},dependencies:[common.O5,router.rH,common.Gx],encapsulation:2})}return AuthSignOutComponent2})()}]}};