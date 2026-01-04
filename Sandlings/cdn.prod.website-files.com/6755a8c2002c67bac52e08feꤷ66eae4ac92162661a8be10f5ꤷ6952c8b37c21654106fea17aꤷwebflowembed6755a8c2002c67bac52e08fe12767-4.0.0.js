document.querySelectorAll('#galleryId').forEach((el) => el.remove());
            var s=document.createElement('script');s.type='text/javascript'; s.async=true;
            s.id = 'galleryId';
            s.src='https://gallery.bestfreecdn.com/storage/js/gallery-12767.js?ver=4';
            document.body.appendChild(s);