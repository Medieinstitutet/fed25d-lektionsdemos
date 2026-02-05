# Installera TypeScript efteråt

> OBS! Om du redan har startat projektet med TypeScript så behöver du _inte_ göra detta.

Utför följande steg:

1. I terminalen, skriv `npm install --save-dev typescript`
2. Skapa en fil i roten på projektet och döp den till `tsconfig.json`. Lägg in koden nedan i den:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```
3. I filen `package.json`, ändra scriptet `build` till att vara: `"build": "tsc && vite build"` för att kompilera TypeScript.
4. I `src`-mappen, döp om `main.js` till `main.ts`.
5. I `index.html`, döp om filen i `<script>`-taggen från `main.js` till `main.ts`.
6. Sen när du är redo att börja fightas med TS, ta bort `// @ts-nocheck` från dina dokument.
