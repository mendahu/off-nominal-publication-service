const Watcher = require('feed-watcher');
const config = require('../config/config.json');
const wemartiansHandler = require('./wemartians/wemartiansHandler');

/* WEMARTIANS HANDLER */

const wemartiansWatcher = new Watcher(config.wemartiansPodcast.url, 60);

wemartiansWatcher.on('new entries', (entries) => {
  entries.forEach((entry) => wemartiansHandler(entry));
});

wemartiansWatcher
  .start()
  .then((entries) => {
    console.log('Watcher listening');
  })
  .catch((error) => {
    console.error(error);
  });
