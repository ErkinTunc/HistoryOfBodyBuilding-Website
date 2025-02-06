#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
import urllib.parse
import pickle
import json
from datetime import datetime

def get_form_data():
    """
    Récupère les données du formulaire, que la requête soit GET ou POST,
    et les retourne sous forme de dict {champ: valeur}.
    """
    method = os.environ.get('REQUEST_METHOD', 'GET').upper()
    
    if method == 'POST':
        # Récupération de la longueur des données
        content_length = int(os.environ.get('CONTENT_LENGTH', 0))
        # Lecture du flux d'entrée
        raw_data = sys.stdin.read(content_length)
    else:
        # En GET (ou autre), on récupère la QUERY_STRING
        raw_data = os.environ.get('QUERY_STRING', '')

    # Parse la chaîne de requête
    parsed = urllib.parse.parse_qs(raw_data, keep_blank_values=True)
    
    # Convertit les listes retournées par parse_qs en chaînes simples
    form_data = {}
    for key, values in parsed.items():
        form_data[key] = values[0] if values else ''
    
    return form_data

def main():
    # En-têtes HTTP
    print('Cache-Control: no-cache')
    print('Content-type: application/json')
    print()

    # Lecture du fichier user.dat (données de l'utilisateur)
    with open('../data/user.dat', 'rb') as data_file:
        data = pickle.load(data_file)

    # Récupération des données de formulaire
    form_data = get_form_data()

    # Vérification des champs obligatoires
    if 'msg' not in form_data or not form_data['msg']:
        # Erreur : pas de msg
        print(json.dumps({'num': 1, 'msg': 'Erreur, le message est absent.'}))
    elif 'username' not in data:
        # Erreur : user.dat ne contient pas de username
        print(json.dumps({'num': -1, 'msg': "Erreur de lecture du nom d'utilisateur"}))
    else:
        # On écrit le message dans chat.dat
        timestamp = datetime.now()
        msgjson = {
            'date': timestamp.strftime('%d/%m/%y'),
            'time': timestamp.strftime('%H:%M'),
            'user': data['username'],
            'msg': form_data['msg']
        }
        # Écriture en append
        with open('../data/chat.dat', 'a', encoding='utf-8') as chat_file:
            chat_file.write(json.dumps(msgjson))
            chat_file.write('\n')

        # Envoi de la réponse
        print(json.dumps({'num': 0, 'msg': 'Message envoyé.'}))

if __name__ == '__main__':
    main()

