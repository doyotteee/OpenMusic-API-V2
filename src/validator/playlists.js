const Joi = require('joi');
const InvariantError = require('../exceptions/InvariantError');

const PostPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const PostPlaylistSongPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

const DeletePlaylistSongPayloadSchema = Joi.object({
  songId: Joi.string().required(),
});

const PlaylistsValidator = {
  validatePostPlaylistPayload: (payload) => {
    const validationResult = PostPlaylistPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePostPlaylistSongPayload: (payload) => {
    const validationResult = PostPlaylistSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeletePlaylistSongPayload: (payload) => {
    const validationResult = DeletePlaylistSongPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = PlaylistsValidator;
