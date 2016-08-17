// Generated by CoffeeScript 1.6.3
(function() {
  define(['aloha', 'aloha/plugin', 'jquery'], function(Aloha, Plugin, $) {
    return Aloha.bind('aloha-editable-created', function(evt, editable) {
      return editable.obj.on('paste', function(e) {
        var clipboard, content;
        clipboard = e.clipboardData || e.originalEvent.clipboardData;
        if (clipboard.getData('text/oerpub-content')) {
          return;
        }
        content = clipboard.getData('text/html');
        if (content) {
          e.preventDefault();
          return Aloha.execCommand('insertHTML', false, content);
        }
      });
    });
  });

}).call(this);