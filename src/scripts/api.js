import jQuery from 'jquery';
import { admin_username, admin_password } from "../config/parameters.json"

export function _fetchData(type) {
  let url = `http://localhost:8000/api/${type}`;
  return jQuery.ajax({
    method: 'GET',
    url: url,
    success: (data) => {
      return data
    },
  });
}

export function _fetchDataById(type, param) {
  let url = `http://localhost:8000/api/${type}/${param}`;
  return jQuery.ajax({
    method: 'GET',
    url: url,
    success: (data) => {
      return data
    }
  });
}

export function _postComment(comment) {
  return jQuery.ajax({
    method: 'POST',
    url: 'http://localhost:8000/api/comments/new',
    data: {
        'appbundle_comment[author]' : comment.author,
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
  return jQuery.ajax({
      method: 'POST',
      url: 'http://localhost:8000/api/login_check',
      data: {
        '_username': credentials._username,
        '_password': credentials._password,
      },
      success: (response) => {
          localStorage.setItem('token', response.token);
        return response
      }
  })
}

