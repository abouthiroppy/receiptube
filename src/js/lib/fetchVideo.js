import {
  apiKey,
  maxResults
} from './val';

/**
 * @param {Object} id: movie_id
 *
 */
export default function (args) {
  let uri = 'https://www.googleapis.com/youtube/v3/search';
  // [WIP]
  let opt = {
    q: args,
    part: 'snippet',
    maxResults: maxResults,
    order: 'viewCount',
    key: apiKey
  }

  $.ajax({
    url: uri,
    type: 'GET',
    dataType: 'JSON',
    data: opt
  }).done((data) => {
    for (let item of data.items) {
      console.log(item)
      require("./../../build/lib/components/searchVideo.js");
    }
  }).fail((data) => {
    console.error('error');
  });
}
