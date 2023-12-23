const data = async () => {
    const response = await fetch('http://localhost:3000/api/clients');
    const clientsList = await response.json();

    return clientsList;
}

const createStudent = async ({name, lastName, surname, contacts}) => {
    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            lastName,
            surname,
            contacts
        })
    });

    const client = await response.json();

    return client
}

const changeStudent = async ({id, name, lastName, surname, contacts}) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            name,
            lastName,
            surname,
            contacts
        })
    });

    const client = await response.json();

    return client
}

const deleteStudent = async ({id}) => {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE'
    })
}

export {data, createStudent, changeStudent, deleteStudent}
