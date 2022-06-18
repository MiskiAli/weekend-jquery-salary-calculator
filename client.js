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

    let employeesNew = {
        firstName: firstNameEver,
        lastName:lastNameGreatest,
        employeeId:employeeIdInfo, 
        jobTitle:jobTitleInfo, 
        annualSalary:annualsalaryInfo,
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
    alert('Employee has been deleted!', employees);
}

function monthlyTotal(){
    let total = 0;
    $('.totalMonthlyCost').empty();
    for (let employee of employees){
      total += Number(employees.annualSalary);
    }
    $('.totalMonthlyCost').append(`Total Monthly Cost: ${total / 12}`);
    
    if((total/12) >= 20000){
      $('.totalMonthlyCost').css('background-color', 'red');
    }
    
}
    // $('#first-name').empty(isDeleted);
    // $('#last-name').empty(lastNameGreatest);
    // $('#employee').empty(employeeIdInfo);
    // $('#job-title').empty(jobTitleInfo);
    // $('#annual-salary').empty(annualsalaryInfo);
//}

