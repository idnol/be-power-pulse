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
                weight: Number
            }
        ],
        exercises: {
            type: [Schema.Types.ObjectId],
            ref: 'exercises',
        },
    },
    { versionKey: false, timestamps: false }
);

const Diary = model('Diary', schema);

module.exports = Diary;