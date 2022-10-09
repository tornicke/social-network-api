const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const { format_date } = require("../utils/helpers");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date) return format_date(date);
      },
    },
    username: [
      {
        type: String,
        required: true,
      },
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
