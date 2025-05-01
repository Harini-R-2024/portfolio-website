
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3737, hash: 'c5de534d1644ab73d27d0bf81dc3279cdc784968de0386f611f34106a6a7db6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4250, hash: '69bc0b9ab8440aaa7485cc7d2c7d4131c65417df59bc5762a8eea51f3babdbe6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22166, hash: 'a1b35249238f791167103a170b1b78ab838f92c349cbf89d00607421c13a754b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
