var ContentType = {
    FOLDER: 0,
    TEXT: 1,
    SPOTIFY: 2,
    VIDEO: 3,
    CODE: 4,
    PICTURE: 5,
    TEXTCARD: 6,
    LINK: 7,
    MESSAGES: 8,
    MESSAGE: 9,
    KEYBOARD: 10
};
var icons = ['folder', 'file-text-o', 'play', 'youtube', 'code', 'picture-o', 'file-text-o', 'external-link', "comment", "text", "music"];
var className = ['Folder', 'Text', 'Spotify', 'Video', 'Code', 'Picture', 'TextCard', 'Link', 'Messages', 'Message', 'Keyboard'];

ContentType.getIcon = function(contentType) {
  return icons[contentType];
}

ContentType.getClassName = function(contentType) {
  return className[contentType];
}

module.exports = ContentType;
