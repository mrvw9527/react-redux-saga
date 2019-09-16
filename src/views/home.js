import React from 'react';
import { connect } from 'react-redux';
import { inputForHome, alterTitleFromSaga } from './../actions'
import './public.css'

function  Home (props) {
  const changeTitle = () => {
    props.dispatch(inputForHome({title: 'Home（hasChange）'}))
  }

  const changeTitleFromSaga = () => {
    props.dispatch(alterTitleFromSaga())
  }

  const handleToPath = (url) => {
    return () => {
      const { history } = props
      history.push(url)
    }
  }

  return (
    <div>
      <h3>{props.input.title}</h3>

      <div className='div'>
        <span onClick={changeTitle} className='buttonLink'>点击改变标题</span><br />
        <span onClick={changeTitleFromSaga} className='buttonLink'>点击改变标题（saga方式）</span>
      </div>
      
      <div className='buttonLink' onClick={handleToPath('mine')}>Mine页</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const data = state.home.home
  return {
    ...data
  }
}

export default connect(mapStateToProps)(Home);