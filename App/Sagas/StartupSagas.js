// process STARTUP actions - pass actions are arg if needed
export function *startup() {
  if (__DEV__ && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }

    subObject.circularDependency = subObject // osnap!
    console.tron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        'someInlineFunction': () => true,
        'someGeneratorFunction': startup,
      },
    })
  }
}
