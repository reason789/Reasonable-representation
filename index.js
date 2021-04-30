function myFunction() {
    var s1 = document.getElementById("text").value;

  
var i;
for (i = 0; i < s1.length; i++) {

        if(s1[i]=='a')
        s1 = s1.replace(/a/g, "~");
		if(s1[i]=='b')
        s1 = s1.replace(/b/g, "\\");
		if(s1[i]=='c')
        s1 = s1.replace(/c/g, "<");
		if(s1[i]=='d')
        s1 = s1.replace(/d/g, ">");
		if(s1[i]=='e')
        s1 = s1.replace(/e/g, "-");
		if(s1[i]=='f')
        s1 = s1.replace(/f/g, "=");
		if(s1[i]=='g')
        s1 = s1.replace(/g/g, "[");
		if(s1[i]=='h')
        s1 = s1.replace(/h/g, "]");
		if(s1[i]=='i')
        s1 = s1.replace(/i/g, "#");
		if(s1[i]=='j')
        s1 = s1.replace(/j/g, "%");
		if(s1[i]=='k')
        s1 = s1.replace(/k/g, "&");
		if(s1[i]=='l')
        s1 = s1.replace(/l/g, "*");
		if(s1[i]=='m')
        s1 = s1.replace(/m/g, "+");
		if(s1[i]=='n')
        s1 = s1.replace(/n/g, "(");
		if(s1[i]=='o')
        s1 = s1.replace(/o/g, ")");
		if(s1[i]=='p')
        s1 = s1.replace(/p/g, "_");
		if(s1[i]=='q')
        s1 = s1.replace(/q/g, "@");
		if(s1[i]=='r')
        s1 = s1.replace(/r/g, '|');
		if(s1[i]=='s')
        s1 = s1.replace(/s/g, ":");
		if(s1[i]=='t')
        s1 = s1.replace(/t/g, ";");
		if(s1[i]=='u')
        s1 = s1.replace(/u/g, "/");
		if(s1[i]=='v')
        s1 = s1.replace(/v/g, "^");
		if(s1[i]=='w')
        s1 = s1.replace(/w/g, "$");
		if(s1[i]=='x')
        s1 = s1.replace(/x/g, "!");
		if(s1[i]=='y')
        s1 = s1.replace(/y/g, "{");
		if(s1[i]=='z')
        s1 = s1.replace(/z/g, "}");


        if(s1[i]=='A')
        s1 = s1.replace(/A/g, "~");
		if(s1[i]=='B')
        s1 = s1.replace(/B/g, "\\");
		if(s1[i]=='C')
        s1 = s1.replace(/C/g, "<");
		if(s1[i]=='D')
        s1 = s1.replace(/D/g, ">");
		if(s1[i]=='E')
        s1 = s1.replace(/E/g, "-");
		if(s1[i]=='F')
        s1 = s1.replace(/F/g, "=");
		if(s1[i]=='G')
        s1 = s1.replace(/G/g, "[");
		if(s1[i]=='H')
        s1 = s1.replace(/H/g, "]");
		if(s1[i]=='I')
        s1 = s1.replace(/I/g, "#");
		if(s1[i]=='J')
        s1 = s1.replace(/J/g, "%");
		if(s1[i]=='K')
        s1 = s1.replace(/K/g, "&");
		if(s1[i]=='L')
        s1 = s1.replace(/L/g, "*");
		if(s1[i]=='M')
        s1 = s1.replace(/M/g, "+");
		if(s1[i]=='N')
        s1 = s1.replace(/N/g, "(");
		if(s1[i]=='O')
        s1 = s1.replace(/O/g, ")");
		if(s1[i]=='P')
        s1 = s1.replace(/P/g, "_");
		if(s1[i]=='Q')
        s1 = s1.replace(/Q/g, "@");
		if(s1[i]=='R')
        s1 = s1.replace(/R/g, '|');
		if(s1[i]=='S')
        s1 = s1.replace(/S/g, ":");
		if(s1[i]=='T')
        s1 = s1.replace(/T/g, ";");
		if(s1[i]=='U')
        s1 = s1.replace(/U/g, "/");
		if(s1[i]=='V')
        s1 = s1.replace(/V/g, "^");
		if(s1[i]=='W')
        s1 = s1.replace(/W/g, "$");
		if(s1[i]=='X')
        s1 = s1.replace(/X/g, "!");
		if(s1[i]=='Y')
        s1 = s1.replace(/Y/g, "{");
		if(s1[i]=='Z')
        s1 = s1.replace(/Z/g, "}");
			
}

    var valueToSymbol = document.getElementById("symbol");
    valueToSymbol.innerHTML = s1;
  }



function clearText(){
    document.getElementById('text').value = '';
    document.getElementById('symbol').innerText = '';

}


function copyText(){
   
    var copyText = document.getElementById("symbol");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
 
}



  function myFunction2() {
    var s1 = document.getElementById("text2").value;

  
var i;
for (i = 0; i < s1.length; i++) {

        if(s1[i]=='~')
        s1 = s1.replace(/~/g, "a");
		if(s1[i]=='\\')
        s1 = s1.replace(/\\/g, "b");
		if(s1[i]=='<')
        s1 = s1.replace(/</g, "c");
		if(s1[i]=='>')
        s1 = s1.replace(/>/g, "d");
		if(s1[i]=='-')
        s1 = s1.replace(/-/g, "e");
		if(s1[i]=='=')
        s1 = s1.replace(/=/g, "f");
		if(s1[i]=='[')
        s1 = s1.replace(/\[/g, "g");
		if(s1[i]==']')
        s1 = s1.replace(/]/g, "h");
		if(s1[i]=='#')
        s1 = s1.replace(/#/g, "i");
		if(s1[i]=='%')
        s1 = s1.replace(/%/g, "j");
		if(s1[i]=='&')
        s1 = s1.replace(/&/g, "k");
		if(s1[i]=='*')
        s1 = s1.replace(/\*/g, "l");
		if(s1[i]=='+')
        s1 = s1.replace(/\+/g, "m");
		if(s1[i]=='(')
        s1 = s1.replace(/\(/g, "n");
		if(s1[i]==')')
        s1 = s1.replace(/\)/g, "o");
		if(s1[i]=='_')
        s1 = s1.replace(/_/g, "p");
		if(s1[i]=='@')
        s1 = s1.replace(/@/g, "q");
		if(s1[i]=='|')
        s1 = s1.replace(/\|/g, "r");
		if(s1[i]==':')
        s1 = s1.replace(/:/g, "s");
		if(s1[i]==';')
        s1 = s1.replace(/;/g, "t");
		if(s1[i]=='/')
        s1 = s1.replace(/\//, "u");
		if(s1[i]=='^')
        s1 = s1.replace(/\^/g, "v");
		if(s1[i]=='$')            
        s1 = s1.replace(/\$/g, "w");
		if(s1[i]=='!')
        s1 = s1.replace(/!/g, "x");
		if(s1[i]=='{')
        s1 = s1.replace(/{/g, "y");
		if(s1[i]=='}')
        s1 = s1.replace(/}/g, "z");

			
}

    var valueToSymbol = document.getElementById("symbol2");
    valueToSymbol.innerHTML = s1;
  }

  function clearText2(){
    document.getElementById('text2').value = '';
    document.getElementById('symbol2').innerText = '';
  }


  function copyText2(){
   
    var copyText = document.getElementById("symbol2");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
 
}

/////////////////////////////////////////////////////


function openSettings(){
    window.open("settings.html","_self");

   //var a = document.getElementById('a').value = "~";

}

function openHome(){
    window.open("index.html","_self");
}


