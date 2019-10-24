module.exports = {
    types: [
      { value: 'feat', name: 'feat:     A new feature\n [新增功能]' },
      { value: 'fix', name: 'fix:      A bug fix\n [修复bug]' },
      { value: 'docs', name: 'docs:     Documentation only changes\n [修改文档]' },
      {
        value: 'style',
        name:
          'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)\n [仅仅修改了空格、缩进等，不改变代码逻辑]',
      },
      {
        value: 'refactor',
        name: 'refactor: A code change that neither fixes a bug nor adds a feature\n [代码重构，未新增任何功能和修复任何bug]',
      },
      {
        value: 'perf',
        name: 'perf:     A code change that improves performance\n [改善性能和体现的修改]',
      },
      { value: 'test', name: 'test:     Adding missing tests\n [测试用例的修改]' },
      {
        value: 'chore',
        name:
          'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation\n [非src和test的修改]',
      },
      { value: 'revert', name: 'revert:   Revert to a commit\n [回滚到上一个版本]' },
      { value: 'ci', name: 'ci:      Work in progress\n [自动化流程配置修改]' },
    ],
  
    scopes: [{ name: '功能' }] ,    //用于说明commit的影响范围
  
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
  
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
      type: "选择您正在提交的代码type:",
      scope: '\n表示此更改的范围(可选):',
      // used if allowCustomScopes is true
      customScope: '表示此更改的范围:',
      subject: '用简短的祈使句来描述这种变化:\n',
      body: '提供更详细的更改描述(可选)。使用“|”中断新行:\n',
      breaking: '列出任何中断更改(可选):\n',
      footer: '列出任何由此更改关闭的问题(可选)。例如:# 31 # 34:\n',
      confirmCommit: '您确定要继续执行上面的提交吗?',
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body'],
  
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };