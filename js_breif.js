
// EXERCISE 1
let variable = 0;

while(variable<=10){
    console.log(variable);
    variable++;
}

// EXERCICE 2
let EX2_1 = 0;
let EX2_2 = 6;
let EX2_mult = 0;

while(EX2_1<=20){
    EX2_mult = (EX2_1 * EX2_2);
    console.log(EX2_mult);
    EX2_1++; 
}

// EXERCICE 3
let EX3_1 = 100;
let EX3_2 = 6;
let EX3_mult = 0;

while(EX3_1!==10){
    EX3_mult + (EX3_1 * EX3_2);
    console.log(EX3_mult);
    EX3_1--;
}

// EXERCICE 4
let EX4_1 = 0;
while(EX4_1 !==10){
    console.log(EX4_1);
    EX4_1+=0.5;
}

// EXERCICE 5
let EX5_1;
for(EX5_1 = 0; EX5_1<=15; EX5_1++){
    console.log("On y arrive presque.");
}

// EXERCICE 6
let EX6_1;
for(EX6_1 = 20; EX6_1>0; EX6_1--){
    console.log("C'est presque bon.");
}

// EXERCICE 7
let EX7_1;
for(EX7_1 = 0; EX7_1<=100; EX7_1+=15){
    console.log("On tient le bon bout.");
}

// EXERCICE 8
let EX8_1;
for(EX8_1 = 200; EX8_1>0; EX8_1-=12){
    console.log("Enfin !!!!.");
}


// LES FONCTIONS ----------------------

// FONCTION 1
let returnTrue = ()=>{
    return true;
}


// FONCTION 2
let string = (msg)=>{
    return console.log(msg);
}


// FONCTION 3
let twoStrings = (msg1, msg2)=>{
    return console.log((msg1+ " " + msg2));
}

// FONCTION 4
let greater = (num1, num2)=>{

    if(num1>num2){
        console.log(num1 + " is greater than" + num2);
    }
    else if(num1<num2){
        console.log(num1 + " is lesser than" + num2);
    }
    else{
        console.log("numbers are equal!");
    }
}

// FONCTION 5
let stringAndNumber = (num, msg)=>{
    return console.log((num+ " " + msg));
}

// FONCTION 6
let welcomeMsg = (name, prename, age)=>{
    console0.log("Hello " + name + prename + " you are " + age + " years!");
}

// FONCTION 7
let gender = (age, gender)=>{
    
    if(age >= 18){
        if(gender == 'homme'){
            console.log("Vous êtes un homme et vous êtes majeur");
            }
            else{
            console.log("Vous êtes une femme et vous êtes majeur");
        }
    }
    else if(age<18){
        if(gender == 'homme'){
            console.log("Vous êtes un homme et vous êtes mineur");
            }
            else{
            console.log("Vous êtes une femme et vous êtes mineur");
            }
    }
}

// FONCTION 7
let sum = (n1, n2, n3)=>{
    console.log(n1 + n2 + n3);
}


// LES TABLEAUX ----------------------

// TABLEAU 1
let tableau_1 = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"];

console.log(tableau_1[2]);

console.log(tableau_1[5]);

console.log(tableau_1[2]);

console.log(tableau_1[10]);

tableau_1[7] = "oût";

console.log(tableau_1);

tableau_1.push("Courgette");
