// Read Json file.
fetch('./people.json')
    .then(response => response.json())
    .then(data => {
    
        // Create container
        const container = document.createElement(`div`);
        container.id = `PeopleContainer`;
        // Loop through array in JSON and create new div for each person
        data.forEach(person=> {
            const PersonDiv = document.createElement(`div`);
            PersonDiv.ClassName = `person`;

            //Add persons data to div
            PersonDiv.innerHTML = `
            <h2> ${GetFullName(person)}</h2>
            <p>Date of birth: ${GetYearOfBirth(person)}</p>
            <p>Pets: ${GetPetsAndNames(person)}</P>
            <p>Hobby of interest: ${GetHobby(person)}</p>
            `;
            //Add person div to container
            container.appendChild(PersonDiv);
            
            //Log data to console
            console.log(GetFullName(person));
            console.log(GetYearOfBirth(person));
            console.log(GetPetsAndNames(person));
            console.log(GetHobby(person));
    });
            // Add container to HTML
            document.body.appendChild(container);
    })

    // Errors
    .catch(error => {
        console.error('Fetch Operation Could Not Be Executed.', error);
    });


    //Function to get the full name
    function GetFullName(person) {
        return `${person.FirstName} ${person.LastName}`;
    }

    //Function to get year of birth
    function GetYearOfBirth(record){
        const CurrYear = new Date().getFullYear();
        const BirthYear = CurrYear - record.Age
        return `${record.FirstName} is ${record.Age} years old, their year of birth is ${BirthYear}`
    }
    
    // Function to get information on if they have a pet, what kind, and the name
    function GetPetsAndNames(person){
        switch (person.HasPets){
            case true:
                return `${person.FirstName}  has Pets. They have a ${person.PetType} and their name is ${person.Petname}`;
                break;
            default:
                return `${person.FirstName}  does not have any pets.`;
                break;
            }
    }
    
    //Function to show their hobby of interest
    function GetHobby(person){
        return person.Hobby;
    }

    











// Test json and console works.
// function readReport(data){


//     data.ForEach(record => {
//         console.log(record.FirstName);
//         console.log(record.LastName);
//         console.log(record.Age);
//         console.log(record.Pet);
//         console.log(record.PetType);
//         console.log(record.PetName);
//         console.log(record.Hobby);

//     });
// }

// // Function to get the year of birth.
// function GetBirthYear(record){
//     const CurrYear = new Date().FullYear();
//     const BirthYear = CurrYear - record.Age
//     return `${record.FirstName} is ${record.Age} years old, their year of birth is ${BirthYear}`
// }

// Function to show what pet they have and their names.
function PetsAndNames(record){
    switch (record.HasPets){
        case true:
            return `${record.FirstName} ${record.LastName} has Pets. They have a ${PetType} and their name is ${record.Petname}`;
            break;
        default:
            return `${record.FirstName} ${record.LastName} does not have any pets.`;
            break;
        }
 }


// // Function to show their hobby of interest.
// function Hobbys (record) {
//     fetch (record.Hobby)
//     return `${record.FirstName} ${record.LastName}'s hobby of choice is ${record.Hobby}`
// }

// fetch('person.json')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(record =>{
//             console.log(GetBirthYear(record))
//             console.log(PetsAndNames(record))
//             console.log(Hobbys(record))

//         const PersonInfo = `
//         <h4> ${record.FirstName} ${record.LastName} </h4>
//         ${GetBirthYear(record)} </br>
//         ${PetsAndNames(record)} </br>
//         ${Hobbys(record)} </br>
//         `
//         document.body.innerHTML += PersonInfo
//         })
//     })


// function PrintRecords(data) {
//     data.forEach(record => {

//     });
// };


    


