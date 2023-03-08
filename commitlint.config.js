module.exports = {
  rules: {
    'jira-rule': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-rule': ({ raw }) => {
          return [
            raw.match(/\[([A-Z]{3,5}-\d+(, [A-Z]{3,5}-\d+)*)|(HOTFIX)|(VERSION)] \w+/),
            'commit should contain Jira key. Something like this - "[KEY-20] Some description" or "[KEY-20, KEY-21] Some description" or "[HOTFIX] Some description" or "[VERSION] 3.1.3"',
          ];
        },
      },
    },
  ],
};
