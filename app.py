import numpy as np
from flask import Flask, request, render_template
import pickle
app = Flask(__name__)

#Load the pickle model
model = pickle.load(open(r'C:\Users\User\Downloads\Binge_WebApp\binge.pkl', 'rb'))

# Renderhome page
@app.route('/')
def home():
    return render_template('home.html')

# Render results page
@app.route('/results')
def results_page():
    return render_template('results.html')

# Render recommendations page
@app.route('/recommendations')
def recommendations():    
 return render_template('recommendations.html')

@app.route('/predict',methods=['POST'])
def predict(): 
       
    #Get details from form for prediction
    float_features = [float(x) for x in request.form.values()]
    final_features = [np.array(float_features)]
    prediction = model.predict(final_features)
    #For rendering results on results page 
    return render_template('results.html',data=prediction)        
    
if __name__ == "__main__":
    app.run(debug=True)