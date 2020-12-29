const Watcher = require('feed-watcher');
const config = require('../config/config.json');

const wemartiansWatcher = new Watcher(config.wemartiansPodcast.url, 60);

wemartiansWatcher.on('new entries', function (entries) {
  entries.forEach(function (entry) {
    console.log(entry.title);
  });
});

wemartiansWatcher
  .start()
  .then(function (entries) {
    console.log('Watcher listening');
  })
  .catch(function (error) {
    console.error(error);
  });
