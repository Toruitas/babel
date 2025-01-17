const actual = transform(
  '<Foo bar="baz" />',
  Object.assign({}, opts, { filename: 'C:\\fake\\path\\mock.js' })
).code;

const expected = multiline([
  'var _jsxFileName = "C:\\\\fake\\\\path\\\\mock.js";',
  '',
  '/*#__PURE__*/',
  'React.createElement(Foo, {',
  '  bar: "baz",',
  '  __source: {',
  '    fileName: _jsxFileName,',
  '    lineNumber: 1,',
  '    columnNumber: 1',
  '  },',
  '  __self: this',
  '});',
]);


expect(actual).toBe(expected);
