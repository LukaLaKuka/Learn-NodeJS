type User = {
    id: number,
    name: string
}

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

function findUser(id: number, callback: Function): User | undefined {
    const user: User | undefined = users.find(function (user: User): boolean {
        return user.id === id;
    });
    
    if (!user) {
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, user);
}

export {
    findUser,
    User
}

