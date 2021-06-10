const {createNewPet, getAllPets, getOnePet, editPet, deletePet} = require("../controllers/petControllers");


module.exports = app => {

    app.get('/api', getAllPets);
    app.get('/api/:id', getOnePet);
    app.put('/api/:id/edit', editPet);
    app.delete('/api/:id/delete', deletePet);
    app.post('/api/new/pet', createNewPet);
};
