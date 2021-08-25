// function films(event) {
//     let a = document.getElementById("section").dataset.films; 
//     let spoilBatman = [["JOCKER MEURT"], ["BATMAN MEURT"], ["HARLEYQUEEN NE MEURT PAS"]];
//     let spoilKillBill = [["ELLE AIME TUER"], ["ELLE A PERDU SON ENFANT"], ["BILL C'EST SON EX"]];
//     let B = getElementByclass("categorie").dataset.films;
//     if (event == a) {
//         let art = document.getElementById("section").createElement("article");
//         let artP = this.article.createElement("p");
//         let contentP = this.p.textNode(B)

//     }
    
// }

document.getElementById("bouton").addEventListener("click", function (e){ 
    e.preventDefault();
           document.getElementById("section").innerHTML="films";
     let spoilBatman = ["JOCKER MEURT", "BATMAN MEURT", "HARLEYQUEEN NE MEURT PAS"];
     let spoilKillBill = ["ELLE AIME TUER", "ELLE A PERDU SON ENFANT", "BILL C'EST SON EX"];
     let spoilLesIndestructibles = ["JACK-JACK EST DANGEREUX", "VIOLETTE EST AMOIUREUSE", "BOB TROMPE SA FEMME"];
     let filmsChoix = ['les indestructibles', 'kill bill', 'batman'];
     let f = filmsChoix.Math.floor(Math.random * filmsChoix.length);
     if (filmsChoix < 3) {
  document.getElementById("section").innerHTML= f;
     }
    


 });