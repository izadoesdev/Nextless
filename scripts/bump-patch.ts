import { $ } from 'bun';

const packageJsonPath = 'package.json';
const packageJson = await Bun.file(packageJsonPath).json();

const [major, minor, patch] = packageJson.version.split('.').map(Number);
packageJson.version = `${major}.${minor}.${patch + 1}`;

await Bun.write(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);

console.log(`Bumped patch version to ${packageJson.version}`);
await $`git add package.json`; 