export default interface ItunesSearch {
  resultCount: number;
  results: Result[];
}

export interface Result {
  wrapperType: WrapperType;
  kind?: Kind;
  artistId?: number;
  collectionId?: number;
  trackId?: number;
  artistName: string;
  collectionName?: string;
  trackName?: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl?: string;
  collectionViewUrl?: string;
  feedUrl?: string;
  trackViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice?: number;
  trackRentalPrice?: number;
  collectionHdPrice?: number;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  releaseDate: Date;
  collectionExplicitness: Explicitness;
  trackExplicitness?: Explicitness;
  trackCount?: number;
  country: Country;
  currency: Currency;
  primaryGenreName: string;
  contentAdvisoryRating?: string;
  artworkUrl600?: string;
  genreIds?: string[];
  genres?: string[];
  collectionArtistId?: number;
  collectionArtistViewUrl?: string;
  previewUrl?: string;
  discCount?: number;
  discNumber?: number;
  trackNumber?: number;
  trackTimeMillis?: number;
  shortDescription?: string;
  longDescription?: string;
  hasITunesExtras?: boolean;
  collectionArtistName?: string;
  isStreamable?: boolean;
  copyright?: string;
  description?: string;
}

export enum Explicitness {
  Cleaned = 'cleaned',
  Explicit = 'explicit',
  NotExplicit = 'notExplicit',
}

export enum Country {
  Usa = 'USA',
}

export enum Currency {
  Usd = 'USD',
}

export enum Kind {
  FeatureMovie = 'feature-movie',
  Podcast = 'podcast',
  Song = 'song',
}

export enum WrapperType {
  Audiobook = 'audiobook',
  Track = 'track',
}
