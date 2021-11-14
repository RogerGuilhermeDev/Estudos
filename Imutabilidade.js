const user = {
    name: 'Rog',
    lastName: 'Braddock'
};

function getUserWithFullName(user){
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user)