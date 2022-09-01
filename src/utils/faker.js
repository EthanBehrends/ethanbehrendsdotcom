import { faker } from "@faker-js/faker"

const generateFakeUser = () => ({
    name: faker.name.findName(),
    email: faker.internet.email()
})

export function generateFakeUsers(num = 1) {
    console.log(num)
    return Array.from({length: num}).map(generateFakeUser)
}