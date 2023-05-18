import * as sw from 'stopword'
export { SearchIndexer } from './indexer'
export { LocalSearchIndexClient, TinaCMSSearchIndexClient } from './client'
export type { SearchClient } from './types'
export { default as sw } from 'stopword'

export const lookupStopwords = (
  keys?: string[],
  defaultStopWords: string[] = sw.eng
) => {
  let stopwords = defaultStopWords
  if (keys) {
    stopwords = []
    for (const key of keys) {
      stopwords.push(...sw[key])
    }
  }
  return stopwords
}
