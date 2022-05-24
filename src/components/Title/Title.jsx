import PropTypes from "prop-types";

import s from './Title.module.scss';

const Title = ({ title }) => <p className={s.title}>{ title}</p> 

Title.propTypes = {
    title: PropTypes.string.isRequired,
};


export default Title;