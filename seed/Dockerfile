FROM mongo

COPY data.json /seed/data.json

CMD mongoimport --host db --db mydb --collection users --file /seed/data.json --jsonArray