(function () {
  console.info("Conectados loaded!");

  function isKeyPressed(event, expectedKey, expectedCode) {
    const code = event.which || event.keyCode;

    if (expectedKey === event.key || code === expectedCode) {
      return true;
    }
    return false;
  }

  document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (isKeyPressed(event, 'Enter', 13)) {
      event.preventDefault();
      const { value } = this
      window.location.href = `/search.html?t=${value}`
      return false
    }
  })

  const searchPage = document.getElementById('search-main')

  if (searchPage) {
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://www.eventbrite.com.br/api/v3/destination/events/?event_ids=80054871275,80059715765,104132180154,103839733438,103279257038,104213358962,100050866836,104214163368,104213856450,99847073284,99347408774,104213766180,103636507584,100046686332,103740318084,103939499842,103940416584,103937850910,103937580100,103940093618&expand=series,event_sales_status,primary_venue,image,saves,my_collections,ticket_availability&page_size=1000',
      {
        method: 'get',
        headers: {
          'Authorization': 'Bearer JYCYX44DBC35Y42AVDFS',
          'Accept': '*/*'
        },
        mode: 'cors',
        cache: 'default'
      })
      .then(response => response.json())
      .then(contents => {
        let results = ''
        const { events } = contents
        console.log(events)
        if (events) {
          for (let i = 0; i < events.length; i++) {
            const event = events[i];
            const $template = `
                <div class="result-items col-sm-3" style="
                margin-bottom: 5rem;
            ">
                <a href="/single.html">
                  <div class="card-item">
                    <img src="${event.image.url}" alt="">
                  </div>
                  <div class="">
                    <div class="card-info-details">
                      <span class="card-info-title">${event.name}</span>
                      <span class="card-info-when">${new Date().toLocaleDateString('pt-br')}</span>
                    </div>
                  </div>
                </a>
              </div>
            `
            results += $template
          }
          console.log(results)
          $('#results').html(results)
        }
      })
      .catch(e => console.error('API request error', e))
  }
})() 