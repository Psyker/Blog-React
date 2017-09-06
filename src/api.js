import jQuery from 'jquery';
import { admin_username, admin_password } from "./config/parameters.json"

export function _fetchData(type) {
  let url = `http://localhost:8000/api/${type}`;
  return jQuery.ajax({
    method: 'GET',
    url: url,
    headers: {
      "Authorization": 'Basic '+ btoa(admin_username + ":" + admin_password)
    },
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
    headers: {
      "Authorization": 'Basic '+ btoa(admin_username + ":" + admin_password)
    },
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
    },
    headers: {
      "Authorization": 'Basic '+ btoa(admin_username + ":" + admin_password)
    },
    success: (data) => {
      return data
    }
  })
}

