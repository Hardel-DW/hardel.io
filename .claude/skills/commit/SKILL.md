---
name: commit
description: Règles de commit de hardel.io, Conventional Commits en 70 caractères max. À charger avant d'écrire un message de commit ou de commiter.
---

# Écrire un commit
Un commit suit https://www.conventionalcommits.org/en/v1.0.0/ en anglais. Le sujet dit ce que le commit change, en une ligne courte. Le diff dit le reste.

## Le sujet
`type: description` ou `type(scope): description`, 70 caractères maximum, sujet compris.
Description en minuscules, à l'impératif, sans point final. "fix: close the lightbox on escape", pas "Fixed the lightbox.".
Le scope est un mot, le domaine touché, `hero`, `work`, `gallery`, `contact`, `layout`, `ui`, `assets`. On l'omet quand le type suffit.
Un `!` après le type ou le scope marque un changement cassant.

## Les types
- `feat` une section ou une capacité nouvelle.
- `fix` un bug corrigé.
- `refactor` du code déplacé ou réécrit sans changer le rendu.
- `perf` du code plus rapide sans changer le rendu.
- `style` un changement visuel seulement, couleurs, espacements, typo.
- `content` des textes, images ou données de `src/lib` seulement.
- `build` Vite, dépendances, versions.
- `chore` le reste, config, scripts, nettoyage sans code.
- `revert` l'annulation d'un commit, le sujet reprend celui d'origine.

## Le corps
Le corps est optionnel et rare. Il sert quand le pourquoi ne se lit pas dans le diff, une ligne ou deux après une ligne vide, phrases complètes, pas de tiret exotique.

## Un commit, un sujet
Si le sujet a besoin d'un "and", le diff porte deux changements, on fait deux commits.

## Avant de commiter
Lire `git status` et `git diff --staged`, jamais deviner.
Ne commiter que ce que l'utilisateur a autorisé, /commit est cette autorisation pour le diff en cours, rien d'autre. Pas de ligne d'attribution.
