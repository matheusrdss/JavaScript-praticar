var persons = [
    {itsMe: true, admin: true, name: "Matheus"},
    {itsMe: false, admin: false, name: "Nicolly"},
    {itsMe: false, admin: true, name: "Guilherme"},
    {itsMe: false, admin: false, name: "Arthur"},
    {itsMe: false, admin: true, name: "Jucelino"},
];

const organizer = (personsList) => {
    personsList.sort((a, b) => {
        if (a.itsMe === true && b.itsMe === false) {
            return-1;
        }
    });

    personsList.sort((a, b) => {
        if (a.admin === true && b.admin === false) {
            return-1;
        }
    });

    console.log(personsList);
};

organizer(persons);