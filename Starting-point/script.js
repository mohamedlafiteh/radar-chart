var activityCanvas = document.getElementById("activityChart");

var activityData = {
  labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling","Running"],
  datasets: [{
    label: "First Dataset",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [80,23,90,12,67,37,90]
  }, {
    label: "Second Dataset",
    backgroundColor: "rgb(0, 191, 255)",
    data: [42,10,42,37,92,40,78]
  }]
};

var radarChart = new Chart(activityCanvas, {
  type: 'radar',
  data: activityData
});