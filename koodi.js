//Olemme luoneet jokaiselle elokuvateatterille oman funktion, jotka ovat XML-tiedoston URL-osoitetta lukuunottamatta samanlaisia.//
//Tämän takia kommentoimme vain ensimmäisen funktion, koska muut toimivat täysin samalla tavalla//
//Tämän tiedoston lopussa on EventListenerit, joista kaksi on kommentoitu.//

//Luodaan funktio//
function omena(){
//Tehdään haku// 
var xmlhttp = new XMLHttpRequest();
//Haetaan Espoon Omenan Finnkinon XML-tiedosto//
xmlhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/?area=1039", true);
xmlhttp.send();
//Aloitetaan vastauksen parsiminen//
xmlhttp.onreadystatechange = function() {
if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //Tallennetaan haettu XML-tiedosto muuttujaan xmlDoc//
    var xmlDoc = xmlhttp.responseXML;
    //Luodaan muuttuja "table", johon lisätään sivulla näkyvän taulukon "otsikkorivi"//
    var table = "<tr><th></th><th>Aika</th><th>Elokuva</th><th>Teatteri</th><th>Sali</th><th>Kesto (min)</th></tr>";
    //Luodaan muuttuja "x", johon lisätään haetusta XML-tiedostosta kaikki "Show" tagit. Jokainen Show tagi sisältää yhden elokuvan tiedot.//
    var x = xmlDoc.getElementsByTagName("Show")
    //Luodaan muuttuja "elokuva", johon lisätään haetusta XML-tiedostosta kaikki "Title" tagit. "Title" tagi sisältää elokuvan nimen.// 
    var elokuva = xmlDoc.getElementsByTagName("Title");
    //Luodaan muuttuja "teatteri", johon lisätään haetusta XML-tiedostosta kaikki "Theatre" tagit. Theatre tagi sisältää elokuvateatterin nimen.//
    var teatteri = xmlDoc.getElementsByTagName("Theatre");
    //Luodaan muuttuja "sali", johon lisätään haetusta XML-tiedostosta kaikki "TheatreAuditorium" tagit. TheatreAuditorium tagi sisältää elokuvateatterin salin numeron ja/tai nimen//
    var sali = xmlDoc.getElementsByTagName("TheatreAuditorium");
    //Luodaan muuttuja "pituus", johon lisätään haetusta XML-tiedostosta kaikki "LengthInMinutes" tagit. LengthInMinutes tagi sisältää elokuvan pituuden minuutteina//
    var pituus = xmlDoc.getElementsByTagName("LengthInMinutes");
    //Luodaan muuttuja "aika", johon lisätään haetusta XML-tiedostosta kaikki "dttmShowStart" tagit. dttmShowStart tagi sisältää elokuvan alkamisajankohdan.//
    var aika = xmlDoc.getElementsByTagName("dttmShowStart");
    //Luodaan muuttuja "kuva", johon lisätään haetusta XML-tiedostosta kaikki "EventSmallImagePortrait" tagit. EventSmallImagePortrait tagi sisältää elokuvan kansikuvan URL-osoitteen.//
    var kuva = xmlDoc.getElementsByTagName("EventSmallImagePortrait");
    //Luodaan for-silmukka, joka pyörii niin kauan, että jokaisen elokuvan tiedot on lisätty. Silmukka lisää yhden elokuvan tiedot "table" muuttujaan siten,//
    //että yhden elokuvan tiedot ovat samalla rivillä, jonka jälkeen luodaan uusi rivi.//  
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
    //Lisää "table" muuttujaan for-silmukalla lisätyt tiedot "tabledata" nimiseen tyhjään taulukkoon.//
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
              
              
//Luodaan funktio, joka päivittää sivun.//
function reload(){
  location.reload();
}
//Haetaan button, jonka id on "index"(Etusivu). Lisätään EventListener, joka ajaa funktion "reload", kun "index" nappia painetaan. Napin painallus päivittää sivun, jolloin minkään teatterin aikataulua ei näytetä.//
document.getElementById("index").addEventListener("click", reload)
//Haetaan button, jonka id on "omena". Lisätään EventListener, joka ajaa funktion "omena", kun "omena" nappia painetaan.(Eli ajetaan Espoon Omenan Finnkinon tiedot hakeva ja taulukkoon lisäävä funktio silloin kun sivulla painetaan siihen viittaavaa nappia.)//
//Sama periaate muidenkin buttoneiden osalta.//
document.getElementById("omena").addEventListener("click", omena)
document.getElementById("itis").addEventListener("click", itis)
document.getElementById("sello").addEventListener("click", sello)
document.getElementById("kinopalatsi").addEventListener("click", kinopalatsi)
document.getElementById("tennis").addEventListener("click", tennis)
document.getElementById("maxim").addEventListener("click", maxim)
document.getElementById("flamingo").addEventListener("click", flamingo)
