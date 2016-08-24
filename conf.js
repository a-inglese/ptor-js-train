exports.config = {
  framework: 'jasmine',
  directConnect:true,
  specs: ['spec.js'],
  multiCapabilities: [{'browserName': 'chrome'},{'browserName': 'firefox'}]
}
