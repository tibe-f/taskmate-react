import React from 'react'

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="#" alt="TaskMate" />
        <span>Taskmate</span>
      </div>
      <div className="teamSelector">
        <span className="light active"></span>
        <span className="lightdark"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>

      </div>
    </header>
  )
}
