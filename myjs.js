//load projects
var projects = [
  ["Calendar Generator", "With this you can generate a simple calendar for personal use.", "/calendargen/"],
  ["Flask-Forum", "A simple forum made with Python Flask and it uses SQLite3.", "https://github.com/kalmar-adam/Flask-Forum"],
];
var elements = "";
for (let i = 0; i < projects.length; i++) {
  elements += '<a href="' + projects[i][2] + "\" target='_blank'><h3>" + projects[i][0] + "</h3><p>" + projects[i][1] + "</p></a>";
}
document.getElementById("stuff_flex").innerHTML = elements;
