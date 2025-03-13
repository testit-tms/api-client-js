const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function clean() {
  const command = 'git restore *validationProblemDetails.ts && git restore *problemDetails.ts'
  const { stdout, stderr } = await exec(command);
  console.log('stdout:', stdout);
  console.error('stderr:', stderr);
}
clean();

