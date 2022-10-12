function myFunction()
{
    document.getElementById("list").style.display="none";
    document.getElementById("log").style.display="none";
    document.getElementById("menuan").style.display="block";
    document.getElementById("header").style.opacity = "0.5";
    document.getElementById("video").style.opacity = "0.5";
    document.getElementById("body").style.position= "fixed";
}

function myFunction1()
{
    document.getElementById("list").style.display="block";
    document.getElementById("menuan").style.display="none";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("log").style.display="block";
    document.getElementById("video").style.opacity = "1";
    document.getElementById("body").style.position= "absolute";
}

function hienanphai()
{
    document.getElementById("anphai").style.display="block";
}

function anhienphai()
{
    document.getElementById("anphai").style.display="none";
}

function annutphai()
{
    document.getElementById("nutphai").style.display="block";
    document.getElementById("loc").style.display="none";
}

function annuttrai()
{
    document.getElementById("nutphai").style.display="none";
    document.getElementById("loc").style.display="block";
    document.getElementById("anphai").style.display="none";
    document.getElementById("loc").style.display="flex";
    document.getElementById("loc").style.justifycontent="center";
    
}

function bigImg()
{
    document.getElementById("phongto").style.cursor="pointer";
    document.getElementById("phongto").style.display="block";
}

function normalImg()
{
    document.getElementById("phongto").style.display="none";
}