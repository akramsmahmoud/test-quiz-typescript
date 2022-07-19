# Quiz

## Requisiti

- Il quiz è formato da tre domande, fornite tramite un api.
- Il quiz ha una pagina iniziale contenente una CTA ("Inizia!").
- Le domande vengono presentate all'utente una alla volta.
- Ogni domanda ha 4 possibili risposte.
- L'utente ha 30 secondi di tempo per rispondere alla domanda, il tempo rimanente viene mostrato nella schermata della domanda tramite un conto alla rovescia o un feedback visivo (es: clessidra, barra che si muove), nel caso il tempo scada la domanda è da considerarsi errata e si passa alla successiva.
- Solo una delle 4 risposte è corretta. Quando l'utente ha scelto la risposta viene effettuata una chiamata per conoscere il risultato. Il feedback è immediato, una risposta corretta diventerà verde, una scorretta diventerà rossa.
- Quando l'utente ha risposto a tutte le domande sarà presentata una schermata riassuntiva in cui vedrà il numero di risposte corrette sul totale (es: 1 su 3) e un messaggio personalizzato a seconda del numero di risposte corrette:
  - 1 risposte corretta: "Poteva andare meglio"
  - 2 risposte corrette: "Ci sei quasi..."
  - 3 risposte corrette: "Bravissimo!"
- Nella cartella "docs" è fornito un file (quiz-test.xd) in formato Adobe XD contenente tutto il necessario per il design delle pagine.
- Una versione su Figma è disponibile al seguente link: https://www.figma.com/file/BFReQf3uxQdXgjpoe9FoHN/Quiz-(1)?node-id=0%3A1, attenzione alla sezione commenti.

## Backend
Entrambe le API necessarie sono presenti nel progetto, è disponibile un backend costruito con Django e Django-rest-framework accessibile da un container Docker.
- Lista delle domande: localhost:8000/generate-quiz/
- Risposta corretta:
  - Effettuare una chiamata POST a localhost:8000/answer/ con i seguenti parametri:
    - question_id
    - answer_id
  - In caso di risposta corretta si avrà come risposta "True"
  - In caso di risposta non-corretta si avrà come risposta "False"
Visitando i link delle API è possibile leggerne una breve descrizione e testarle.

## Come procedere al test
- Dopo aver avuto l'accesso a questo repository effettuare un fork dello stesso.
- Aggiungere una cartella "frontend" al repository.
- Effettuare un analisi dei requisiti, da aggiungere come documento markdown alla cartella appena creata, possibilmente con tempi di sviluppo e priorità delle feature richieste.
- Sviluppare l'applicazione secondo i requisiti con qualsiasi tecnologia si voglia.
- Preferibilmente seguire una metodologia TDD o BDD: la presenza dei test nel codice consegnato è considerato un plus.
- Pushare le modifiche sul proprio fork.
