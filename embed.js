/* Buy Me a Chiya — embed loader.
 *
 * Drop this on any site:
 *   <script src="https://buymeachiya.vijaykarn.com.np/embed.js"
 *           data-chiya="YOUR_CODE"></script>
 *
 * It replaces itself with an iframe showing your chiya card. Nothing is sent
 * anywhere: your code is the same payload that lives in your page link, and it
 * is read only by the frame in the visitor's own browser.
 */
(function () {
  var SITE = 'https://buymeachiya.vijaykarn.com.np';

  // document.currentScript is the tag being executed, so each copy finds its own settings
  var tag = document.currentScript;
  if (!tag) return;

  var code = tag.getAttribute('data-chiya') || '';

  // accept a full page link too, so pasting either one works
  var hash = code.indexOf('#') > -1 ? code.slice(code.indexOf('#') + 1) : code;
  if (!hash) return;

  var width = tag.getAttribute('data-width') || '340px';

  var frame = document.createElement('iframe');
  frame.src = SITE + '/embed.html#' + hash;
  frame.title = 'Buy me a chiya';
  frame.loading = 'lazy';
  frame.setAttribute('scrolling', 'no');
  // allow-same-origin is needed for two reasons: without it the frame gets an opaque
  // origin, so its height messages arrive as origin "null" and cannot be verified, and
  // the clipboard is unavailable. It does NOT grant any access to the host page.
  frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox');
  // cross-origin frames get no clipboard unless the host delegates it here
  frame.setAttribute('allow', 'clipboard-write');
  frame.style.cssText =
    'width:100%;max-width:' + width + ';height:430px;border:0;display:block;' +
    'color-scheme:normal;background:transparent;overflow:hidden';

  tag.parentNode.insertBefore(frame, tag);

  // the card reports its own height so the frame never scrolls or clips
  window.addEventListener('message', function (e) {
    if (e.source !== frame.contentWindow) return;          // ignore every other frame
    if (e.origin !== SITE) return;                         // and anything not from us
    var h = e.data && e.data.chiyaHeight;
    if (typeof h === 'number' && h > 80 && h < 2000) frame.style.height = h + 'px';
  });
})();
