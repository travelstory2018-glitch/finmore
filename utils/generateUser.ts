import { Faker } from "@faker-js/faker";
import { faker } from "@faker-js/faker/locale/en";
// export function generateUser() {
//     const timestamp = Date.now();



//     return {
//         name: `Ivan_${timestamp}`,
//         email: `test_${timestamp}@mail.com`,
//         password: 'Test12345!'
//     };
// }

// type User = {
//     name: string;
//     email: string;
//     password: string;
// };



// const ukrainianNames = [
//     'Іван',
//     'Петро',
//     'Олександр',
//     'Андрій',
//     'Максим',
//     'Тарас',
//     'Володимир',
//     'Дмитро',
//     'Сергій',
//     'Богдан',
//     'Олена',
//     'Марія',
//     'Наталія',
//     'Ірина',
//     'Софія',
//     'Катерина',
//     'Анна'
// ];



// const ukrainianEmails = [
//     'ivan',
//     'petro',
//     'oleksandr',
//     'andriy',
//     'maksym',
//     'taras',
//     'volodymyr',
//     'dmytro',
//     'serhii',
//     'bohdan',
//     'olena',
//     'mariia',
//     'nataliia',
//     'iryna',
//     'sofiia',
//     'kateryna',
//     'anna'
// ];



// export function generateUser(
//     overrides: Partial<User> = {}
// ): User {



//     const randomIndex = Math.floor(
//         Math.random() * ukrainianNames.length
//     );



//     const timestamp = Date.now();



//     const name = ukrainianNames[randomIndex];



//     const emailName = ukrainianEmails[randomIndex];



//     return {
//         name,
//         email: `${emailName}_${timestamp}@ukr.net`,
//         password: 'Test12345!',
//         ...overrides
//     };
// }


// type User = {
//     name: string;
//     email: string;
//     password: string;
// };



// const firstNames = [
//     'Іван',
//     'Петро',
//     'Олександр',
//     'Андрій',
//     'Максим',
//     'Тарас',
//     'Володимир',
//     'Дмитро',
//     'Сергій',
//     'Богдан',
//     'Олена',
//     'Марія',
//     'Наталія',
//     'Ірина',
//     'Софія',
//     'Катерина',
//     'Анна'
// ];



// const lastNames = [
//     'Шевченко',
//     'Бондаренко',
//     'Коваленко',
//     'Ткаченко',
//     'Мельник',
//     'Кравченко',
//     'Олійник',
//     'Поліщук',
//     'Савченко',
//     'Романенко',
//     'Лисенко',
//     'Козак',
//     'Бойко',
//     'Марченко'
// ];



// const emailNames = [
//     'ivan',
//     'petro',
//     'oleksandr',
//     'andriy',
//     'maksym',
//     'taras',
//     'volodymyr',
//     'dmytro',
//     'serhii',
//     'bohdan',
//     'olena',
//     'mariia',
//     'nataliia',
//     'iryna',
//     'sofiia',
//     'kateryna',
//     'anna'
// ];



// function randomItem<T>(array: T[]): T {
//     return array[Math.floor(Math.random() * array.length)];
// }



// function transliterate(text: string): string {
//     const map: Record<string, string> = {
//         а: 'a',
//         б: 'b',
//         в: 'v',
//         г: 'h',
//         ґ: 'g',
//         д: 'd',
//         е: 'e',
//         є: 'ye',
//         ж: 'zh',
//         з: 'z',
//         и: 'y',
//         і: 'i',
//         ї: 'yi',
//         й: 'y',
//         к: 'k',
//         л: 'l',
//         м: 'm',
//         н: 'n',
//         о: 'o',
//         п: 'p',
//         р: 'r',
//         с: 's',
//         т: 't',
//         у: 'u',
//         ф: 'f',
//         х: 'kh',
//         ц: 'ts',
//         ч: 'ch',
//         ш: 'sh',
//         щ: 'shch',
//         ю: 'yu',
//         я: 'ya',
//         ь: '',
//         "'": ''
//     };



//     return text
//         .toLowerCase()
//         .split('')
//         .map(char => map[char] ?? char)
//         .join('');
// }



// export function generateUser(
//     overrides: Partial<User> = {}
// ): User {



//     const firstName = randomItem(firstNames);
//     const lastName = randomItem(lastNames);



//     const timestamp = Date.now();



