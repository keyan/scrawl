from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')


@socketio.on('event')
def handle_connect():
    print ('recieved connection from client!')


@socketio.on('draw circle')
def draw_circle(data):
    print ('Server received a circle')
    emit('client draw circle', data)
    # TODO: not redraw if sent by origin

if __name__ == '__main__':
    socketio.run(app)
