
window.onload = function()
{
    document.querySelector('#update').addEventListener('click', function(event) {
        event.preventDefault();
    const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthday;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
});
    document.querySelector('#clean').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('birthdayOutput').innerText = '';
});
    
};
