//Olemme luoneet jokaiselle elokuvateatterille oman funktion, jotka ovat XML-tiedoston URL-osoitetta lukuunottamatta samanlaisia.//
//Tämän takia kommentoimme vain ensimmäisen funktion, koska muut toimivat täysin samalla tavalla//
//Tämän tiedoston lopussa on EventListenerit, joista kaksi on kommentoitu.//
//Koodi näyttää yksinkertaiselta, mutta yhteensä projektiin kului aikaa noin 30h, koska olemme paskoja :D//

//Luodaan funktio//
function omena(){ 
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039", true);
xmlhttp.send();
xmlhttp.onreadystatechange = function() {
if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

    var xmlDoc = xmlhttp.responseXML;
    var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
    var x = xmlDoc.getElementsByTagName("Show")
    var elokuva = xmlDoc.getElementsByTagName("Title");
    var teatteri = xmlDoc.getElementsByTagName("Theatre");
    var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
    var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
    var aika = xmlDoc.getElementsByTagName("dttmShowStart");
    var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
    
    for (i=0; i<x.length; i++) {
      var a = aika[i].innerHTML;
      table += "<tr><td>" +
        "<img src="+
          kuva[i].childNodes[0].nodeValue +
          ">" + 
          "</td><td>" +
          a[11]+a[12]+a[13]+a[14]+a[15] +
          "</td><td>" +
          elokuva[i].childNodes[0].nodeValue +
          "</td><td>" +
          teatteri[i].childNodes[0].nodeValue +
          "</td><td>" +
          sali[i].childNodes[0].nodeValue +
          "</td><td>" +
          pituus[i].childNodes[0].nodeValue + " min" +
          "</td></tr>";


        
        
    }
    document.getElementById("tabledata").innerHTML = table;
}
}
  }




