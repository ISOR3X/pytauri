import _RemarkEmoji from 'remark-emoji'
import _RemarkMdc from 'remark-mdc'
import _Highlight from 'C:/Users/Joram/Projects/javascript/pytauri/node_modules/.pnpm/@nuxtjs+mdc@0.18.4_magicast@0.5.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
  'remark-emoji': { instance: _RemarkEmoji },
  'remark-mdc': { instance: _RemarkMdc, options: {"autoUnwrap":true} },
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"light":"material-theme-lighter","default":"material-theme","dark":"material-theme-palenight"}}