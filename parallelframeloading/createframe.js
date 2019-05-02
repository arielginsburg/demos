(function () {
    const container = document.createElement('div');
    container.style.width = 640;
    container.style.height = 360;
    document.body.appendChild(container);

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.frameBorder = 0;
    iframe.marginHeight = 0;
    iframe.marginWidth = 0;
    iframe.scrolling = 'no';
    iframe.src = 'javascript:void(0)';
    iframe.allowFullscreen = true;
    container.appendChild(iframe);

    const iwin = iframe.contentWindow;
    const idoc = iframe.contentDocument;
    const scriptUrl = 'nestedlogic.js';
    const html = `<!DOCTYPE html>
    <html style="height:100%">
    <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    </head>
    <body style="margin: 0; height: 100%">
    <div style="height: 100%; position: relative"></div>
    <script type="text/javascript" onload="onFrameReady()" src="${scriptUrl}"><` +
        `/script>
    </body>
    </html>`;

    idoc.open();
    iwin.onFrameReady = function () {
        console.log('Frame ready');
        iwin.setBgColor(window.Utils.getRandomColor());
    };
    idoc.write(html);
    idoc.close();
})();