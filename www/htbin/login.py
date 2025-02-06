#!/usr/bin/env python3

import os
import sys
import urllib.parse
import hashlib
import pickle


def get_form_data():
    """
    Récupère les données de formulaire, peu importe si c'est un GET ou un POST.
    Retourne un dictionnaire {champ: valeur}.
    """
    method = os.environ.get('REQUEST_METHOD', 'GET').upper()
    
    if method == 'POST':
        # Récupération de la longueur des données
        content_length = int(os.environ.get('CONTENT_LENGTH', 0))
        # Lecture du flux d'entrée
        raw_data = sys.stdin.read(content_length)
    else:
        # Si ce n'est pas un POST, on suppose une requête GET (ou autre)
        raw_data = os.environ.get('QUERY_STRING', '')

    # Analyse des paires clé=valeur
    parsed_data = urllib.parse.parse_qs(raw_data, keep_blank_values=True)
    
    # Convertit les listes renvoyées par parse_qs en chaînes simples
    form_data = {}
    for key, values in parsed_data.items():
        # parse_qs renvoie toujours une liste pour chaque clé
        form_data[key] = values[0] if values else ''
    
    return form_data


def main():
    # En-têtes HTTP
    print('Cache-Control: no-cache')
    print('Content-type: text/plain; charset=utf-8')
    print()

    # Chargement des données utilisateur
    with open('../data/user.dat', 'rb') as data_file:
        data = pickle.load(data_file)

    # Récupération des données du formulaire
    form_data = get_form_data()

    # Traitement spécial pour le mot de passe (hachage)
    for name in list(form_data.keys()):
        if name.lower() == 'userpwd':
            # On hache la valeur du champ userpwd
            form_data[name] = hashlib.sha512(form_data[name].encode('utf-8')).hexdigest()

    # Vérifications
    if 'username' not in form_data or not form_data['username']:
        print('Le nom d\'utilisateur ne doit pas être vide.')
    elif 'userpwd' not in form_data or not form_data['userpwd']:
        print('Le mot de passe ne doit pas être vide.')
    elif (form_data['username'] == data['username'] 
          and form_data['userpwd'] == data['userpwd']):
        print(f"Bonjour {data['firstname']} {data['lastname']} !")
    else:
        print('Le nom d\'utilisateur et le mot de passe sont invalides.')


if __name__ == '__main__':
    main()