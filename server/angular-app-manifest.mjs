
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
    'index.csr.html': {size: 3752, hash: '712d58ae6cac670fdf4f689a895942be7b7d111fd47af4bab665ab8d5883ea52', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4265, hash: '7265992e22934a8b9554bc724c41caa1e7fb9eeec013470bc3152aca2e2185d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22205, hash: '01f2cdbe8f8c6c5038aaaba990b5f8bbe4d408353ede1e591ba72907678a2875', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
