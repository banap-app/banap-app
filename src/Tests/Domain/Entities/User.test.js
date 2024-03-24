import User from "../../../Domain/Entities/User"

describe('User Tests', () => {
  test('should first', () => {
    const user = new User('Asher', 'Novelli#2@as', 'asher@gmail.com', '', true)
    expect(user.get('name')).toBe('Asher')
    expect(user.get('password')).toBe('Novelli#2@as')
    expect(user.get('email')).toBe('asher@gmail.com')
    expect(user.get('active')).toBe(true)
    expect(user.get('id')).toBeDefined()
  })

  test('should deactivate', () => {
    const user = new User('Asher', 'Novelli#2@as', 'asher@gmail.com', '', true)
    user.deactivate()
    expect(user.get('active')).toBe(false)
  })

  test('should activate', () => {
    const user = new User('Asher', 'Novelli#2@as', 'asher@gmail.com', '', false)
    user.activate()
    expect(user.get('active')).toBe(true)
  })
})
