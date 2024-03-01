const {model, Schema} =  require("mongoose");

const schema = new Schema(
    {
        owner: {type: Schema.Types.ObjectId, ref: "users" },
        date: {type: String},
        products: [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: 'products',
                },
                weight: Number,
                calories: Number
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

const Diary = model('Diary', schema);

module.exports = Diary;