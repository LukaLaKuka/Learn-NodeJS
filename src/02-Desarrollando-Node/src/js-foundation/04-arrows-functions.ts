import { User } from "./03-callbacks"

const users: Array<User> = [
    {
        id: 1,
        name: "Luka"
    },
    {
        id: 2,
        name: "Crosso"
    },
    {
        id: 3,
        name: "David"
    }
];

const findUser = (id: number, callback: Function) => {
    const user: User | undefined = users.find((user) => user.id === id);

    (user) ? callback(null, user) : callback(`User not found with id: ${id}`);;
}

export {
    findUser,
}

