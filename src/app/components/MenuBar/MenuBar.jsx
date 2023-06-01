
import { FaAlignLeft, FaShoppingCart } from "react-icons/fa";
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const DesignMenuBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    padding: 0 8px;
    height: 35px;
    color: white;
    font-size: 15px;
    &  > :not(div) {
      font-size: 20px;
    }
`

const MenuBar = (props) => (
  <DesignMenuBar className="MenuBar" data-testid="MenuBar">
    <FaAlignLeft onClick={props.actionMenu}/>
    <div>
      { props.children }
    </div>
    <FaShoppingCart onClick={props.actionMenu}/>
  </DesignMenuBar>
);

MenuBar.propTypes = {
  children: PropTypes.string,
  actionMenu:PropTypes.func.isRequired,
  actionCart:PropTypes.func.isRequired
};

MenuBar.defaultProps = {};

export default MenuBar;