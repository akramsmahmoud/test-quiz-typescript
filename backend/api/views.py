from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView


QUESTIONS = {
    1: {
        "question": "Quale delle seguenti risposte è il nome di un Pokémon?",
        "answers": {
            1:"Imperialdramon",
            2:"Pikachu",
            4:"Semprinimon",
            3:"Barbecue"
        }
    },
    2: {
        "question": "Qualé il nome della razza di Yoda in Star Wars?",
        "answers": {
            5:"Mandaloriani",
            6:"Whills",
            8:"Marziani",
            7:"Non è mai stato detto"
        } 
    },
    3: {
        "question": "Quale tra questi è il nome di un Autobot?",
        "answers": {
            11:"Grimlock",
            10:"Megatron",
            9:"Optimus Crime",
            12:"React"
        }
    }
}

ANSWERS = {
    1:2,
    2:7,
    3:11,
}

class QuestionView(APIView):
    """
    Fornisce una serie di domande
    """

    def post(self, request, format=None):
        return Response(QUESTIONS)

class AnswerView(APIView):
    """
    Data una domanda e una risposta
    fornisce la correttezza o l'incorrettezza della risposta.
    Campi richiesti:
    "question_id"
    "answer_id"

    Ritorna True se la risposta è corretta
    Ritorna False se la risposta è incorretta
    """
    def post(self, request, format=None):
        question_id = request.data.get("question_id", None)
        answer_id = request.data.get("answer_id", None)
        if not all([question_id, answer_id]):
            return Response(status="400")
        answer = ANSWERS[question_id]
        if answer == answer_id:
            return Response({"True"})
        return Response({"False"})
