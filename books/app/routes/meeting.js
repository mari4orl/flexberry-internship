import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { PER_PAGE } from '../controllers/meeting';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    },
    speaker: {
      refreshModel: true
    },
    book: {
      refreshModel: true
    },
    report: {
      refreshModel: true
    },
    meetingDate: {
      refreshModel: true
    }
  },

  model({ search, page, speaker, book, report, meetingDate }) {
    const query = {
      _page: page,
      _limit: PER_PAGE
    };

    if (speaker) {
      query.speaker = speaker;
    }

    if (book) {
      query.book = book;
    }

    if (report) {
      query.report = report;
    }

    if (search) {
      query.q = search;
    }

    if (meetingDate) {
      query.meetingDate = meetingDate;
    }

    // return this.get('store').findAll('meeting');
    return RSVP.hash({
      reports: this.store.findAll('report'),
      speakers: this.store.findAll('speaker'),
      books: this.store.findAll('book'),
      meetings: this.store.query('meeting', query)
    });
  },

  actions: {
    loading() {
      return false;
    }
  }
});
