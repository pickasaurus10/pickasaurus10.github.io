function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
    function gennaem() {
    var name = document.getElementById("firstName").value;
    if (document.querySelector('.genName').checked) {
      if (document.querySelector('.male').checked) //male names
      { var listOfirstNames = [" ", "John", "David", "Michael", "James", "Robert", "William", "Joseph", "Thomas", "Charles", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Kenneth"]; }
      if (document.querySelector('.female').checked) //female names
      { var listOfirstNames = [" ", "Cassy", "Tracy", "Linda", "Sam", "Emily", "Olivia", "Ava", "Isabella", "Sophia", "Mia", "Charlotte", "Harper", "Amelia", "Evelyn", "Abigail", "Ella", "Sofia", "Luna", "Chloe"]; }
      if (document.querySelector('.neither').checked) //neither names
      { var listOfirstNames = [" ", "Alex", "Ashley", "Casey", "Dakota", "Jamie", "Jayden", "Kai", "Riley", "Rowan", "Taylor", "Blake", "Cameron", "Drew", "Harper", "Logan", "Quinn", "River", "Skylar", "Zander"]; }
    var firstnaem = listOfirstNames[randomIntFromInterval(1,10)];
    
  } else {
      firstnaem = document.getElementById("firstName").value;
  }
  var listO1lastNames = ["Moon", "Star", "Dust", "Iron", "Forge", "Shadow", "Sun", "Storm", "Frost", "Night", "Ember", "Wild", "Heart", "Silver", "Hand", "Sky", "Stone", "Blood", "Moon", "Dragon", "Heart", "Eagle", "Valkyrie", "Grim", "Fang", "Bane", "Caller", "Walker", "Breaker", "Fighter", "Hunter", "Scribe", "Guardian", "Seeker", "Whisperer", "Wanderer", "Watcher", "Keeper", "Healer", "Shaper", "Chaser", "Whisperer", "master", "Stalker", "Conjurer"]; 
  var firstlastname = listO1lastNames[randomIntFromInterval(0,25)];
  var secondlastname =  listO1lastNames[randomIntFromInterval(0,44)];
  
  document.getElementById("name").innerHTML = firstnaem + " " + firstlastname + secondlastname;
}
  
    function genback() {
        var birthplacelist = ["I was born at home","I was born at a home of a family friend","I was born in a Carrage", "I was born in a barn","I was born in a shed","I was born in a cave","I was born in a Field","I was born in a forest","I was born in a secred temple","I was born on a battlefield","I was born on the streets","I was born in an inn", "I was born in the sewer", "I was born abourd a boat out at sea","I was born in a prison", "I was born in a labratory","I was born in the Feywild","I was born in the Shadowfell"]
        var rand = randomIntFromInterval(0,1)
        if (rand == 1) {
            var birthplace = birthplacelist[randomIntFromInterval(1,17)]
        } else {
            var birthplace = birthplacelist[0]
        }
         
        
        var parentslist = [" with my parents, but they soon later abandoned me.",", and an institution took me in.",", and then later a temple took me in.",", and I was sent to go grow up in an Orphanage.",", and a Guardian took me in.", " and I was raised by my uncle and aunt."," and I was raised by my grandparents."," and I was raised by my adopted family of a differant race.", " and was raised by my single father.", " and was raised by my single mother.", " and was raised by my parents."]
        var rand = randomIntFromInterval(0,2)
        if (rand == 0) {
            var parents = parentslist[10]
        } else {
            var parents = parentslist[randomIntFromInterval(0,9)]
        }
        
      document.getElementById("background").innerHTML = birthplace + parents;
    }
