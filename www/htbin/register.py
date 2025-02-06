#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys
import urllib.parse
import string
import hashlib
import pickle

def get_form_data():
    """
    Récupère les données de formulaire, que la requête soit GET ou POST,
    et les retourne sous forme de dict {champ: valeur}.
    """
    method = os.environ.get('REQUEST_METHOD', 'GET').upper()
    
    if method == 'POST':
        # Récupération de la longueur des données
        content_length = int(os.environ.get('CONTENT_LENGTH', 0))
        # Lecture depuis stdin
        raw_data = sys.stdin.read(content_length)
    else:
        # En GET, on récupère la QUERY_STRING
        raw_data = os.environ.get('QUERY_STRING', '')

    # Parse la chaîne de requête
    parsed = urllib.parse.parse_qs(raw_data, keep_blank_values=True)
    
    # Convertit les listes retournées par parse_qs en simples chaînes
    data = {}
    for key, values in parsed.items():
        data[key] = values[0] if values else ''
    
    return data

def main():
    # En-têtes HTTP
    print('Cache-Control: no-cache')
    print('Content-type: application/xhtml+xml; charset=utf-8')
    print()

    # Préparation des valeurs par défaut
    data = {
        'username': 'Obligatoire',
        'useremail': 'Obligatoire',
        'userpwd': 'Obligatoire',
        'firstname': 'Facultatif',
        'lastname': 'Facultatif',
        'birthdate': 'Facultatif',
    }
    
    # Récupération des données de formulaire
    form_data = get_form_data()

    # Mise à jour des champs et hachage du mot de passe
    for name, value in form_data.items():
        if name.lower() == 'userpwd':
            data[name] = hashlib.sha512(value.encode('utf-8')).hexdigest()
        else:
            data[name] = value

    # Sauvegarde dans le fichier user.dat
    with open('../data/user.dat', 'wb') as data_file:
        pickle.dump(data, data_file)

    # Lecture du template
    with open('../templates/register.xhtml', 'r', encoding='utf-8') as template_file:
        template_content = template_file.read()

    template = string.Template(template_content)
    # Substitution des variables dans le template
    output = template.safe_substitute(data)

    # Envoi du résultat au navigateur
    print(output)

if __name__ == '__main__':
    main()

