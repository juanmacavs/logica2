
var alumno1 = {
    name : "Roberto",
    apellido : "Gomez",
    edad : 35,
    fechaNa : 22/02/1986,
    mate : [5,7,9],
    Hist : [6,9,10],
    Leng : [4,2,6],
    Bio : [6,8,4],
}

var alumno2 = {
    name : "Carlos",
    apellido : "Quitero",
    edad : 25,
    fechaNa : 22/06/1996,
    mate : [6,9,4],
    Hist : [4,5,3],
    Leng : [5,6,7],
    Bio : [2,3,7],
}

var alumno3 = {
    name : "Lalo",
    apellido : "Mir",
    edad : 43,
    fechaNa : 11/04/1977,
    mate : [6,6,4],
    Hist : [2,5,3],
    Leng : [4,6,8],
    Bio : [4,3,6],
}

document.write("<br>")
document.write("Notas de Cada Materia")
document.write("<br>")


var curso = [alumno1, alumno2, alumno3]
for (var i = 0; i <curso.length; i++){
    var alumno = curso[i];
    document.write(alumno.name, " ", alumno.apellido, "</br>");
    document.write(" Nota Trimestre Matematica: ", alumno.mate, "</br>");
    document.write(" Nota Trimestre Historia: ", alumno.Hist, "</br>");
    document.write(" Nota Trimestre Lengua: ", alumno.Leng, "</br>");
    document.write(" Nota Trimestre Biologia: ", alumno.Bio, "</br>");
}

///------------------>resumido arriva<-------------///
/*document.write("</br>");
var matematica = [alumno1, alumno2, alumno3]
for (var i = 0; i< matematica.length; i++){
    var alumno = matematica[i];
    document.write(alumno.apellido , " Nota Trimestre Matematica: ", alumno.mate, "</br>");
}
document.write("</br>");
var historia = [alumno1, alumno2, alumno3]
for (var i = 0; i< historia.length; i++){
    var alumno = historia[i];
    document.write(alumno.apellido , " Nota Trimestre Historia: ", alumno.Hist, "</br>");
}
document.write("</br>");
var lengua = [alumno1, alumno2, alumno3]
for (var i = 0; i< lengua.length; i++){
    var alumno = lengua[i];
    document.write(alumno.apellido , " Nota Trimestre Lengua: ", alumno.Leng, "</br>");
}
document.write("</br>");
var biologia = [alumno1, alumno2, alumno3]
for (var i = 0; i< biologia.length; i++){
    var alumno = biologia[i];
    document.write(alumno.apellido , " Nota Trimestre Biologia: ", alumno.Bio, "</br>");
}
document.write("</br>")**/
document.write("<br>")
document.write("Promedio por materia")
document.write("<br>")



var Promedio1 = [alumno1]
for (var i = 0; i <Promedio1.length; i++){
    var alumno = Promedio1[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador1 = 0;
    var acumulador1 = 0;
    var contadorH1 = 0;
    var acumuladorH1 = 0;
    var contadorL1 = 0;
    var acumuladorL1 = 0;
    var contadorB1 = 0;
    var acumuladorB1 = 0;
    
    alumno.mate.forEach(e=>{
        if (e>0){
            contador1+=1
            acumulador1+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH1+=1
            acumuladorH1+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL1+=1
            acumuladorL1+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB1+=1
            acumuladorB1+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador1/contador1);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH1/contadorH1);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL1/contadorL1);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB1/contadorB1);
document.write("<br>")

var Promedio2 = [alumno2]
for (var i = 0; i <Promedio2.length; i++){
    var alumno = Promedio2[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador2 = 0;
    var acumulador2 = 0;
    var contadorH2 = 0;
    var acumuladorH2 = 0;
    var contadorL2 = 0;
    var acumuladorL2 = 0;
    var contadorB2 = 0;
    var acumuladorB2 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contador2+=1
            acumulador2+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH2+=1
            acumuladorH2+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL2+=1
            acumuladorL2+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB2+=1
            acumuladorB2+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador2/contador2);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH2/contadorH2);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL2/contadorL2);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB2/contadorB2);
document.write("<br>")

var Promedio3 = [alumno3]
for (var i = 0; i <Promedio3.length; i++){
    var alumno = Promedio3[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contador3 = 0;
    var acumulador3 = 0;
    var contadorH3 = 0;
    var acumuladorH3 = 0;
    var contadorL3 = 0;
    var acumuladorL3 = 0;
    var contadorB3 = 0;
    var acumuladorB3 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contador3+=1
            acumulador3+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorH3+=1
            acumuladorH3+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorL3+=1
            acumuladorL3+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorB3+=1
            acumuladorB3+=j;
        }
    }) 
}
document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Matematica: ", acumulador3/contador3);
document.write("<br>")
document.write("Promedio Historia: ", acumuladorH3/contadorH3);
document.write("<br>")
document.write("Promedio Lengua: ", acumuladorL3/contadorL3);
document.write("<br>")
document.write("Promedio Biologia: ", acumuladorB3/contadorB3);
document.write("<br>")

