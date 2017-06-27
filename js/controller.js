
var myApp = angular.module('myApp', ['ngRoute']);


myApp.controller('ProjectsController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  
  $scope.order = 'id';
  $scope.pagetitle = 'Projects';
  $scope.qtd = 6;
  $scope.itens = [
    {
      id: 1, title: 'Janagana', 
      image: 'http://onclickmidia.net/portfolio/jg-m.fw.png', 
      description: 'Prototype created to be displayed in a workshop in Palo Alto, CA, USA.', 
      techs: 'Json, Ionic, AngularJS and Material design.', 
      link: 'http://onclickmidia.net/janagana/', 
      code: ''
    },
    {
      id: 2, title: 'Product Hunter', 
      image: 'http://onclickmidia.net/portfolio/product-complete.fw.png', 
      description: 'Prototype - The latest from Product Hunt in every new Chrome tab.', 
      techs: 'AngularJS, CSS3, HTML5 and Javascript.', 
      link: 'http://onclickmidia.net/producthunter/', 
      code: 'https://github.com/leoneloliver/Stationfy-producthunter'
    },
    {
      id: 3, title: 'Homenova', 
      image: 'http://onclickmidia.net/portfolio/placeit-6.jpg', 
      description: 'Homenova is changing the way people buy and sell their homes.', 
      techs: 'PHP, Mysql, Html5, Css3, Jquery and Javascript.', 
      link: 'http://www.homenova.com', 
      code: ''
    },
    {
      id: 4, title: 'Tshirt-Awesome', 
      image: 'http://onclickmidia.net/portfolio/tshirt.fw.png', 
      description: 'Website Prototype - T Shirt online store.', 
      techs: 'ReactJS, Html5, Css3, Jquery and Javascript.', 
      link: 'http://onclickmidia.net/tshirt-awesome/', 
      code: 'https://github.com/leoneloliver/T-shirt-ecommerce'
    },
    {
      id: 5, title: 'Go Miranda', 
      image: 'http://onclickmidia.net/portfolio/miranda.fw.png', 
      description: 'Canada\'s most powerful way to find a legal professional.', 
      techs: 'PHP, Mysql, Bootstrap, HTML, CSS and Jquery Mobile.', 
      link: 'http://www.gomiranda.com/', 
      code: ''
    },
    {
      id: 6, title: 'Hackathon (Toronto)',
      image: 'http://onclickmidia.net/portfolio/hackathon.png', 
      description: 'Hackathon 2016, a great hacking event hosted by Toronto Public Library.', 
      techs: 'Javascript, ionic, HTML, CSS and Responsive design.', 
      link: 'https://www.youtube.com/watch?v=X5PWzBvAzXU&amp;feature=youtu.be', 
      code: 'https://github.com/leoneloliver/TPLHackathon2016'
    }
  ];


}]);

myApp.controller('LabelsController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  
  $scope.order = 'id';
  $scope.labels = [
    {id: 1, title: 'CSS3', nameclass: ''},
    {
      id: 2, title: 'HTML5', nameclass: '--info'
    },
    {
      id: 3, title: 'Javascript', nameclass: '--warning'
    },
    {
      id: 4, title: 'SASS/LESS', nameclass: ''
    },
    {
      id: 5, title: 'jquery', nameclass: '--info'
    },
    {
      id: 6, title: 'PHP', nameclass: '--warning'
    },
    {
      id: 7, title: 'Mysql', nameclass: ''
    },
    {
      id: 8, title: 'CMS', nameclass: '--info'
    },
    {
      id: 9, title: 'Ionic', nameclass: '--warning'
    },
    {
      id: 10, title: 'HAML', nameclass: ''
    },
    {
      id: 11, title: 'GIT', nameclass: '--info'
    },
    {
      id: 12, title: 'SMACSS', nameclass: '--warning'
    },
    {
      id: 13, title: 'ZeptoJS', nameclass: ''
    },
    {
      id: 14, title: 'Sublime', nameclass: '--info'
    },
    {
      id: 15, title: 'Bootstrap', nameclass: '--warning'
    },
     {
      id: 16, title: 'Material Design', nameclass: ''
    },
    
    
    
  ];


}]);


myApp.controller('ProfileController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {

  $scope.profileBG = "https://discovery-cdn-assets-prod.hubba.com/assets/images/user-onboarding/profile-bg@2x.png";
  $scope.avatar = "https://avatars0.githubusercontent.com/u/2663655?v=3&amp;s=460";
  $scope.avatarAlt = "Leonel Oliveira - Front-end developer";
  $scope.profileTitle = "About";
  $scope.skillsTitle = "My skills are:";
  $scope.descriptions = [
    {text: "I am a front-end developer, passionate for Internet Technology."},
    {text: "LEGO Geek and Rubik's cube Solver."},
    {text: "Excellent experience in Front End Development, Cross browser and Responsive Design."}
  ];
  $scope.skills = [
    {text: "- Creating website/apps with responsive frameworks;"},
    {text: "- Grid system, Material Design, Bootstrap and Foundation;"},
    {text: "- HTML5/CSS3;"},
    {text: "- Developing website templates;;"},
    {text: "- Javascript, ES6, jQuery, ZeptoJs and familiarity with AngularJS/IONIC;"},
    {text: "- CSS (SASS/LESS), OOCSS, SMACSS and BEM;"},
    {text: "- Learning React and PWA(Progressive Web Apps);"}
  ];


}]);

// project list in directive
myApp.directive("projectList", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'projects.html',
       replace: true,
       scope: {
          itensList: "=",
          order: '@',
          qtd: '@'
       }
   }
});
