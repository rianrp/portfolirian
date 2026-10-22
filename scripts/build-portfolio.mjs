import { cp, rm } from 'node:fs/promises';
const source = new URL('../live-site/', import.meta.url);
const output = new URL('../dist/', import.meta.url);
await rm(output, {recursive:true,force:true});
await cp(source, output, {recursive:true});
console.log('Approved English portfolio built in dist/');
