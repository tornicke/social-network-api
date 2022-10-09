const { Schema } = require("mongoose");
const { format_date } = require("../utils/helpers");

const reactionSchema = new Schema({
  reactionID: {
    type: Schema.Types.ObjectId,
    default: () => new Schema.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (date) => {
      if (date) return format_date(date);
    },
  },
});

module.exports = reactionSchema;
