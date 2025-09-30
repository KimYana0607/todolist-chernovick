import { test, expect } from "vitest"
import {
    UserWithBooksType, upgradeUserLaptop, makeHairStyle, UserType, UserWithLaptopType,
    moveUserToOtherHouse, addNewBooksToUser, updateBook, removeBook, UserWithCompaniesType, updateCompanyTitle, updateCompanyTitle2
} from "./10_01"

test("reference type test", () => {
    let user: UserType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
    }

    const awesomeUser = makeHairStyle(user, 2)

    // исходный объект не изменился
    expect(user.hair).toBe(32)
    // новый объект с уменьшенным hair
    expect(awesomeUser.hair).toBe(16)
    // ссылка на address та же
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
    }

    const movedUser = moveUser(user, "Kiev")

    // movedUser — новый объект
    expect(user).not.toBe(movedUser)
    // адрес у нового объекта другой
    expect(user.address).not.toBe(movedUser.address)
    // город изменён
    expect(movedUser.address.city).toBe("Kiev")
})

test("upgrade laptop to mac", () => {
    let user: UserWithLaptopType = {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(userCopy.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("Zenbook")
})

test("upgrade laptop to mac", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(userCopy.books).toBe(userCopy.books)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)
})

test("add new books to user", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')
})

test("update js to ts", () => {
    let user: UserWithLaptopType & UserWithBooksType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

// test("remove js book", () => {
//     let user: UserWithLaptopType & UserWithBooksType= {
//         name: "Dimych",
//         hair: 32,
//         address: {
//             city: "Minsk",
//             house: 12,
//         },
//         laptop: {
//             title: "Zenbook",
//         },
//         books: ['css', 'html', 'js', 'react']
//     }
//
//     const userCopy = removeBook(user, 'js')
//
//     expect(user).not.toBe(userCopy)
//     expect(user.laptop).toBe(userCopy.laptop)
//     expect(user.address).toBe(userCopy.address)
//     expect(user.books).not.toBe(userCopy.books)
//     expect(userCopy.books[2]).toBe('react')
// })

test("change company", () => {
    let user: UserWithLaptopType & UserWithCompaniesType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
        companies: [{id: 1, title: 'Eпам'}, {id: 2, title: 'Incubator'}]
    }

    const userCopy = updateCompanyTitle(user, 1, 'Epam')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('Epam')
})

test("update company", () => {
    let user: UserWithLaptopType & UserWithCompaniesType= {
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "Zenbook",
        },
    }

    let companies = {
        'Dimych': [{id: 1, title: 'Eпам'}, {id: 2, title: 'Incubator'}],
        'Artem': [{id: 2, title: 'Incubator'}]
    }
    let companyCopy = {...companies}
    const copy = updateCompanyTitle2(companies, 'Dimych',1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies.Dimych)
    expect(copy['Artem']).toBe(companies.Artem)
    expect(copy['Dimych'][0].title).toBe('Epam')
})
