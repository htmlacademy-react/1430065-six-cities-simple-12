export enum AppRoute {
  Login = '/login',
  Root = '/',
  WrongPath = '*',
  Offer = 'offer/:id'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  Nearby = 'nearby'
}

export const ratingList: { starNumber: number; type: string }[] = [
  { starNumber: 5, type: 'perfect' },
  { starNumber: 4, type: 'good' },
  { starNumber: 3, type: 'not bad' },
  { starNumber: 2, type: 'baddly' },
  { starNumber: 1, type: 'terribly' }
];

export const initialReviewData = {
  RATING: 0,
  REVIEW: '',
  MIN_SYMBOLS: 50,
  MAX_SYMBOLS: 300,
};

export const fiveFoldMarkToPercentRatio = 20;

export const isoDateFilterParmeters = {
  CUT_TIME_INITIAL: 0,
  CUT_TIME_FINAL: 10,
  FILTER_DAY_INITIAL: 8,
  FILTER_DAY_FINAL: 10,
};

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const sliceParameterToDuplicateArray = 0;

export const sortingOptions: string[] =
['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export const emptyOffersArrayLength = 0;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  UnKnown = 'UNKNOWN'
}

export const PASSWORD_REGEX = /(?=.*?[0-9])(?=.*?[A-Za-z]).+/;

export const TIMEOUT_SHOW_ERROR = 2000;
