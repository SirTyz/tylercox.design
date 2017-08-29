'use strict';

/**
 * @ngdoc function
 * @name nodeAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nodeAppApp
 */
angular.module('nodeAppApp')
  .controller('DumpsCtrl', function () {
      //Animation declarations
      var turnRight = new Bounce();
      turnRight.rotate({
        from: 0,
        to: 360,
        duration: 2000
      });
      var rightReturn = new Bounce();
      rightReturn.rotate({
      from: 360,
      to: 0,
      duration: 2000
      });
      var bumpUp = new Bounce();
      bumpUp.scale({
        from: {x: 0.5, y: 0.5},
        to: {x: 1, y: 1},
        duration: 2000
      });
      var slideIn = new Bounce();
      slideIn.translate({
        from: { x: 0, y: -2500 },
        to: { x: 0, y: 0 },
        duration: 2000
      });
      var slideUp = new Bounce();
      slideUp.translate({
        from: { x: 0, y: 0 },
        to: { x: 0, y: -250}
      });
      var slideDown = new Bounce();
      slideDown.translate({
        from: { x: 0, y: -250},
        to: { x: 0, y: 0}
      });


      //Animation binding with elements

      //Navbar
      $(".socialContainer a i").mouseenter(function(){
        console.log(this);
        turnRight.applyTo($(this));
      });
      $(".socialContainer a i").mouseleave(function(){
        console.log(this);
        rightReturn.applyTo($(this));
      });
      $(".navbar li").mouseenter(function(){
        bumpUp.applyTo($(this));
      });

      //WebDump Animations
      $(".webDump1").mouseenter(function(){
        console.log('I made it here.')
        slideUp.applyTo($(".faceText1"));
        slideUp.applyTo($(".descriptorText1"));
      });
      $(".webDump1").mouseleave(function(){
        console.log('I made it here.')
        slideDown.applyTo($(".faceText1"));
        slideDown.applyTo($(".descriptorText1"));
      });
      $(".webDump2").mouseenter(function(){
        console.log('I made it here.')
        slideUp.applyTo($(".faceText2"));
        slideUp.applyTo($(".descriptorText2"));
      });
      $(".webDump2").mouseleave(function(){
        console.log('I made it here.')
        slideDown.applyTo($(".faceText2"));
        slideDown.applyTo($(".descriptorText2"));
      });
      $(".webDump3").mouseenter(function(){
        console.log('I made it here.')
        slideUp.applyTo($(".faceText3"));
        slideUp.applyTo($(".descriptorText3"));
      });
      $(".webDump3").mouseleave(function(){
        console.log('I made it here.')
        slideDown.applyTo($(".faceText3"));
        slideDown.applyTo($(".descriptorText3"));
      });
      $(".webDump4").mouseenter(function(){
        console.log('I made it here.')
        slideUp.applyTo($(".faceText4"));
        slideUp.applyTo($(".descriptorText4"));
      });
      $(".webDump4").mouseleave(function(){
        console.log('I made it here.')
        slideDown.applyTo($(".faceText4"));
        slideDown.applyTo($(".descriptorText4"));
      });
      $(".webDump5").mouseenter(function(){
        console.log('I made it here.')
        slideUp.applyTo($(".faceText5"));
        slideUp.applyTo($(".descriptorText5"));
      });
      $(".webDump5").mouseleave(function(){
        console.log('I made it here.')
        slideDown.applyTo($(".faceText5"));
        slideDown.applyTo($(".descriptorText5"));
      });
      //Page Slide Animations
      slideIn.applyTo($(".outerCenterContainer"));
      slideIn.applyTo($(".innerCenterContainer"));

      //About Button
      $(".aboutButton").mouseenter(function(){
        bumpUp.applyTo($(this));
      });
  });
