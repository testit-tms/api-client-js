# Test IT TMS API client for JavaScript
![Test IT](https://raw.githubusercontent.com/testit-tms/api-client-js/master/images/banner.png)

# Getting Started

## Installation
```
npm install testit-api-client
```

# Usage

## Configuration

To use client you need to provide configuration to `Client`:
```ts
const client = new Client({
  url: 'http://example.com',
  configurationId: 'configurationId',
  privateToken: 'privateToken',
  projectId: 'projectId',
  testRunId: 'testRunId',
});
```

After configuration is done you can access different clients from `Client` object and then use methods to control Test IT.

## Examples
```ts
await client.createAutotest(autotest);
await client.updateAutotest(autotest);
await client.linkToWorkItem(autotestId, workItem);
await client.createTestRun(testRun);
await client.startTestRun(testRunId);
await client.loadTestRunResults(testRunId, results);
await client.completeTestRun(testRunId);
```

# Contributing

You can help to develop the project. Any contributions are **greatly appreciated**.

* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/testit-tms/api-client-js/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/testit-tms/api-client-js/blob/master/CODE_OF_CONDUCT.md) before posting your first idea as well.

# License

Distributed under the Apache-2.0 License. See [LICENSE](https://github.com/testit-tms/api-client-js/blob/master/LICENSE.md) for more information.

