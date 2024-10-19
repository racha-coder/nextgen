import './App.css';

const Bootstrap = () => {
  return (
    <div className="btn-wrapper d-flex flex-column gap-3 rounded-2 p-3">
      <button className='btn btn-primary'>This is a Button</button>
      <button className='btn btn-secondary'>This is a Button</button>
      <button className='btn btn-success'>This is a Button</button>
      <button className='btn btn-danger'>This is a Button</button>
      <button className='btn btn-warning'>This is a Button</button>
      <button className='btn btn-info'>This is a Button</button>
      <button className='btn btn-light'>This is a Button</button>
      <button className='btn btn-dark'>This is a Button</button>
    </div>
  )
}

export default Bootstrap;