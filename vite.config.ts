import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

function inlineCss(): Plugin {
  return {
    name: 'inline-critical-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type !== 'asset' || !file.fileName.endsWith('.html')) continue
        file.source = String(file.source).replace(
          /<link\b[^>]*\brel="stylesheet"[^>]*>/g,
          (tag) => {
            const href = tag.match(/href="([^"]+)"/)?.[1]
            if (!href) return tag
            const css = bundle[href.replace(/^\//, '')]
            if (!css || css.type !== 'asset') return tag
            delete bundle[css.fileName]
            return `<style>${String(css.source)}</style>`
          },
        )
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), inlineCss()],
})
