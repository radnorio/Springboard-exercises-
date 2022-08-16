### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
python is immediately encoded as ascii code, but it does need an interpreter same as javascript
python uses indent notation over block notation making it more readable.
javascript is more flexible and is supported in more browsers

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
you could write a testing statement to see whether or not c is a key, or you could use try except block to keep the program from crashing.
- What is a unit test?
A unit test is a test that is on one specific small piece of code
- What is an integration test?
an integration test is a larger group of functions or units to determine whether a group of units works

- What is the role of web application framework, like Flask?
Flask allows for multiple levels of functionality with libraries, function tools, and other usefool developer tools.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  the root parameter url would probably be better if your application is stagnant, but a query param would be better if your program was focused on more variable inputs.

- How do you collect data from a URL placeholder parameter using Flask?
you use request.url

- How do you collect data from the query string using Flask?
You use request.args

- How do you collect data from the body of the request using Flask?
You use request.form

- What is a cookie and what kinds of things are they commonly used for?
cookies store client side data. cookies allow user memory on a site. 

- What is the session object in Flask?
the session object tracks the session data and any session variable values

- What does Flask's `jsonify()` do?
jsonify allows flask to properly return json data instead of python data