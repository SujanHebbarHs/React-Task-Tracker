import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddTask }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text={showAddTask ? "Cancle" : "Add"} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps={
    'title': "Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string
}

export default Header
