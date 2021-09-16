import { NavbarStyle, FlexBox } from './styled';

function Navbar() {
    return (
        <NavbarStyle>
            <FlexBox style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>JHJH Blog</h3>
                <FlexBox style={{ fontSize: '1.5vw' }} className="navFlex">
                    <p>New thing</p>
                    <p>Login</p>
                </FlexBox>
            </FlexBox>
        </NavbarStyle>
    );
}

export default Navbar;