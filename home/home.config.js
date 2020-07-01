function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('home', {
    url: '',
    controller: 'HomeCtrl',
    controllerAs: '$ctrl',
    //cambiar el html
    templateUrl: 'home/pildoras.html'
  });

};

export default HomeConfig;