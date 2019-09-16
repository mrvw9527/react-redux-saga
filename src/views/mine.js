import React from 'react'
import { connect } from 'react-redux';
import { inputForMine } from './../actions'
import './public.css'

function  Mine(props) {
  const handleChange = () => {
    props.dispatch(inputForMine({ content: 'Change_Content' }))
  }

  return (
    <div>
      <h4>Content: { props.input.content}</h4>
      <span className='buttonLink' onClick={handleChange}>点击改变content</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  const data = state.mine.mine
  return {
    ...data
  }
}

export default connect(mapStateToProps)(Mine);