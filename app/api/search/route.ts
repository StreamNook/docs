import { source } from '@/lib/docs-source'
import { createFromSource } from 'fumadocs-core/search/server'

// Static search index for the exported (static) site. `staticGET` precomputes
// the index into a static JSON file; the client searches it in the browser.
export const revalidate = false

export const { staticGET: GET } = createFromSource(source, {
  language: 'english',
})
