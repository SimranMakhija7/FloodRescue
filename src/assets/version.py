import requests
from bs4 import BeautifulSoup
from flask import Flask,jsonify,render_template
import json

app = Flask(__name__)

#result = requests.get("https://nominatim.openstreetmap.org/details.php?place_id=638326")
result = requests.get("https://nominatim.openstreetmap.org/details.php?place_id=245267469")

src = result.content
soup = BeautifulSoup(src,'lxml')

loc = soup.find_all('tr')
for l in loc:
    if l.string == "Locality":
        first_ref = l
abc = first_ref.find_next_siblings('tr')
#print(abc)
count =0
placeLocality = soup.find_all('td')
for l in placeLocality:
    if l.string == "place:locality":
        count= count+1

apiArr=[]
#print(count)
for i in range(0,count):
    apiArr.append(abc[i])

aRefArrr=[]
for i in apiArr:
    a_tag = i.find('a')
    #print(a_tag)
    #print(a_tag['href'])
    aRefArrr.append(a_tag['href'])

#print(aRefArrr)
#print(soup.prettify())
#print(result.status_code)
finalArray=[]
data = ''

for i in aRefArrr:
    url = "https:"+ i
    #print(url)
    result = requests.get(url)
    src = result.content
    soup = BeautifulSoup(src, 'lxml')
    latitudeTags = soup.findAll("span", class_="latitude")
    longitudeTags = soup.findAll("span", class_="longitude")
    data = data + ","+latitudeTags[0].string+","+longitudeTags[0].string
    # data.extend([latitudeTags[0].string,longitudeTags[0].string])
data = data[1::]
print(data)

    # data.update({"latitude":float(latitudeTags[0].string),"longitude":float(longitudeTags[0].string)})
    # finalArray.append(data)
    # dataStr=""
    # for i in (data):
    #     dataStr+=i;
    #     dataStr+=",";
#data = dict(data)
#print(finalArray)

@app.route('/',methods=['GET'])
def homepage():
    URL = "http://dev.virtualearth.net/REST/v1/Elevation/List"
    PARAMS :{
        'points':data,
        'key':'Aq3HsKhrPklE0BTfr5N3LpOYF2YnWsoyHDOV92ZOrqc38TPyEt2-cGdePaQLwgjq'
    }
    r = requests.get(url=URL,params=PARAMS)
    json_obj = r.text
    print("A"+json_obj)
    return "hello"
# @app.route('/')
# def index():
#     return jsonify(finalArray)



if __name__ == '__main__':
    app.run(debug=True)
