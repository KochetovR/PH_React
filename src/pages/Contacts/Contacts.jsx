import { MdPhoneInTalk } from 'react-icons/md';
import { SiLinkedin, SiGmail } from 'react-icons/si';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import Title from 'components/Title';

import s from './Contacts.module.scss';

const Contacts = () => {
    return (
        <>
            <Title title='Contacts' />
            
            <div className={s.linksBlock}>
                <a
                    href="https://www.linkedin.com/in/roman-kochetov-98a8721b9/"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <SiLinkedin size={'60%'} color={'#ffffff'} />
                </a>

                <a
                    href="https://github.com/KochetovR"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <FaGithubSquare size={'60%'} color={'#ffffff'} />
                </a>
            </div>

            <div className={s.linksBlock}>
                <a
                    href="https://www.instagram.com/roman.kochetov.10/"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <BsInstagram size={'60%'} color={'#ffffff'} />
                </a>

                <a
                    href="https://www.facebook.com/roman.kochetov.10"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <BsFacebook size={'60%'} color={'#ffffff'} />
                </a>
            </div>

            <div className={s.linksBlock}>
                <a
                    href="mailto:k04erg0@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <SiGmail size={'60%'} color={'#ffffff'} />
                </a>
                <a
                    href="tel:+380663716961"
                    target="_blank"
                    rel="noreferrer"
                    className={s.link}
                >
                    <MdPhoneInTalk size={'60%'} color={'#ffffff'} />
                </a>
            </div>
        </>
    )
}

export default Contacts;