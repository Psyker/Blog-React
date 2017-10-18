import reqwest from 'reqwest';

export function _fetchData(type) {
    let url = `http://localhost:8000/api/${type}`;
    return reqwest({
        method: 'GET',
        url: url,
        success: (data) => {
            return data
        },
    });
}

export function _fetchDataById(type, param) {
    let url = `http://localhost:8000/api/${type}/${param}`;
    return reqwest({
        method: 'GET',
        url: url,
        success: (data) => {
            return data
        }
    });
}

export function _postComment(comment) {
    return reqwest({
        method: 'POST',
        url: 'http://localhost:8000/api/comments/new',
        data: {
            'appbundle_comment[author]': comment.author,
            'appbundle_comment[message]': comment.message,
            'appbundle_comment[project]': comment.project,
            'appbundle_comment[avatar]': comment.avatar,
        },
        success: (data) => {
            return data
        }
    })
}

export function _login(credentials) {
    return reqwest({
        method: 'POST',
        url: 'http://localhost:8000/api/login_check',
        data: {
            '_username': credentials._username,
            '_password': credentials._password,
        },
    }).then((response) => {
        return response
    })
}

