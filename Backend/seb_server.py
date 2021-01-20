"""
Main module of the server file
"""


from flask import render_template
import connexion
from flask_cors import CORS

# Create the application instance
app = connexion.FlaskApp(__name__, specification_dir='./')

# Read the swagger-seb.yml file to configure the endpoints
app.add_api("swagger-seb.yml")
CORS(app.app) # This will enable CORS for all routes

# create a URL route in our application for "/"
@app.route("/")
def home():
    """
    This function just responds to the browser URL
    localhost:5000/
    :return:        the rendered template
    """
    return render_template("seb.html")

if __name__ == "__main__":
    app.run(debug=True)
