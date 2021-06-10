const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
		{
		name: {
			type: String,
			required: [true, "you should enter a pet name"],
			minLength: [3, "Pet name should be at least 3 characters"]
		},
        type: {
			type: String,
			required: [true, "you should enter a pet type"],
			minLength: [3, "Pet type should be at least 3 characters"]
		},
        description: {
			type: String,
			required: [true, "you should enter a pet descripion"],
			minLength: [3, "Pet description should be at least 3 characters"]
		},
        skillOne: String ,
		skillTwo: String ,
        skillThree: String 
		},
		{
		timestamps: true,
		}
);

const pet = mongoose.model("Pet", petSchema);

module.exports = pet;
