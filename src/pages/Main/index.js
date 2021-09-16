import React from 'react';
import Navbar from '../../components/common/Navbar';
import { PageWrap } from '../../components/common/styled';
import ListMemo from '../../components/common/ListMemo';
import { useState } from 'react';

function Main() {
    const [name, setName] = useState([
        {
            key: 0,
            title: '아쿠아 플레닛',
            likeNum: 0
        },
        {
            key: 1,
            title: '보정동 카페거리',
            likeNum: 0
        },
        {
            key: 2,
            title: '코엑스 디디쇼',
            likeNum: 0
        }]);

    const AddLike = (id) => {
        setName(name.map(item =>
            item.key === id ? { ...item, likeNum: item.likeNum + 1 } : item
        ));
    };

    return (
        <PageWrap>
            <div className="Main">
                <Navbar />
                {name.map((item) => (<ListMemo key={item.key} id={item.key} list={item} AddLike={AddLike} />))}
            </div>
        </PageWrap>
    );
}

export default Main;