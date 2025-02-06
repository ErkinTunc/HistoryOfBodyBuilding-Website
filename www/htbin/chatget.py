#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
import string
import pickle
from datetime import datetime

# On conserve la logique de fallback pour l'import JSON,
# au cas où un ancien environnement ne l'aurait pas.
try:
    import json
except ImportError:
    sys.path.append(os.getcwd() + '/htbin/simplejson')
    import simplejson as json

def main():
    # En-têtes HTTP
    print('Cache-Control: no-cache')
    print('Content-type: application/json')
    print()

    # Lecture du fichier chat.dat
    msglist = []
    with open('../data/chat.dat', 'r', encoding='utf-8') as data_file:
        for line in data_file:
            # Chaque ligne contient un objet JSON
            msglist.append(json.loads(line))

    # Conversion de la liste en JSON et affichage
    print(json.dumps(msglist))

if __name__ == '__main__':
    main()
