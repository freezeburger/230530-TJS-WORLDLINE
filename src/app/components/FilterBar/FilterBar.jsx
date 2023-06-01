import { useState } from 'react';
import PropTypes from 'prop-types';
import './FilterBar.css';
import { FaRegHeart, FaSlidersH } from "react-icons/fa";
import styled from "@emotion/styled";
const DesignFilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: aliceblue;
  font-size: 15px;
  padding: 0 8px;
  height: 35px;
  color: gray;
  & > :not(div) {
    font-size: 20px;
  }
  & input {
    border: 1px solid gray;
  }
  & input:focus {
    outline-color: transparent;
    outline-style: none;
  }
`;
const FilterBar = (props) => {
    const [inputVisible, setInputVisible] = useState(false);
    const handleClick = () => {
        setInputVisible(true)
    }
    const handleBlur = () => {
        setInputVisible(false)
    }
    return (
        <DesignFilterBar className="FilterBar" data-testid="FilterBar">
            {props.actionFav ? <FaRegHeart onClick={props.actionFav}/> : <div/>}
            {inputVisible ? <input placeholder="search ..."
                                   value={props.value}
                                   onChange={ evt => props.valueChange(evt.target.value)}
                                   onBlur={handleBlur}
                                   autoFocus/> : <div onClick={handleClick} >{props.children}</div> }
            {props.actionFilter ? <FaSlidersH onClick={props.actionFilter}/> : <div/>}
        </DesignFilterBar>
    )
};
FilterBar.propTypes = {
    children:PropTypes.string,
    actionFav:PropTypes.func,
    actionFilter:PropTypes.func,
    value: PropTypes.string,
    valueChange: PropTypes.func.isRequired
};
FilterBar.defaultProps = {
    children: "Products List"
};
export default FilterBar;