function itis(){
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1045", true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {

      var xmlDoc = xmlhttp.responseXML;
      var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
      var x = xmlDoc.getElementsByTagName("Show")
      var elokuva = xmlDoc.getElementsByTagName("Title");
      var teatteri = xmlDoc.getElementsByTagName("Theatre");
      var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
      var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
      var aika = xmlDoc.getElementsByTagName("dttmShowStart");
      var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
      
      for (i=0; i<x.length; i++) {
        var a = aika[i].innerHTML;
        table += "<tr><td>" +
          "<img src="+
            kuva[i].childNodes[0].nodeValue +
            ">" + 
            "</td><td>" +
            a[11]+a[12]+a[13]+a[14]+a[15] +
            "</td><td>" +
            elokuva[i].childNodes[0].nodeValue +
            "</td><td>" +
            teatteri[i].childNodes[0].nodeValue +
            "</td><td>" +
            sali[i].childNodes[0].nodeValue +
            "</td><td>" +
            pituus[i].childNodes[0].nodeValue + " min" +
            "</td></tr>";

          
          
      }
      document.getElementById("tabledata").innerHTML = table;
  }
}
    }

    


    function sello(){
      var xmlhttp = new XMLHttpRequest();
      
      xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1038", true);
      xmlhttp.send();
      xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      
          var xmlDoc = xmlhttp.responseXML;
          var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
          var x = xmlDoc.getElementsByTagName("Show")
          var elokuva = xmlDoc.getElementsByTagName("Title");
          var teatteri = xmlDoc.getElementsByTagName("Theatre");
          var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
          var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
          var aika = xmlDoc.getElementsByTagName("dttmShowStart");
          var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
      
          for (i=0; i<x.length; i++) {
            var a = aika[i].innerHTML;
            table += "<tr><td>" +
              "<img src="+
                kuva[i].childNodes[0].nodeValue +
                ">" + 
                "</td><td>" +
                a[11]+a[12]+a[13]+a[14]+a[15] +
                "</td><td>" +
                elokuva[i].childNodes[0].nodeValue +
                "</td><td>" +
                teatteri[i].childNodes[0].nodeValue +
                "</td><td>" +
                sali[i].childNodes[0].nodeValue +
                "</td><td>" +
                pituus[i].childNodes[0].nodeValue + " min" +
                "</td></tr>";
      
      
      
      
          }
          document.getElementById("tabledata").innerHTML = table;
      }
      }
        }
      
      

      function kinopalatsi(){
        var xmlhttp = new XMLHttpRequest();
        
        xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1031", true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        
            var xmlDoc = xmlhttp.responseXML;
            var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
            var x = xmlDoc.getElementsByTagName("Show")
            var elokuva = xmlDoc.getElementsByTagName("Title");
            var teatteri = xmlDoc.getElementsByTagName("Theatre");
            var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
            var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
            var aika = xmlDoc.getElementsByTagName("dttmShowStart");
            var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
        
            for (i=0; i<x.length; i++) {
              var a = aika[i].innerHTML;
              table += "<tr><td>" +
                "<img src="+
                  kuva[i].childNodes[0].nodeValue +
                  ">" + 
                  "</td><td>" +
                  a[11]+a[12]+a[13]+a[14]+a[15] +
                  "</td><td>" +
                  elokuva[i].childNodes[0].nodeValue +
                  "</td><td>" +
                  teatteri[i].childNodes[0].nodeValue +
                  "</td><td>" +
                  sali[i].childNodes[0].nodeValue +
                  "</td><td>" +
                  pituus[i].childNodes[0].nodeValue + " min" +
                  "</td></tr>";
        
        
        
        
            }
            document.getElementById("tabledata").innerHTML = table;
        }
        }
          }
        
         
        
        function tennis(){
          var xmlhttp = new XMLHttpRequest();
          
          xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1033", true);
          xmlhttp.send();
          xmlhttp.onreadystatechange = function() {
          if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          
              var xmlDoc = xmlhttp.responseXML;
              var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
              var x = xmlDoc.getElementsByTagName("Show")
              var elokuva = xmlDoc.getElementsByTagName("Title");
              var teatteri = xmlDoc.getElementsByTagName("Theatre");
              var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
              var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
              var aika = xmlDoc.getElementsByTagName("dttmShowStart");
              var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
          
              for (i=0; i<x.length; i++) {
                var a = aika[i].innerHTML;
                table += "<tr><td>" +
                  "<img src="+
                    kuva[i].childNodes[0].nodeValue +
                    ">" + 
                    "</td><td>" +
                    a[11]+a[12]+a[13]+a[14]+a[15] +
                    "</td><td>" +
                    elokuva[i].childNodes[0].nodeValue +
                    "</td><td>" +
                    teatteri[i].childNodes[0].nodeValue +
                    "</td><td>" +
                    sali[i].childNodes[0].nodeValue +
                    "</td><td>" +
                    pituus[i].childNodes[0].nodeValue + " min" +
                    "</td></tr>";
          
          
          
          
              }
              document.getElementById("tabledata").innerHTML = table;
          }
          }
            }
          
          

          function maxim(){
            var xmlhttp = new XMLHttpRequest();
            
            xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1032", true);
            xmlhttp.send();
            xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
                var xmlDoc = xmlhttp.responseXML;
                var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
                var x = xmlDoc.getElementsByTagName("Show")
                var elokuva = xmlDoc.getElementsByTagName("Title");
                var teatteri = xmlDoc.getElementsByTagName("Theatre");
                var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
                var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
                var aika = xmlDoc.getElementsByTagName("dttmShowStart");
                var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
            
                for (i=0; i<x.length; i++) {
                  var a = aika[i].innerHTML;
                  table += "<tr><td>" +
                    "<img src="+
                      kuva[i].childNodes[0].nodeValue +
                      ">" + 
                      "</td><td>" +
                      a[11]+a[12]+a[13]+a[14]+a[15] +
                      "</td><td>" +
                      elokuva[i].childNodes[0].nodeValue +
                      "</td><td>" +
                      teatteri[i].childNodes[0].nodeValue +
                      "</td><td>" +
                      sali[i].childNodes[0].nodeValue +
                      "</td><td>" +
                      pituus[i].childNodes[0].nodeValue + " min" +
                      "</td></tr>";
            
            
            
            
                }
                document.getElementById("tabledata").innerHTML = table;
            }
            }
              }
            
            

            function flamingo(){
              var xmlhttp = new XMLHttpRequest();
              
              xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1013", true);
              xmlhttp.send();
              xmlhttp.onreadystatechange = function() {
              if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              
                  var xmlDoc = xmlhttp.responseXML;
                  var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
                  var x = xmlDoc.getElementsByTagName("Show")
                  var elokuva = xmlDoc.getElementsByTagName("Title");
                  var teatteri = xmlDoc.getElementsByTagName("Theatre");
                  var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
                  var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
                  var aika = xmlDoc.getElementsByTagName("dttmShowStart");
                  var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
              
                  for (i=0; i<x.length; i++) {
                    var a = aika[i].innerHTML;
                    table += "<tr><td>" +
                      "<img src="+
                        kuva[i].childNodes[0].nodeValue +
                        ">" + 
                        "</td><td>" +
                        a[11]+a[12]+a[13]+a[14]+a[15] +
                        "</td><td>" +
                        elokuva[i].childNodes[0].nodeValue +
                        "</td><td>" +
                        teatteri[i].childNodes[0].nodeValue +
                        "</td><td>" +
                        sali[i].childNodes[0].nodeValue +
                        "</td><td>" +
                        pituus[i].childNodes[0].nodeValue + " min" +
                        "</td></tr>";
              
              
              
              
                  }
                  document.getElementById("tabledata").innerHTML = table;
              }
              }
                }
              
              

function reload(){
  location.reload();
}

document.getElementById("index").addEventListener("click", reload)
document.getElementById("omena").addEventListener("click", omena)
document.getElementById("itis").addEventListener("click", itis)
document.getElementById("sello").addEventListener("click", sello)
document.getElementById("kinopalatsi").addEventListener("click", kinopalatsi)
document.getElementById("tennis").addEventListener("click", tennis)
document.getElementById("maxim").addEventListener("click", maxim)
document.getElementById("flamingo").addEventListener("click", flamingo)