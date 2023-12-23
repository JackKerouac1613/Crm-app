const validation = ({name, surname, contacts}) => {
    const error = {
        name: 'Имя должно содержать не менее 4-х символов',
        surname: 'Фамилия должна содержать не менее 2-х и не более 15-ти символов',
        phone: 'Телефон должен содержать не менее 12-ти символов',
        email: 'Email должен содержать символ "@"',
        vk: 'Vk должен содержать символ "@" в начале строки'
    }

    if(surname.length <= 3) {
        throw new Error(error.surname)
    }

    if(name.length <= 3) {
        throw new Error(error.name)
    }

    contacts.forEach(contact => {
        if(contact.value === 'Телефон') {
            if(contact.type.length !== 12) throw new Error('Телефон должен содержать не менее 12-ти символов')
            else return true
        }

        if(contact.value === 'Email') {
            if(contact.type.includes('@') === false) throw new Error(error.email)
            else return true
        }

        if(contact.value === 'Vk') {
            if(contact.type[0] !== '@') throw new Error(error.vk)
            else return true
        }
    })
}

export default validation;
