/*
 * @Descripttion:
 * @Author: chelsea.jiang
 * @Date: 2021-01-20 17:01:51
 * @LastEditors: chelsea.jiang
 * @LastEditTime: 2021-01-26 19:39:21
 */
const ENDPOINT = 'https://jsonplaceholder.typicode.com/users/';

export const getUsers = () =>
    fetch(ENDPOINT)
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            else return response.json();
        })
        .then((json) => json);
