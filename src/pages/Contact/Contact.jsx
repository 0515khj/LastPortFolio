import { ContactWrap } from './contactStyled';

const Contact = () => {
    return (
        <ContactWrap>
            <h2>[ <span> CONTACT</span> ]</h2>
                <h3>새로운 여정을 위한 커밋(Commit)을 기다립니다.</h3>
            <div className="inner">
                <ul>
                    <li>
                        <img src="/images/call.png" alt="" />
                        <p>010-6543-9118</p>
                    </li>
                    <li>
                        <img src="/images/mail.png" alt="" />
                        <p>kh32100@naver.com</p>
                    </li>
                    <li>
                        <img src="/images/git.png" alt="" />
                        <p> <a href="https://github.com/0515khj" target='_blank'>https://github.com/0515khj</a> </p>
                    </li>
                </ul>



            </div>
        </ContactWrap>
    );
};

export default Contact;