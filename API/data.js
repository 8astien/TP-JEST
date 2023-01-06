import { faker } from '@faker-js/faker';


export function createUser() {
    const id = faker.datatype.number({ min: 100 })
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);
    const registeredAt = faker.date.between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')

    return {
        'id': id,
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'registeredAt': registeredAt
    }
}

export let car = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1969
};

export let years = [1969, 1981, 1998, 2008]

export let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'