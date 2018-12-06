//Q7

//A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
//Ask user for their salary and year of service and print the net bonus amount.

var prompt2 = require('prompt');
var prompt_salary = [
    {
        // The fist input text is assigned to length variable.
        name: 'salary',
        description: 'Please provide your salary'
    },
    {
        // The second input text is assigned to breadth variable.
        name: 'service',
        description: 'Please provide your service in years'
    }
];

prompt2.start();

// Prompt and get user input then display those data in console.
prompt2.get(prompt_salary, function (err, result) {
    if (err) {
        console.log(err);
        return 1;
    }else {
        // Get user input from result object.
        var salary = result.salary;
        var service = result.service;
        var bonus;
        if(service>=5)
        {
            bonus =  5 * Math.floor(salary/100);
            total = Number(salary) + Number(bonus);
        }
        else
        {
            bonus = 0;
            total = salary;
        }
        console.log('bonus..' + bonus);
        console.log("total.." + total);
    }
});