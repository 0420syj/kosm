import {getBoardOnce, getBoards} from '../util/APIUtils'
import React, {useState, useEffect} from 'react';
// 게시글 테스트 데이터


const data = [
    {
        id: 1,
        title: '안녕하세요',
        author: '강파고',
        time: '2020.01.31',
    },
    {
        id: 2,
        title: '이럴수가',
        author: '완파고',
        time: '2020.02.04',
    },
    {
        id: 3,
        title: '정말',
        author: '손파고',
        time: '2020.01.29',
    },
    {
        id: 4,
        title: '멋져요',
        author: '백파고',
        time: '2020.02.03',
    },
];

/*
const data = {
    id: '',
    title: '',
    author: '',
    content: ''
}
*/
getBoardOnce() 
    .then(response => {
        //console.log(response)
        
        data.push({
            id: 5,
            title: response.title,
            author: response.author,
            time: '2020.01.01'
        })
    });


/*
for(var i = 5; i<=100; i++)
    data.push({
        id: i,
        title: data[i%4].title,
        author: data[i%4].author,
        time: data[i%4].time,
    })
*/

//console.log(data);
export default data;