const scriptURL = 'https://script.google.com/macros/s/AKfycbz8tWXDsffC9CF9_eRqX8zpbkp0fmWR40XoBGwvMqSsLJv08HB5lKjs4OSx0ifybjL8/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })