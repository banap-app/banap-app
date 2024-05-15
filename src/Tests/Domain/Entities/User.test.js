import { v4 } from "uuid"
import User from "../../../Domain/Entities/User"

jest.mock('uuid', () => ({
  v4: jest.fn(() => 'd5afc26b-eb03-452d-b855-de51c811d691'), // UUID válido
  validate: jest.fn(() => true) // Sempre retorna true para a validação
}))

class Sut {
  static makeSut() {
    return new User('Asher', 'Novelli#2@as', 'asher@gmail.com', '', true)
  }
}

describe('User Tests', () => {
  test('should first', () => {
    const user = Sut.makeSut()
    expect(user.get('name')).toBe('Asher')
    expect(user.get('password')).toBe('Novelli#2@as')
    expect(user.get('email')).toBe('asher@gmail.com')
    expect(user.get('active')).toBe(true)
    expect(user.get('id')).toBeDefined()
  })

  test('should deactivate', () => {
    const user = Sut.makeSut()
    user.deactivate()
    expect(user.get('active')).toBe(false)
  })

  test('should activate', () => {
    const user = Sut.makeSut()
    user.activate()
    expect(user.get('active')).toBe(true)
  })

  test('test match object', () => {
    const user = Sut.makeSut()
    expect(user.to_dict()).toMatchObject({
      id: 'd5afc26b-eb03-452d-b855-de51c811d691',
      name: 'Asher',
      password: 'Novelli#2@as',
      email: 'asher@gmail.com',
      created_at: new Date().toISOString(),
      active: true
    })
  })
})
