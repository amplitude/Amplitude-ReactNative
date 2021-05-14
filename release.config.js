module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    ['@semantic-release/github'],
    [
      '@google/semantic-release-replace-plugin',
      {
        replacements: [
          {
            files: ['src/constants.ts'],
            from: "packageVersion: '.*'",
            to: "packageVersion: '${nextRelease.version}'",
            results: [
              {
                file: 'src/constants.ts',
                hasChanged: true,
                numMatches: 1,
                numReplacements: 1,
              },
            ],
            countMatches: true,
          },
        ],
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd: 'yarn update-example-pod-lockfile',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'docs',
          'package.json',
          'src/constants.ts',
          'example/ios/Podfile.lock',
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
