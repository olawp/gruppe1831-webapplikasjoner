/**
 * @author Robert Alexander Dankertsen
 * @desc Denne klassen som filtrerer artikler basert på hva brukeren gjør i frontend
 * @exports ApiFilters
 */

export class ApiFilters {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  /**
   * @function filter filtrerer atrikklene
   */
  filter() {
    const query = { ...this.queryStr };
    const removeFields = ['q', 'limit', 'page'];
    removeFields.forEach((el) => delete query[el]);
    let queryStr = JSON.stringify(query);
    queryStr = queryStr.replace(
      /\b(gt|gte|lt|lte|in)\b/g,
      (match) => `$${match}`
    );
    // eslint-disable-next-line no-undef
    // console.log(query);
    this.query.find(query);
    return this;
  }

  /**
   * @function searchByQuery søker etter artikler basert på query string
   */
  searchByQuery() {
    if (this.queryStr.q) {
      const term = this.queryStr.q.split('-').join(' ');
      this.query = this.query.find({ $text: { $search: `"${term}"` } });
    }
    return this;
  }

  /**
   * @function pagination begrenser antall artikler man kan hente ut, og hvilken side man er på
   */
  pagination() {
    const page = parseInt(this.queryStr.page, 10) || 1;
    const limit = parseInt(this.queryStr.limit, 5) || 5;
    const skipResults = (page - 1) * limit;
    this.query = this.query.skip(skipResults).limit(limit);
    return this;
  }
}