document.write("<br>")
document.write("Mejor alumno segun promedio")
document.write("<br>")
var PormeAlumno1 = [alumno1]
for (var i = 0; i <PormeAlumno1.length; i++){
    var alumno = PormeAlumno1[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP1 = 0;
    var acumuladorP1 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP1+=1
            acumuladorP1+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP1+=1
            acumuladorP1+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP1+=1
            acumuladorP1+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP1+=1
            acumuladorP1+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno1.name, " " , alumno1.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP1/contadorP1);

var PormeAlumno2 = [alumno2]
for (var i = 0; i <PormeAlumno2.length; i++){
    var alumno = PormeAlumno2[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP2 = 0;
    var acumuladorP2 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP2+=1
            acumuladorP2+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP2+=1
            acumuladorP2+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP2+=1
            acumuladorP2+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP2+=1
            acumuladorP2+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP2/contadorP2);

var PormeAlumno3 = [alumno3]
for (var i = 0; i <PormeAlumno3.length; i++){
    var alumno = PormeAlumno3[i];
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
    var contadorP3 = 0;
    var acumuladorP3 = 0;
    alumno.mate.forEach(e=>{
        if (e>0){
            contadorP3+=1
            acumuladorP3+=e;
        }
    })
    alumno.Hist.forEach(l=>{
        if (l>0){
            contadorP3+=1
            acumuladorP3+=l;
        }
    }) 
    alumno.Leng.forEach(m=>{
        if (m>0){
            contadorP3+=1
            acumuladorP3+=m;
        }
    }) 
    alumno.Bio.forEach(j=>{
        if (j>0){
            contadorP3+=1
            acumuladorP3+=j;
        }
    }) 
}

document.write("<br>")
document.write( alumno.name, " " , alumno.apellido, "</br>", "Promedio Año Alumno: ", acumuladorP3/contadorP3);

document.write("<br>")
document.write("Recuperatoros Por Materia")
document.write("<br>")

var pasanopasa = [alumno1]
for (var i = 0; i <pasanopasa.length; i++){
    var alumno = pasanopasa[i];
    var ProMedio = acumulador1/contador1;
    var ProMedioH = contadorH1/acumuladorH1;
    var ProMedioL = contadorL1/acumuladorL1;
    var ProMedioB = contadorB1/acumuladorB1;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")

        if(ProMedio >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}
document.write("<br>")
document.write("<br>")

var pasanopasa = [alumno2]
for (var i = 0; i <pasanopasa.length; i++){
    var alumno = pasanopasa[i];
    var ProMedio = acumulador2/contador2;
    var ProMedioH = contadorH2/acumuladorH2;
    var ProMedioL = contadorL2/acumuladorL2;
    var ProMedioB = contadorB2/acumuladorB2;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")

        if(ProMedio >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}
document.write("<br>")
document.write("<br>")

var pasanopasa = [alumno3]
for (var i = 0; i <pasanopasa.length; i++){
    var alumno = pasanopasa[i];
    var ProMedio = acumulador3/contador3;
    var ProMedioH = contadorH3/acumuladorH3;
    var ProMedioL = contadorL3/acumuladorL3;
    var ProMedioB = contadorB3/acumuladorB3;
    var Promate = alumno.mate;
    var ProHist = alumno.Hist;
    var ProLeng = alumno.Leng;
    var ProBio = alumno.Bio;
document.write("<br>")
document.write(alumno.name, " ", alumno.apellido, " ", "</br>", "Matematicas" )
document.write("<br>")

        if(ProMedio >= 6){
            document.write("Matematica Aprovada")
        }
        else if (ProMedio <= 4){
             document.write("Matematica a Marzo")
        }
        else if (ProMedio < 6 || Promate < 6 ){
             document.write("Matemarica a Diciembre")
        }
        else if (ProMedio >= 6 && Promate < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Historia" )
document.write("<br>")
        if(ProMedioH >= 6){
            document.write("Historia Aprovada")
        }
        else if (ProMedioH <= 4){
             document.write("Historia a Marzo")
        }
        else if (ProMedioH < 6 || ProHist < 6 ){
             document.write("Historia a Diciembre")
        }
        else if (ProMedioH >= 6 && ProHist < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Lengua" )
document.write("<br>")
        if(ProMedioL >= 6){
            document.write("Lengua Aprovada")
        }
        else if (ProMedioL <= 4){
             document.write("Lengua a Marzo")
        }
        else if (ProMedioL < 6 || ProLeng < 6 ){
             document.write("Lengua a Diciembre")
        }
        else if (ProMedioL >= 6 && ProLeng < 6 ){
             document.write("Se lleva Todos los trimestres menores a 6")
        }
document.write("<br>")
document.write( "</br>", "Biologia" )
document.write("<br>")
        if(ProMedioB >= 6){
            document.write("Biologia Aprovada")
        }
        else if (ProMedioB <= 4){
            document.write("Biologia a Marzo")
        }
        else if (ProMedioB < 6 || ProBio < 6 ){
            document.write("Biologia a Diciembre")
        }
        else if (ProMedioB >= 6 && ProBio < 6 ){
            document.write("Se lleva Todos los trimestres menores a 6")
}
}