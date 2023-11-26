import { getAge } from "../../src/plugins";

describe('Get Age Plugin Test', () => {

    test('getAge Plugin', () => {
        const birthdate = '2003-06-23';
        const myAge = getAge(birthdate);
        const yearsDiff = (birthdate: string) => {
            let today = new Date();
            let birthDate = new Date(birthdate);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        const years = yearsDiff(birthdate);
        expect(myAge).toEqual(years);
    });
});