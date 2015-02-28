# scrawl
A collaborative drawing game/app written so I could learn more about Javascript. Drawings are shared with all other users who are accessing the app. Built with Javascript, [Paper.js], [Flask-SocketIO], and [Flask]. Running on and EC2 micro-instance using [gunicorn].

### Requirements
- A modern browser

### Usage
1. Go to [scrawl.keyanp.com]
2. Click and drag to draw
3. Obtain fun!

The command line that starts the server is:
```gunicorn --worker-class socketio.sgunicorn.GeventSocketIOWorker app:app -p 0.0.0.0:80```

### TODO
1. Add an image capture button to save drawings as jpeg files.

[Paper.js]: http://paperjs.org/
[Flask-SocketIO]: https://flask-socketio.readthedocs.org
[Flask]: http://flask.pocoo.org/
[gunicorn]: http://gunicorn.org/
[scrawl.keyanp.com]: http://scrawl.keyanp.com/