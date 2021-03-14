module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    // https://github.com/wting/autojump
    'autojump',
    // alternative to `cat`: https://github.com/sharkdp/bat
    'bat',
    // Install GNU core utilities (those that come with macOS are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    // 'fortune',
    'fzf',
    'ffmpeg',
    'readline', // ensure gawk gets good readline
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'git-lfs',
    'imagemagick',
    'gmp',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed', // --with-default-names',
    // upgrade grep so we can get things like inverted match (-v)
    'grep', // --with-default-names',
    // better, more recent grep
    //'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // jq is a sort of JSON grep
    'jq',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'p7zip',
    'pigz',
    'pv',
    'reattach-to-user-namespace',
    'rsync',
    'rename',
    // better/more recent version of screen
    'screen',
    'ssh-copy-id',
    'tmux',
    'todo-txt',
    'tree',
    'ttyrec',
    'vbindff',
    // better, more recent vim
    'vim', //--with-client-server --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget', // --enable-iri'
    'zopfli'
  ],
  cask: [
    //'adium',
    //'adobe-creative-cloud',
    //'amazon-cloud-drive',
    //'atom',
    'alfred',
    // 'box-sync',
    //'comicbooklover',
    //'diffmerge',
    'docker', // docker for mac
    'dropbox',
    'cyberduck',
    //'evernote',
    //'flux',
    'firefox',
    'google-chrome',
    'grammarly',
    'kap',
    //'gpg-suite',
    //'ireadfast',
    'iterm2',
    'imageoptim',
    //'little-snitch',
    //'macbreakz',
    //'micro-snitch',
    'postgres',
    'pgadmin4',
    'signal',
    'telegram',
    'teamviewer',
    'rsyncosx',
    //'macvim',
    //'sizeup',
    //'sketchuo',
    'sketch',
    'skype',
    //'slack',
    'the-unarchiver',
    'torbrowser',
    'transmission',
    'visual-studio-code',
    'virtualbox',
    'virtualbox-extension-pack',
    'vlc',
    'whatsapp',
    'xquartz'
  ],
  gem: [
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'instant-markdown-d',
    // 'generator-dockerize',
    'gulp',
    'npm-check-updates',
    'prettyjson',
    'trash',
    'vtop'
    // ,'yo'
  ]
};
