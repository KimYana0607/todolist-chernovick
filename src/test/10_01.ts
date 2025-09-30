export type UserType = {
    name: string;
    hair: number;
    address: {city: string, house: number};
}

export type LaptopType = {
    title: string;
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType;
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}
 type CompanyType = {id: number, title: string}

export type UserWithCompaniesType = {
    companies: Array<CompanyType>

}
export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power,
    }
    return copy
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title
        }
    }
}

export function addNewBooksToUser(u: UserWithBooksType & UserWithLaptopType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books.concat(newBooks)
        ]
    }
}

export function updateBook(u: UserWithBooksType & UserWithLaptopType, js: string, ts: string) {
    return {
        ...u,
        books: u.books.map(m=> m === js ? m = ts : m)

    }
}

export function removeBook(u: UserWithBooksType & UserWithLaptopType, remove: string) {
    return {
        ...u,
        books: u.books.filter(f=> f !== remove)

    }
}

export function updateCompanyTitle(u: UserWithLaptopType & UserWithCompaniesType, companyId: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(f=> f.id === companyId ? {...f,title: newTitle}:f),
    }
}

export function updateCompanyTitle2(companies: {[key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(f=> f.id === companyId ? {...f, title: newTitle} : f)

    return companyCopy
}
