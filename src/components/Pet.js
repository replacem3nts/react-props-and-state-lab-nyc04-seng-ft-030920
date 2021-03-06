import React from 'react'

class Pet extends React.Component {
  
      handleAdoption = () => {
        this.props.onAdoptPet(this.props.pet.id)
      }

  render() {
    let {gender, name, type, age, weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name}{' '}
            {gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className='ui disabled button'>Already adopted</button>
          ) : (
            <button className='ui primary button' onClick={this.handleAdoption}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
