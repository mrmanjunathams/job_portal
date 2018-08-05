var app =angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/",{
      controller:"myController",
      templateUrl:"first.html"
    }).when("/register",{
        templateUrl:"Register.html"
    }).when("/logIn",{
        templateUrl:"LogIn.html"
    }).when("/postjob",{
        templateUrl:"addjob.html"
    }).when("/recuiter",{
      templateUrl:"Recuiter.html"
    }).when("/employee",{
      templateUrl:"Employee.html"
    }).when("/employeeprofile",{
      templateUrl:"Employee_Profile.html"
    }).when("/addskill",{
      templateUrl:"Add_Skill.html"
    }).when("/forgot",{
      templateUrl:"forgot.html"
    }).when("/recovery",{
      templateUrl:"recovery.html"
    }).when("/recuiterprofile",{
      templateUrl:"Recuiter_Profile.html"
    }).when("/addjobs",{
      templateUrl:"addjob.html"
    }).when("/aboutus",{
      templateUrl:"AboutUs.html"
    }).when("/redit",{
      templateUrl:"redit.html"
    }).when("/eedit",{
      templateUrl:"eedit.html"
    }).when("/home",{
      controller:"tableController1",
      controller:"tableController2",
      templateUrl:"home.html"
    }).when("/review",{
      templateUrl:"reviews.html"
    }).when("/model",{
      templateUrl:"model.html"
    });

});



app.controller("tableController1",function($scope,$http){
  $http.get("http://localhost:3050/candidates").then(function(response){
				$scope.data=response.data;
				console.log(response.data);
			})
});

app.controller("tableController2",function($scope,$http){
  $http.get("http://localhost:3050/jobs").then(function(response){
				$scope.dataj=response.data;
				console.log(response.data);
			})
});



var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
