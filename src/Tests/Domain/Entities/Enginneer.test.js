import Engineer from '../../../Domain/Entities/Engineer.js'
import Entity from '../../../__seedwork/Domain/Entity'

class Sut {
  static makeSut () {
    const engineer = new Engineer(
      'Asher',
      'AsherNovelli$150',
      'asher@gmail.com',
      '',
      true,
      1234567890123
    )
    return engineer
  }
}
describe('Tests of Engineer Class', () => {
  test('Test if Engineer is instance of Entity', () => {
    const engineer = Sut.makeSut()
    expect(engineer).toBeInstanceOf(Entity)
  })

  test('Test if properities are available', () => {
    const engineer = Sut.makeSut()
    expect(engineer.get('name')).toBe('Asher')
    expect(engineer.get('email')).toBe('asher@gmail.com')
    expect(engineer.get('password')).toBe('AsherNovelli$150')
    expect(engineer.get('active')).toBe(true)
    expect(engineer.get('id')).toBeDefined()
  })

  test('Test deactivate function', () => {
    const engineer = Sut.makeSut()
    engineer.deactivate()
    expect(engineer.get('active')).toBe(false)
  })
})
