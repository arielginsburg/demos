(function () {
    var className = 'vdb_5c31ee5a0ca7c87aebbf0da7545db032e4b0af1a81424b48',
        config = {
            'mediaItems': [{
                'mimetype': 'media/uplynk',
                'id': '5979d7f654644f5cb3cbf01411ea79ea'
            }],
            'autoplay': true
        },
        script = document.createElement('script'),
        containers = document.getElementsByClassName(className),
        container = document.currentScript ? document.currentScript.parentNode : containers[0],
        innerContainer;

    container.removeAttribute('class');

    if (config.height) {
        container.style.height = config.height + 'px';

        if (config.width) {
            container.style.width = config.width + 'px';
        }
    } else {
        if (config.width) {
            container.style.width = config.width + 'px'
            innerContainer = document.createElement('div');
            container.appendChild(innerContainer);
            container = innerContainer;
        }

        container.style.width = '100%';
        container.style.height = '0';
        container.style.paddingBottom = '56.25%';
        container.style.position = 'relative';

        innerContainer = document.createElement('div');
        innerContainer.style.width = '100%';
        innerContainer.style.height = '100%';
        innerContainer.style.position = 'absolute';
        innerContainer.style.top = '0';
        innerContainer.style.left = '0';
        container.appendChild(innerContainer);
        container = innerContainer;
    }

    script.type = 'text/javascript';
    script.src = 'https://s3-us-west-1.amazonaws.com/vdms-player/prod/vdms-player.js';
    script.onload = function () {
        var player = new VDMS.Player(config);

        player.initialize();
        player.render('#' + container.id);
    };

    container.id = className.replace('vdb', 'vdms') + '_' + containers.length;
    container.appendChild(script);
})();