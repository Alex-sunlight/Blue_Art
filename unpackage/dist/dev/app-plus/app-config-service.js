
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/my/my","pages/my/collect","pages/my/news","pages/my/certificate","pages/login/login","pages/register/register","pages/login/reset","pages/index/recharge","pages/index/invite","pages/index/aegisTopUp","pages/index/addressReceipt","pages/settings/settings","pages/settings/ProfileSettings","pages/settings/SecuritySettings","pages/index/detailsList","pages/index/details","pages/index/withdrawal","pages/index/prepaidOrders","pages/index/prepaidDetails","pages/index/withdrawalOrder"],"window":{"navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#3972ab","backgroundColor":"#3972ab"},"tabBar":{"color":"#a4b0b3","selectedColor":"#57b6ff","borderStyle":"black","backgroundColor":"#3972ab","list":[{"pagePath":"pages/index/index","iconPath":"/static/image/index1.png","selectedIconPath":"/static/image/index2.png","text":"首页"},{"pagePath":"pages/my/my","iconPath":"/static/image/my1.png","selectedIconPath":"/static/image/my2.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"BlueArt","compilerVersion":"3.6.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"BlueArt","titleNView":{"buttons":[{"index":"0","text":"","fontSize":"23","fontSrc":"/static/uniicons.ttf","float":"left"},{"index":"1","text":"","fontSize":"23","fontSrc":"/static/uniicons.ttf","float":"right"}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/my/collect","meta":{},"window":{"navigationBarTitleText":"我的藏品"}},{"path":"/pages/my/news","meta":{},"window":{"navigationBarTitleText":"热门资讯"}},{"path":"/pages/my/certificate","meta":{},"window":{"navigationBarTitleText":"资质证书"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/login/reset","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/index/recharge","meta":{},"window":{"navigationBarTitleText":"U盾充值"}},{"path":"/pages/index/invite","meta":{},"window":{"navigationBarTitleText":"邀请注册"}},{"path":"/pages/index/aegisTopUp","meta":{},"window":{"navigationBarTitleText":"U盾充值"}},{"path":"/pages/index/addressReceipt","meta":{},"window":{"navigationBarTitleText":"地址回执"}},{"path":"/pages/settings/settings","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/settings/ProfileSettings","meta":{},"window":{"navigationBarTitleText":"资料设置"}},{"path":"/pages/settings/SecuritySettings","meta":{},"window":{"navigationBarTitleText":"安全设置"}},{"path":"/pages/index/detailsList","meta":{},"window":{"navigationBarTitleText":"详情列表"}},{"path":"/pages/index/details","meta":{},"window":{"navigationBarTitleText":"详情"}},{"path":"/pages/index/withdrawal","meta":{},"window":{"navigationBarTitleText":"提现"}},{"path":"/pages/index/prepaidOrders","meta":{},"window":{"navigationBarTitleText":"U盾充值订单"}},{"path":"/pages/index/prepaidDetails","meta":{},"window":{"navigationBarTitleText":"U盾充值订单"}},{"path":"/pages/index/withdrawalOrder","meta":{},"window":{"navigationBarTitleText":"提现订单"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
