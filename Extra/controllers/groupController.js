const groups = require('../data/groups');

const listGroups = (req, res) => {
    // Return users
    res.json(groups);
};

const addGroup = (req, res) => {
    // Get name from body using object destructuring
    const { name } = req.body;

    //Find last id
    const lastId = groups[groups.length - 1].id;

    //Create new group in memory
    const newGroup = {
        id: lastId + 1,
        name: name
    };

    //Push in memory to array
    groups.push(newGroup);

    // Return it
    res.json(newGroup);
};

module.exports = {
    addGroup,
    listGroups
};