//     const transliteratedFirstName = transliterate(firstName);
//     const transliteratedLastName = transliterate(lastName);



//     return {
//         name: `${firstName} ${lastName}`,
//         email: `${transliteratedFirstName}.${transliteratedLastName}.${timestamp}@ukr.net`,
//         password: 'Test12345!',
//         ...overrides
//     };
// }
// type User = {
//     name: string;
//     email: string;
//     password: string;
//     confirmPassword: string;
// };



// const firstNames = [
//     'Іван',
//     'Петро',
//     'Олександр',
//     'Андрій',
//     'Максим',
//     'Тарас',
//     'Олена',
//     'Марія',
//     'Ірина',
//     'Софія'
// ];



// const lastNames = [
//     'Шевченко',
//     'Коваленко',
//     'Бондаренко',
//     'Ткаченко',
//     'Мельник',
//     'Козак',
//     'Бойко',
//     'Лисенко'
// ];



// function randomItem<T>(array: T[]): T {
//     return array[Math.floor(Math.random() * array.length)];
// }



// function transliterate(text: string): string {
//     const map: Record<string, string> = {
//         а: 'a',
//         б: 'b',
//         в: 'v',
//         г: 'h',
//         ґ: 'g',
//         д: 'd',
//         е: 'e',
//         є: 'ye',
//         ж: 'zh',
//         з: 'z',
//         и: 'y',
//         і: 'i',
//         ї: 'yi',
//         й: 'y',
//         к: 'k',
//         л: 'l',
//         м: 'm',
//         н: 'n',
//         о: 'o',
//         п: 'p',
//         р: 'r',
//         с: 's',
//         т: 't',
//         у: 'u',
//         ф: 'f',
//         х: 'kh',
//         ц: 'ts',
//         ч: 'ch',
//         ш: 'sh',
//         щ: 'shch',
//         ю: 'yu',
//         я: 'ya',
//         ь: '',
//         "'": ''
//     };



//     return text
//         .toLowerCase()
//         .split('')
//         .map(char => map[char] ?? char)
//         .join('');
// }



// function generateSecurePassword(length = 12): string {



//     const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numbers = '0123456789';
//     const special = '!@#$%^&*()_+';



//     const allChars =
//         lowercase +
//         uppercase +
//         numbers +
//         special;



//     let password = '';



//     // обов'язкові символи
//     password += randomItem(lowercase.split(''));
//     password += randomItem(uppercase.split(''));
//     password += randomItem(numbers.split(''));
//     password += randomItem(special.split(''));




//     for (let i = password.length; i < length; i++) {
//         password += randomItem(allChars.split(''));
//     }




//     return password
//         .split('')
//         .sort(() => Math.random() - 0.5)
//         .join('');
// }



// export function generateUser(
//     overrides: Partial<User> = {}
// ): User {



//     const firstName = randomItem(firstNames);
//     const lastName = randomItem(lastNames);



//     const timestamp = Date.now();



//     const transliteratedFirstName =
//         transliterate(firstName);



//     const transliteratedLastName =
//         transliterate(lastName);



//     return {
//         name: `${firstName} ${lastName}`,



//         email:
//             `${transliteratedFirstName}.` +
//             `${transliteratedLastName}.` +
//             `${timestamp}@ukr.net`,



//         password: generateSecurePassword(), 
//         confirmPassword: '123457',



//         ...overrides
//     };
// }

type User = {
    name: string;
    email: string;
    password: string;
};



function generateSecurePassword(): string {



    const lowercase = faker.string.alpha({
        length: 4,
        casing: 'lower'
    });



    const uppercase = faker.string.alpha({
        length: 2,
        casing: 'upper'
    });



    const numbers = faker.string.numeric(2);



    const specialChars = '!@#$%^&*';
    const special =
        specialChars[
        Math.floor(Math.random() * specialChars.length)
        ];



    return faker.helpers.shuffle([
        ...lowercase,
        ...uppercase,
        ...numbers,
        special
    ]).join('');
}



export function generateUser(
    overrides: Partial<User> = {}
): User {



    const firstName = faker.person.firstName();



    const lastName = faker.person.lastName();



    const timestamp = Date.now();



    const email =
        `${firstName}.${lastName}.${timestamp}@ukr.net`
            .toLowerCase()
            .replaceAll("'", '');



    return {
        name: `${firstName} ${lastName}`,
        email,
        password: generateSecurePassword(),
        ...overrides
    };
}