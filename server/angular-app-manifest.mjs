
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/portfolio-website/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/portfolio-website"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3770, hash: '0d969c5d7358804c2208b8c176814feb82fe72bcf00ea6b26e99b6bd2f18c4dc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4283, hash: '77364b250a3e8fd97005b03bc30328ee95164d23e5a2fc6efe6fdd96b84267ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22223, hash: 'b7bb71616724217105796ee4808b69b4739df90bf39b33e9f0e006e453c98cc4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
