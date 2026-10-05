# Exercice - Un blocage mal signalé (étape 4)

Karim a posté ce message à 10h40 sur le canal de l'équipe :

> ça marche pas le push 😭 qqn ?

Ce qu'il fait vraiment : il a résolu un conflit sur la branche `feat/date-inconnue`, puis lancé `git push`. Le terminal affiche :

```
To https://github.com/karim-b/trackr-entrainement-karim.git
 ! [rejected]        feat/date-inconnue -> feat/date-inconnue (fetch first)
error: failed to push some refs to 'https://github.com/karim-b/trackr-entrainement-karim.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally.
```

Il a déjà relancé `git push` deux fois. Il n'ose pas faire `git push --force` : sa coéquipière Inès a peut-être poussé un commit sur cette branche ce matin.

## Votre travail

Réécrivez son message en quatre lignes, dans un commentaire de l'issue que vous venez d'ouvrir :

- Je fais :
- Ce qui bloque :
- J'ai essayé :
- J'ai besoin de :
