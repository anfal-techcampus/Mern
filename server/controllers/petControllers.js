const pet = require('../models/petModels')

const createNewPet = (req, res) => {
    const {name,type,description,skillOne,skillTwo,skillThree}= req.body
    pet.create({name,type,description,skillOne,skillTwo,skillThree})
        .then(newPet => res.json({ pet: newPet }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    };
    const getAllPets = (req, res) => {
        pet.find().sort("type")
        .then(allPets => res.json({ pets: allPets }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
    const getOnePet = (req, res) => {
        pet.findOne({ _id: req.params.id })
        .then(onePet => res.json({ pet: onePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };
    const editPet = (req, res) => {
        pet.findOneAndUpdate({ _id: req.params.id }, req.body, {runValidators: true} )
        .then(onePet => res.json({ pet: onePet }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
    };

    const deletePet = (req, res) => {
        pet.deleteOne({ _id: req.params.id })
        .then(onePet => res.json({ pet: onePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    };

module.exports= {createNewPet, getAllPets, getOnePet, editPet, deletePet} 