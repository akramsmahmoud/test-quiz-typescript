#!/bin/sh
python manage.py migrate

while true; do
    echo "Re-starting Django runserver_plus!"
    python manage.py runserver 0.0.0.0:8000
    sleep 2
done
