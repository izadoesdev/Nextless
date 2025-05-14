import { $ } from 'bun';

const packageJsonPath = 'package.json';
const packageJson = await Bun.file(packageJsonPath).json();

let [major, minor, patch] = packageJson.version.split('.').map(Number);
minor += 1;
patch = 0;
packageJson.version = `${major}.${minor}.${patch}`;

await Bun.write(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

console.log(`Bumped minor version to ${packageJson.version}`);
await $`git add package.json`;
