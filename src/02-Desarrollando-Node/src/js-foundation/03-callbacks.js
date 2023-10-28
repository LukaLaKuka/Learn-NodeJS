const users = [
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

function findUser(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    
    if (!user) {
        return callback(`User not found with id: ${id}`);
    }

    return callback(null, user);
}

module.exports = {
    findUser: findUser
}

