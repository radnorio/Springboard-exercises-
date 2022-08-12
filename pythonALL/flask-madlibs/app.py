from flask import Flask, render_template,request
from flask_debugtoolbar import DebugToolbarExtension
from stories import story

app = Flask(__name__)
app.config['keyNode'] = 'key'
debug = DebugToolbarExtension(app)

@app.route('/')
def ask_question():
    prompts = story.prompts
    return render_template('question.html', prompts = prompts)
@app.route('/story')
def display_Story():
    text = story.generate(request.args)
    return render_template('story.html',text = text)