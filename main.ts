import { mkdirSync, writeFileSync } from 'node:fs';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', 'The hero got a close-up, a theme song and your tears; I blink behind the sofa collecting dust, so forgive me for stealing the climax.', 'utf8');
