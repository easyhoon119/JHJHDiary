import styled from 'styled-components';

function ListMemo(props) {

    return (
        <ListStyle>
            <h3>{props.list.title} <span onClick={() => props.AddLike(props.id)}>π</span> {props.list.likeNum}</h3>
            <p style={{ fontSize: '1.3vw', marginBottom: '0.5vw' }}>νμ΄μ κ΄κ΅μ μμΉν μμΏ μ νλλ κ°λ !</p>
            <p>2021λ 5μ 6μΌ</p>
        </ListStyle>
    );
}

const ListStyle = styled.div`
    width : 100%;
    padding : 1vw;
    border-bottom : 1px solid grey;
    box-sizing : border-box;
    font-size : 1.1vw;

    h3 {
        font-size : 1.5vw;
        font-weight : 600;
        margin-bottom : 0.5vw;
    }
`;

export default ListMemo;