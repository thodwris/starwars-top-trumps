import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({

  leftPlayerScore: 0,
  rightPlayerScore: 0,

  data: computed('model', function () {
    return this.selectRandomFromData(this.get("power"));
  }),

  selectRandomFromData(powerAttr) {
    let randomisedData = this.get('model').toArray().sort(() => 0.5 - Math.random());
    return this.setWinnerAndScore([randomisedData.get('firstObject'), randomisedData.get('lastObject')], powerAttr);
  },

  setWinnerAndScore(data, powerAttr) {
    let power = this.capitalize(powerAttr);
    if (data[0].get(powerAttr) === data[1].get(powerAttr)) {
      data.forEach(p => p.set('hasBigger' + power, true));
      data.forEach(p => p.set('hasSame' + power, true));
    } else {
      data.forEach(p => p.set('hasSame' + power, false));
      data.forEach(p => p.set('hasBigger' + power, false));
      let scoreInfo = ['leftPlayerScore', 'rightPlayerScore'];
      let winScorePosition = data[0].get(powerAttr) > data[1].get(powerAttr) ? 0 : 1;
      this.incrementProperty(scoreInfo[winScorePosition]);
      data[winScorePosition].set('hasBigger' + power, true);
    }
    return data;
  },

  capitalize(power) {
    return power.charAt(0).toUpperCase() + power.slice(1);
  },

  actions: {
    play() {
      this.set('data', this.selectRandomFromData(this.get("power")));
    }
  }

});
