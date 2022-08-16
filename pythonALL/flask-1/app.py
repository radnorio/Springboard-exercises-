# from importlib.resources import path
# from multiprocessing.sharedctypes import Value
from crypt import methods
import string
from flask import Flask,request, render_template,redirect,flash,session,request
import requests
from flask_debugtoolbar import DebugToolbarExtension
from forex_python.converter import CurrencyRates
from curr import Currency 

app = Flask(__name__)
app.config['SECRET_KEY'] = "never-tell!"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)
c = CurrencyRates(app)

@app.route('/')
def Show_Home():
    '''Should return to the home template'''

    return render_template('Home.html')

@app.route('/start')
def Post_Converted_Value():
    """This should post the value after converting the input values"""

    return render_template('currency.html')

@app.route('/start/post', methods = ['POST'])
def Convert_Currency_Value():
    '''display the information from the inputs by using answer template'''

    type1 = request.form.get('type1')
    type2 = request.form.get('type2')
    value = int(request.form.get('valueIn')) #this is converted to an integer from the console string
    currency = Currency(type1,type2,value)
    if currency.Check_Container() and value > 0:
        rate = float(c.get_rate(type1,type2)) #this is converted to a float from get_rate
        return currency.Template_sort(rate)
    else:
        return currency.Return_Invalid_Currency()

    