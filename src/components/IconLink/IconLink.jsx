import PropTypes from "prop-types";
import s from './IconLink.module.scss';

export default function IconLink({link, Icon}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={s.link}
        >
            <Icon size={'60%'} color={'#ffffff'} />
        </a>
    )
}

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
};