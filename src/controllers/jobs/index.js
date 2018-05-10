JobsIndexCtrl.$inject = ['Job'];

function JobsIndexCtrl(Job) {

  const vm = this;

  vm.all = [];
  vm.userLocation = {};
  vm.criteria = {};
  vm.available = [];

  Job
    .find()
    .then(res => vm.all = res.data)
    .then(availability);

  function jobsFilter() {
    Job
      .findByLocation(vm.criteria)
      .then(res => {
        vm.all = res.data;
      });
  }

  function setUserLocation(pos) {
    vm.criteria.lat = pos.lat;
    vm.criteria.lng = pos.lng;
  }

  function availability() {
    var x = vm.all;
    for (var i = 0; i< x.length; i++) {
      if (x[i].status === 'available') {
        vm.available.push(x[i]);
      }
    }
  }

  this.jobsFilter = jobsFilter;
  vm.setUserLocation = setUserLocation;
  this.availability = availability;

}
export default JobsIndexCtrl;
