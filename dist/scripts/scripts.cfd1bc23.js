"use strict";angular.module("nodeAppApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/dumps",{templateUrl:"views/dumps.html",controller:"DumpsCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("nodeAppApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("nodeAppApp").controller("DumpsCtrl",function(){var a=new Bounce;a.rotate({from:0,to:360,duration:2e3});var b=new Bounce;b.rotate({from:360,to:0,duration:2e3});var c=new Bounce;c.scale({from:{x:.5,y:.5},to:{x:1,y:1},duration:2e3});var d=new Bounce;d.translate({from:{x:0,y:-2500},to:{x:0,y:0},duration:2e3});var e=new Bounce;e.translate({from:{x:0,y:0},to:{x:0,y:-250}});var f=new Bounce;f.translate({from:{x:0,y:-250},to:{x:0,y:0}}),$(".socialContainer a i").mouseenter(function(){console.log(this),a.applyTo($(this))}),$(".socialContainer a i").mouseleave(function(){console.log(this),b.applyTo($(this))}),$(".navbar li").mouseenter(function(){c.applyTo($(this))}),$(".webDump1").mouseenter(function(){console.log("I made it here."),e.applyTo($(".faceText1")),e.applyTo($(".descriptorText1"))}),$(".webDump1").mouseleave(function(){console.log("I made it here."),f.applyTo($(".faceText1")),f.applyTo($(".descriptorText1"))}),$(".webDump2").mouseenter(function(){console.log("I made it here."),e.applyTo($(".faceText2")),e.applyTo($(".descriptorText2"))}),$(".webDump2").mouseleave(function(){console.log("I made it here."),f.applyTo($(".faceText2")),f.applyTo($(".descriptorText2"))}),$(".webDump3").mouseenter(function(){console.log("I made it here."),e.applyTo($(".faceText3")),e.applyTo($(".descriptorText3"))}),$(".webDump3").mouseleave(function(){console.log("I made it here."),f.applyTo($(".faceText3")),f.applyTo($(".descriptorText3"))}),$(".webDump4").mouseenter(function(){console.log("I made it here."),e.applyTo($(".faceText4")),e.applyTo($(".descriptorText4"))}),$(".webDump4").mouseleave(function(){console.log("I made it here."),f.applyTo($(".faceText4")),f.applyTo($(".descriptorText4"))}),$(".webDump5").mouseenter(function(){console.log("I made it here."),e.applyTo($(".faceText5")),e.applyTo($(".descriptorText5"))}),$(".webDump5").mouseleave(function(){console.log("I made it here."),f.applyTo($(".faceText5")),f.applyTo($(".descriptorText5"))}),d.applyTo($(".outerCenterContainer")),d.applyTo($(".innerCenterContainer"))}),angular.module("nodeAppApp").run(["$templateCache",function(a){a.put("views/dumps.html",'<p class="headerText">My Domain</p> <div class="webDumps"> <a href="https://discord.gg/vzmjH2q"> <div class="webDump1"> <div class="faceText1"><i class="fa fa-microphone" aria-hidden="true"></i></div> <div class="descriptorText1">Discord</div> </div> </a> <a href="http://www.steamcommunity.com/id/sirtyz"> <div class="webDump2"> <div class="faceText2"><i class="fa fa-steam-square" aria-hidden="true"></i></div> <div class="descriptorText2">Steam</div> </div> </a> <a href="https://www.twitch.tv/sirtyz"> <div class="webDump3"> <div class="faceText3"><i class="fa fa-twitch" aria-hidden="true"></i></div> <div class="descriptorText3">Twitch</div> </div> </a> <a href="http://fourthnode.herokuapp.com/"> <div class="webDump4"> <div class="faceText4"><i class="fa fa-beer" aria-hidden="true"></i></div> <div class="descriptorText4">Estaria Project</div> </div> </a> <a href="http://www.tylercox.design"> <div class="webDump5"> <div class="faceText5"><i class="fa fa-laptop" aria-hidden="true"></i></div> <div class="descriptorText5">Personal Site</div> </div> </a> </div>'),a.put("views/main.html",'<div class="intro" ng-controller="DumpsCtrl"> <img class="introImage" src="../images/Avatar_Tyler-01.67204a01.png"> <div class="introText"> <p>Hi, I\'m Tyz. I am a web developer and designer. I am interested in a whole bunch of stuff, here is just some of it: Design, Fantasy RPGs, MMORPGs, MOBAs, Music, Northern European History &amp; Culture, Science, Tabletop RPGs, and Technology. This is a website I created to be somewhat of an online buisness card that I can send to anyone interested in the same things as me. I am involved in a lot of places around the web, so instead of worrying about telling people where they can find me, I decided to just give them this website and let them add me where they see fit.</p> </div> </div>')}]);