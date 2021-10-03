//load projects
var projects=[
    ["Calendar Generator",
    "With this you can generate a simple calendar for personal use.",
    "/calendargen/"]
];
var elements="";
for (let i = 0; i < projects.length; i++) {
    elements+="<a href=\""+projects[i][2]+"\" target='_blank'><h3>"+projects[i][0]+"</h3><p>"+projects[i][1]+"</p></a>";
}
document.getElementById('stuff_flex').innerHTML=elements;