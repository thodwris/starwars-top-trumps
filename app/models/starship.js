import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  model: DS.attr('string'),
  manufacturer: DS.attr('string'),
  cost_in_credits: DS.attr('number'),
  length: DS.attr('number'),
  max_atmosphering_speed: DS.attr('number'),
  crew: DS.attr('number'),
  passengers: DS.attr('number'),
  cargo_capacity: DS.attr('number'),
  consumables: DS.attr('string'),
  hyperdrive_rating: DS.attr('number'),
  MGLT: DS.attr('number'),
  starship_class: DS.attr('string'),
  url: DS.attr('string'),
  created: DS.attr('date'),
  edited: DS.attr('date')
});