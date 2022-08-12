from http.client import responses
from flask import Flask,request,render_template,redirect,flash,session
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey as survey

RESPONSES_KEY = 'responses'
# set up app variable
app = Flask(__name__)
app.config['SECRET_KEY'] = 'never-tell!'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# set up debug variable
debug = DebugToolbarExtension(app)
#app route implimentation 
@app.route('/')
def show_servey():
    return render_template('survey_start.html', survey=survey)
#starts servey and clears old responses
@app.route('/begin', methods=['POST'])
def start_servey():
    session[RESPONSES_KEY] = []
    return redirect('/questions/0')
#loop for answers to each question to store in var
@app.route("/answer", methods=["POST"])
def handle_question():
    choice = request.form['answer']
    responses = session[RESPONSES_KEY]
    responses.append(choice)
    session[RESPONSES_KEY] = responses
    if (len(responses) == len(survey.questions)):
        return redirect("/complete")
    else:
        return redirect(f"/questions/{len(responses)}")
#loop for response to each question to display
@app.route("/questions/<int:qid>")
def show_question(qid):
    responses = session.get(RESPONSES_KEY)
    if (responses is None):
        return redirect("/")
    if (len(responses) == len(survey.questions)):
        return redirect("/complete")

    if (len(responses) != qid):
        flash(f"Invalid question id: {qid}.")
        return redirect(f"/questions/{len(responses)}")
    question = survey.questions[qid]
    return render_template("question.html", question_num=qid, question=question)
#final page post
@app.route("/complete")
def complete():
    return render_template("completion.html")
