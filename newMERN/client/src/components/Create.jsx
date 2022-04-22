import React, {useState} from 'react';

const Create = () => {
  const [fieldValue, setFieldValue] = useState('');
  const [createValue, setCreateValue] = useState('');

  console.log('createValue ', createValue);
  return (
    <div>
      <div>Input here</div>
      <input onChange={e => setFieldValue(e.target.value)}></input>
      <button onClick={() => setCreateValue(fieldValue)}>Create</button>
    </div>
  )
}

export default Create
