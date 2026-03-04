function  showInnovation(year) {

let text="";

if (year == 1970)
    text = "The C Programming Language (early 1970s): Ritchie developed C as a language that combined high-level abstraction with low-level efficiency.It was created to rewrite the UNIX system, providing the portability and performance needed for operating systems, which made it a standard language for software, embedded systems, and applications";

else if (year == 1969)
  text ="UNIX Operating System (1969-1970s): Collaborating with Ken Thompson, Ritchie developed UNIX as a simple, multi-user, interactive, and portable system. It was designed for efficiency and flexibility, incorporating key concepts like the hierarchical file system, pipes, and universal I/O.";


else if (year == 1990)
    text ="Plan 9 and Inferno (1990s): Later in his career, Ritchie led the development of the Plan 9 and Inferno operating systems, which were designed to improve upon Unix concepts for distributed, networked environments";


  document.getElementById("key").innerHTML = text;

}


function  showpaper(year) {

let text="";

if (year == 1978)
    text = "The C Programming Language (1978): Co-authored with Brian Kernighan, this book (often called K R) is the definitive guide to C and introduced the Hello, World program.";

else if (year == 1974)
text ="The UNIX Time-Sharing System (1974): Published with Ken Thompson, this paper in the Communications of the ACM introduced UNIX to the world";


else if (year == 1979)
    text ="The Evolution of the UNIX Time-sharing System (1979/1984): A detailed account of the development of UNIX.";

else if (year == 1993)
    text ="The Development of the C Language (1993): A paper detailing the history and motivations behind the creation of C."
  
else if (year == 1978)
    text ="Portability of C Programs and the UNIX System (1978): Co-authored with Steve Johnson, discussing the design choices that allowed UNIX to move to new hardware.";

else if (year == 1984)
    text ="A Stream Input/Output System (1984): A paper introducing the stream mechanism in UNIX"







document.getElementById("paper").innerHTML = text;

}