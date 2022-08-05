var topper = [
    {
        srno: '1',
        name: 'sonam',
        age: '25',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '20000'
    },
    {
        srno: '2',
        name: 'Shailesh',
        age: '29',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '50000'
    },
    {
        srno: '3',
        name: 'aakansha',
        age: '22',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '30000'
    },
    {
        srno: '4',
        name: 'Ritesh',
        age: '21',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '40000'
    },
    {
        srno: '5',
        name: 'sharu',
        age: '20',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '20000'
    },
    {
        srno: '6',
        name: 'sapna',
        age: '21',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '10000'
    },
    {
        srno: '7',
        name: 'poonam',
        age: '24',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '20000'
    },
    {
        srno: '8',
        name: 'diksha',
        age: '23',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '30000'
    },
    {
        srno: '9',
        name: 'pooja',
        age: '21',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '40000'
    },
    {
        srno: '10',
        name: 'komal',
        age: '22',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '20000'
    },
    {
        srno: '11',
        name: 'vikas',
        age: '23',
        training: 'Full Stack Development',
        Attendence: '100%',
        performance: 'Training not yet completed',
        salary: '10000'
    },
]
var list = '';
for (var i = 0; i < topper.length; i++) {
    list += '<tr><td>' + topper[i].srno + '</td><td>' + topper[i].name + '</td><td>' + topper[i].age + '</td><td>' + topper[i].training + '</td><td>' + topper[i].Attendence + '</td><td>' + topper[i].performance + '</td><td>' + topper[i].salary + '</td></tr>'
}
document.getElementById('data').innerHTML = list;