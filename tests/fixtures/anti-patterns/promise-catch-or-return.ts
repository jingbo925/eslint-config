export function bad () {
  const p = new Promise(resolve => setTimeout(resolve, 1000))

  async function test (): Promise<void> {
    await console.info('test')
  }

  p.then(test)
}
