import { $ } from 'bun';

const packageJsonPath = 'package.json';
const packageJson = await Bun.file(packageJsonPath).json();

let [major, minor, patch] = packageJson.version.split('.').map(Number);
major += 1;
minor = 0;
patch = 0;
packageJson.version = `${major}.${minor}.${patch}`;

await Bun.write(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

console.log(`Bumped major version to ${packageJson.version}`);
await $`git add package.json`; 