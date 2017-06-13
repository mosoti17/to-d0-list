function ToDoList(title, description, startdate, enddate ) {
  this.title =title;
  this.description= description;
  this.startdate= startdate;
  this.enddate= enddate;

}
ToDoList.prototype.header = function(){
  return this.title;
}
///////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $("form.input").submit(function (event) {
    event.preventDefault();
    var inputedTitle = $("input#title").val();
    var inputedDescription = $("input#description").val();
    var inputedStartDate = $("input#startdate").val();
    var inputedEndDate = $("input#enddate").val();

    var newToDoList = new ToDoList(inputedTitle,inputedDescription, inputedStartDate, inputedEndDate);
  $("ul#tasks").append("<li><span class='task-details'>" + newToDoList.header() + "</span></li>")

  $(".task-details").last().click(function () {
    $("#show-tasks").show();
    $("#show-tasks h2").text(newToDoList.title);
    $(".description").text(newToDoList.description);
    $(".startdate").text(newToDoList.startdate);
    $(".enddate").text(newToDoList.enddate);

  });
  });


});
