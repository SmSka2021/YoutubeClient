export interface ResponseServer {
  kind: string,
  etag: string,
  nextPageToken?: string,
  regionCode?: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: Array<Item>
}

export interface ResponseServerID {
  kind: string,
  etag: string,
  nextPageToken?: string,
  regionCode?: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: Array<OneCard>
}
interface Data {
  url: string,
  width: number,
  height: number
}
interface Thumbnails {
  default: Data,
  medium: Data,
  high: Data,
  standard: Data,
  maxres: Data
}
interface Snippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: Thumbnails,
  channelTitle: string,
  publishTime?: string,
  tags?: Array<string>,
  categoryId?: string,
  liveBroadcastContent?: string,
  defaultLanguage?: string,
  localized?: {
    title: string,
    description: string,
  },
  defaultAudioLanguage?: string,
}
interface Statistic {
  viewCount: string,
  likeCount: string,
  dislikeCount?: string,
  favoriteCount: string,
  commentCount?: string,
}
export interface Item {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  },
  snippet: Snippet,
  statistics?: Statistic,
}
export interface ResponseOneCard {
  kind: string,
  etag: string,
  items: [OneCard],
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  }
}
export interface OneCard {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistic
}

