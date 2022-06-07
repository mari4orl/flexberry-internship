import Component from '@ember/component';
import { get} from '@ember/object';
import $ from 'jquery';
import moment from 'moment';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);

    this.$('.datepicker').datepicker({
      clearBtn: true,
      format: "dd.mm.yyyy",
      language: "ru",
      autoclose: true
    });

    const self = this;

    this.$('.datepicker').datepicker().on('change', function() {
      moment.fn.toJSON = function() { return this.format(); }
      let selectedDateMetting = moment($(this).datepicker('getDate')).toJSON();
      if (selectedDateMetting === 'Invalid date') {selectedDateMetting = ''}
      get(self, 'changeDateMeeting')(selectedDateMetting);
    });
  }
});
