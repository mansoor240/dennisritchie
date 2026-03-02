function showyear(year) {

let text="";

if (year == 1941)
    text = "Dennis Ritchie was born in 1941";

else if (year == 1968)
text ="Worked on UNIX development";

else if (year == 1972)
text ="Created the C Programming Language";

else if (year == 2011)
    text ="DIED";


  document.getElementById("timelineText").innerHTML = text;

}




function showaward(award) {
    let text="";

    if (award == 1982)
        text = " Won IEEE Emanuel R. Piore Award"

    else if (award == 1983)
text ="Won  Turning award";

 else if (award == 1990)
text ="Won   IEEE Richard W. Hamming Medal ";

else if (award == 1994)
text ="Won Computer Pioneer Award ";

 else if (award == 1997)
text ="Won Computer History Museum";

else if (award == 1998)
text ="Won National Medal of Technology";

document.getElementById("award").innerHTML = text;

}



function showquote() {
  document.getElementById("quoteText").innerHTML =
    "UNIX is simple and powerful.";
}
