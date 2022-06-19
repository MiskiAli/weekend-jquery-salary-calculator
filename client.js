$(document).ready(onReady);

function onReady(){
    console.log('works')
//submit button click listener
$(document).on('click', '#submitButton', addsValue);
// delete button click listner
$(document).on('click', '.deleteButton', takesValue);
}

let employees = [];

function addsValue(){

    let firstNameEver = $('.firstName');
    let lastNameGreatest = $('.lastName');
    let employeeIdInfo = $('.employeeId');
    let jobTitleInfo = $('.jobTitle');
    let annualsalaryInfo = $('.annualSalary');

    // added new employee as object
    let employeesNew = {
        firstName: firstNameEver.val(),
        lastName:lastNameGreatest.val(),
        employeeId: Number (employeeIdInfo.val()), 
        jobTitle:jobTitleInfo.val(), 
        annualSalary: Number (annualsalaryInfo.val()),
    }
    // push to dom
    employees.push(employeesNew);

    $('tbody').append(`
<tr>
        <td>${firstNameEver.val()}</td>
        <td>${lastNameGreatest.val()}</td>
        <td>${employeeIdInfo.val()}</td>
        <td>${jobTitleInfo.val()}</td>
        <td>${annualsalaryInfo.val()}</td>
        <td><button class="deleteButton">delete</button></td>
    </tr>
    `);

    $('.firstName').val('');
    $('.lastName').val('');
    $('.employeeId').val('');
    $('.jobTitle').val('');
    $('.annualSalary').val('');
    
    monthlyTotal();
    
}


//     $('#first-name').append(firstNameEver);
//     $('#last-name').append(lastNameGreatest);
//     $('#employee').append(employeeIdInfo);
//     $('#job-title').append(jobTitleInfo);
//     $('#annual-salary').append(annualsalaryInfo);


// end of function that adds value to the table

function takesValue(){

    let tr =$(this).parents('tr');
    tr.remove();
}

// calculate 
function monthlyTotal(){
    let total = 0;

    $('.totalMonthlyCost').empty();
    for (let employeesNew of employees){

    total += employeesNew.annualSalary;
    total /= 12
    }

    $('.totalMonthlyCost').append(`Total Monthly Cost: ${total /= 12}`);
    // $('.totalMonthlyCost').text(total);

// turning it red if it goes over 20k
    if ((total /= 12) >= 20000) {
    $('.totalMonthlyCost').css('background-color', 'red');
    }

}
    // $('#first-name').empty(isDeleted);
    // $('#last-name').empty(lastNameGreatest);
    // $('#employee').empty(employeeIdInfo);
    // $('#job-title').empty(jobTitleInfo);
    // $('#annual-salary').empty(annualsalaryInfo);
//}

