from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/data')
def serve_excel_data():
    # Load your Excel file
    df = pd.read_excel('../db/main.xlsx', engine='openpyxl')
    print("Data: ", df)
    
    # Convert the DataFrame to a list of dictionaries
    records = df.to_dict(orient='records')
    
    # Wrap the list of dictionaries in another dictionary with 'products' key
    data = {'products': records}
   
    # Serve the JSON data
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
