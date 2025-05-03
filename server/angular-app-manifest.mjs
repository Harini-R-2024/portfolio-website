
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
    'index.csr.html': {size: 3737, hash: 'c91a7247153beff27b0b5143e519f2cb34dc144ed63bcfa17a9ef10bcd985a8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4250, hash: 'd953ce17f73cf6674cffc720eeaf0b4d6f54432e0331345f0f8a1297a823e2da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 22215, hash: '643b23dc0dfee3cc1b33346046e759cbdf89b6fef00c3608fc3303ea0c068982', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
