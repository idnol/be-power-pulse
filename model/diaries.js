const {model, Schema} =  require("mongoose");
const Joi = require("joi");

const schema = new Schema(
    {
        owner: {type: Schema.Types.ObjectId, ref: "users" },
        date: {type: String},
        products: [
            {
                product:
                    {
                    type: Schema.Types.ObjectId,
                    ref: 'products',
                },
                weight: Number,
                calories: Number,
            }
        ],
        exercises: [
            {
                exercise: {
                    type: Schema.Types.ObjectId,
                    ref: 'exercises',
                },
                time: Number,
                calories: Number
            }
        ],
        statistic: {
            calories: Number,
            burnedCalories: Number,
            sportTime: Number
        }
    },
    { versionKey: false, timestamps: false }
);

const addProductSchema = Joi.object({
    product: Joi.string().required().empty(false),
    weight: Joi.number().required().empty(false),
});
const addExerciseSchema = Joi.object({
    exercise: Joi.string().required().empty(false),
    time: Joi.number().required().empty(false),
});
const Diary = model('Diary', schema);

const joiSchemas = {
    addProductSchema,
    addExerciseSchema
}

module.exports = {Diary, joiSchemas};

