$(onReady);

function onReady(){
    console.log('works')
//submit button click listener
$('#submitButton').on('click', addsValue);

}



function addsValue(){
    let firstNameEver = $('.firstName').val();
    let lastNameGreatest = $('.lastName').val();
    let employeeIdInfo = $('.employeeId').val();
    let jobTitleInfo = $('.jobTitle').val();
    let annualsalaryInfo = $('.annualSalary').val();

// let info = $('#Fri').val()
    $('#first-name').append(firstNameEver);
    $('#last-name').append(lastNameGreatest);
    $('#employee').append(employeeIdInfo);
    $('#job-title').append(jobTitleInfo);
    $('#annual-salary').append(annualsalaryInfo);

} 
// end of function that adds value to the table
