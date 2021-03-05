
//var x= document.getElementById('Age').value;
//if (x<50000)
//document.write('basic salary');
//if (x>50000)
//document.write('huge salary');

document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();

    var x= document.getElementById('Salary').value;
    var y=document.getElementById('output');
    if (x<50000){
        y.append('Basic salary');
    }
    else if (x<200000){
        y.append('Mid Earner');
    
    }
    else{
        y.append('High Earner');
        y='High Earner'
    }

    
    
})
