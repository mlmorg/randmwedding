import Router5 from 'router5';
import historyPlugin from 'router5-history';

const routes = [
  {name: 'home', path: '/'},
];

export default function createAppRouter() {
  return new Router5(routes)
    .setOption('useHash', false)
    .setOption('trailingSlash', true)
    .usePlugin(historyPlugin());
};
