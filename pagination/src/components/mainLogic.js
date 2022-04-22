import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Success} from '../actions/index';

function MainLogic() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNo, setPageNo] = useState(1)
  const [finalData, setFinalData] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Success());
  }, []);

  useEffect(() => {
    setCurrentPage(pageNo)
  }, [pageNo])
  const state = useSelector(state => state.DataReducer.data)

  // console.log("statelogic", state)

  console.log("currentPage", currentPage)

  const handleClickNext = () => {
    setPageNo(pageNo + 1);
  }
  
  const handleClickPrevious = () => {
    setPageNo(pageNo - 1);
  }

  const handleClickFirst = () => {
    setCurrentPage(pageNo)
  }

  const handleClickSecond = () => {
    setCurrentPage(pageNo + 1)
  }

  const handleClickThird = () => {
    setCurrentPage(pageNo + 2)
  }

  const handleClickLast = () => {
    // setPageNo(pageNo === 500 ? 497 : pageNo)
    setCurrentPage(pageNo + 10)
    // setCurrentPage(pageNo)
  }

  const handleClickHome = () => {
    setPageNo(1)
    // setCurrentPage(pageNo)
  }

  // const handleClickEnd = () => {
  //   setPageNo(500)
  //   // setCurrentPage(pageNo)
  // }


  return (
    <div>
      <button onClick={handleClickHome}> Home </button>
      <button onClick={pageNo > 1 ? handleClickPrevious : null}>Prev</button>
      <button onClick={handleClickFirst}>{pageNo}</button>
      <button onClick={handleClickSecond}>{pageNo + 1}</button>
      <button onClick={handleClickThird}>{pageNo + 2}</button>
      ...
      <button onClick={handleClickLast}>{pageNo === 500 ? 500 : pageNo + 10}</button>

      <button onClick={pageNo < 500 ? handleClickNext : null}>Next</button>
      {/* <button onClick={handleClickEnd}> End </button> */}
    </div>
  )
}

export default MainLogic
