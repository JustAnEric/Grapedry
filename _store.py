from json import load, loads, dump, dumps
from enum import Enum
from typing import Literal, LiteralString

class Storages(Enum):
    accounts = './stores/accounts.json'
    temporary = './stores/temporary.json'
    permanent = './stores/permanent.json'
    miscellaneous = './stores/miscellaneous.json'
    
class Storage:
    def __init__(_, storage_name:Storages):
        _.data = load(open(storage_name))
        _.storage = storage_name
        
        _.__call__()
    
    def get(_, key):
        return ReadOnlyStorageKey(_.data.get(key),_.storage,_.data,key)
    
    def close(_):
        _.data = {"storage_name": "zeromem_closed"}
        return _.data
    
    def __call__(_):
        return _.data
         
class ReadOnlyStorageKey:
    def __init__(_, data, storage_name:Storages, data_origin:{}, key_name):
        _.data = data
        _.storage = storage_name
        _.origin = data_origin
        _.key_name = key_name
        
        _.__call__()
    
    def get(_, key):
        return ReadOnlyStorageKey(_.data.get(key),_.storage,_.origin,key)
    
    def close(_):
        _.data = {"storage_name": "zeromem_closed"}
        return _.data