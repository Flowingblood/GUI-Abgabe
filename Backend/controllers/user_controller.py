import connexion
import json
import os

from models.user import User  # noqa: E501
import util
from encoder import JSONEncoder

path = os.path.abspath(os.getcwd())
def createUser(body):
    #Create user

    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())
        body.id
        with open(str(body.id) +".json", "w") as f:
            json.dump(body, f, cls=JSONEncoder)
        f.close()

    return 'saved'


def createUsersWithListInput(body):
    #Creates list of users with given input array

    if connexion.request.is_json:
        body = [User.from_dict(d) for d in connexion.request.get_json()]
        print (str(body))
        for u in body:
            with open(str(u.id) + ".json", "w") as f:
                json.dump(u, f, cls=JSONEncoder)
            f.close()
    return 'all saved'

def getUserAll():
    #Get users
    users_list=[]
    for file in os.listdir(path):
        if file.endswith(".json"):
            open_file= os.path.join(path, file)
            with open(open_file) as json_file:
                data = json.load(json_file)
                users_list.append(data)
    print(users_list)
    return users_list

def deleteUser(username):
    #Delete user
    del_file = str(username) +".json"
    if os.path.exists(del_file):
        os.remove(del_file)
        return 'deleted'
    else:
        return "The file does not exist"




def getUserByName(username):
    #Get user by user name
    open_file= str(username) + '.json'
    with open(open_file) as json_file:
        data = json.load(json_file)
    print (data)
    return data


def updateUser(username, body):
    #Updated user

    if connexion.request.is_json:
        body = User.from_dict(connexion.request.get_json())  # noqa: E501
    with open(str(username) + ".json", "w") as f:
        json.dump(body, f, cls=JSONEncoder)
    f.close()
    return 'overwritten'
