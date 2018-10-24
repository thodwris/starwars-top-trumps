import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.results) {
      payload.results.firstObject.count = payload.count;
    }

    return this._super(store, primaryModelClass, payload.results || payload, id, requestType)
  },

  extractId(modelClass, resourceHash) {
    return resourceHash.url.match(/\d+/)[0];
  }
});
