//Q1)

console.log("0 || 1 = "+(0 || 1));

console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));

//Q2
//Create a java script or angularjs array of objects for student with name,age,rollno,subject,mark attributes. 
//find the avarage mark and grade.

class Subject{
    constructor(name,mark)
    {
        this.name = name;
        this.mark = mark;
    }
}

class Student{
    constructor(name,age,rollno,subject){
        this.name = name;
        this.age = age;
        this.rollno = rollno;
        this.subject = subject;
    }

    average()
    {
        let sum = 0;
        this.subject.forEach(element => {
            sum += element.mark;
        });
        return Math.trunc(sum / this.subject.length);
    }
}

class Ranking{
    constructor(students)
    {
        this.students = students;
    }
    
    ranking()
    {
        this.students.sort(function(a,b){return a.average()<=b.average()});
        return this.students;
    }
}
let sub1 = new Subject("English",85);
let sub2 = new Subject("Maths",95);
let sub3 = new Subject("Science",92);
let sub4 = new Subject("English",90);
let sub5 = new Subject("Maths",90);
let sub6 = new Subject("Science",90);
let sub7 = new Subject("English",50);
let sub8 = new Subject("Maths",70);
let sub9 = new Subject("Science",80);
let sub10 = new Subject("English",90);
let sub11 = new Subject("Maths",100);
let sub12 = new Subject("Science",95);

let student1subs = [sub1,sub2,sub3];
let student2subs = [sub4,sub5,sub6];
let student3subs = [sub7,sub8,sub9];
let student4subs = [sub10,sub11,sub12];

let student1 = new Student("Murali",22,100,student1subs);
let student2 = new Student("Praba",23,101,student2subs);
let student3 = new Student("Karan",24,102,student3subs);
let student4 = new Student("Babu",21,103,student4subs);

console.log(student1.average());
console.log(student2.average());
console.log(student3.average());
console.log(student4.average());

let students = [student1,student2,student3,student4];
let rank = new Ranking(students);
let stuRanking = rank.ranking();

console.log("Name", "Rank");
for(var i in stuRanking)
{
    stuRanking[i].rank = Number(i)+1;
    console.log(stuRanking[i].name, stuRanking[i].rank);
}

//Q3

//create array having years, find the year is leap year or not, console the output.

let years = [1999,2000,2004,2005];
class LeapYear
{
    constructor(year)
    {
        this.year = year;
        this.leap = this.leapYear();
    }
    leapYear()
    {
        return ((this.year % 4 == 0) && (this.year % 100 != 0)) || (this.year % 400 == 0);
    }
}
let values ;
console.log("Year","Leap or not");
for(i in years)
{
    //values.push(LeapYear(years[i]));
    let obj = new LeapYear(years[i]);
    console.log(obj.year,obj.leap);
}

//Q4

//var numbers =[12,10,15,11,14,13,16]; sort the array.(Don't use sort function)

var numbers = [12,10,15,11,14,13,16];

for (var i=0;i<numbers.length;i++)
{
    for(var j=i+1;j<numbers.length;j++)
    {
        if(numbers[i]> numbers[j])
        {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("Sorted numbers");
console.log(numbers);

//Q5

//Generate the blow output using nested for loop

//*

//**

//***

//****

//*****

let rows = 5;

for(let i=1;i<=rows;i++)
{
  let s = '*';
  for(let j=1;j<i;j++)
  {
        s = s + '*';
  }
  console.log(s);
}

//Q6

//Take values of length and breadth of a rectangle from user and check if it is square or not.

/*const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

let length;
let breadth;
rl.setPrompt('Give the length> ');
rl.prompt();
rl.on('line', (input) => {
    length = Number(input);
    console.log("length" + length);
    //rl.setPrompt("Give the breadth");
    //rl.prompt();
  });
  rl.on('line',(input)=>{
    breadth = Number(input);
    if(length === breadth)
        console.log("The given values are square");
    else
    {
        console.log("The given values are rectangle");
    }
    rl.close();
  });
*/

var prompt = require('prompt');

var prompt_attributes = [
    {
        // The fist input text is assigned to length variable.
        name: 'length',
        description: 'length of rectangle'
    },
    {
        // The second input text is assigned to breadth variable.
        name: 'breadth',
        description: 'breadth of rectangle'
    }
];

prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        // Get user input from result object.
        var length = result.length;
        var breadth = result.breadth;
        
        if(length === breadth)
        console.log('square');
        else
        console.log('rectangle');
    }
});

//prompt.stop();
