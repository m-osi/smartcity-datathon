import eel
from random import randint
import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors

  
eel.init("web")  

@eel.expose
def get_result():
    features = eel.collectData()()
    features = [(int(x)/10) for x in features]
    df = pd.read_pickle("./data/final_dataset.pkl") 
    nn = NearestNeighbors(n_neighbors=1, algorithm='ball_tree')
    nn.fit(df.values)
    features = np.array(features)
    results = nn.kneighbors([features])
    most_suitable = df.index[results[1][0][0]]
    return most_suitable

class KNN:
    def __init__(self):
        self.df = pd.read_pickle("./data/final_dataset.pkl") 
        self.nn = NearestNeighbors(n_neighbors=1, algorithm='ball_tree')

    def fit(self):
        self.nn.fit(self.df.values)
    
    def get_result(self, features):
        features = np.array(features)
        results = self.nn.kneighbors([features])
        most_suitable = self.df.index[results[1][0][0]]
        return most_suitable
  
# Start the index.html file
eel.start("index.html")