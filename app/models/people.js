import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  height: DS.attr('number'),
  mass: DS.attr('number'),
  hair_color: DS.attr('string'),
  skin_color: DS.attr('string'),
  eye_color: DS.attr('string'),
  birth_year: DS.attr('string'),
  gender: DS.attr('string'),
  homeworld: DS.attr('string'),
  url: DS.attr('string'),
  created: DS.attr('date'),
  edited: DS.attr('date')
});
